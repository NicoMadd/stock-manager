const fs = require("fs")

class Resource {
    constructor(
        name,
        columns = [],
        elements = [],
        validateElement = () => {},
        resourcePath = __dirname
    ) {
        this.name = name
        this.columns = columns
        this.elements = elements
        this.validateElement = validateElement
        this.resourcePath = resourcePath
    }

    getAll() {
        return this.elements
    }

    getById(id) {
        return this.elements.find((element) => element.id == id)
    }

    add(element) {
        element.id = this.elements.length + 1
        this.elements.push(element)
        this.saveElements()
    }

    delete(id) {
        this.elements = this.elements.filter((element) => element.id != id)
        this.saveElements()
    }

    update(id, element) {
        const index = this.elements.findIndex((element) => element.id == id)
        this.elements[index] = element
        this.saveElements()
    }

    validate(element) {
        this.validateElement(element)
    }

    getColumns() {
        return this.columns
    }

    addColumn(column) {
        this.columns.push(column)
        // add attribute to elements
        this.elements.forEach((element) => (element[column.name] = null))
        this.saveElements()
    }

    deleteColumn(column) {
        this.columns = this.columns.filter((c) => c.name != column.name)
        // delete attribute from elements
        this.elements.forEach((element) => delete element[column.name])
        this.saveElements()
    }

    saveElements() {
        fs.writeFileSync(
            `${this.resourcePath}/${this.name}.json`,
            JSON.stringify({
                columns: this.columns,
                elements: this.elements,
            })
        )
    }
}

module.exports = {
    Resource,
}
