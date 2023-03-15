class ResourceController {
    constructor(resource, options = {}) {
        this.resource = resource
        this.options = options
    }

    getAll = (req, res) => {
        console.log("getAll")
        console.log(this.resource)
        res.send({
            [this.resource.name]: this.resource.elements,
        })
    }

    getById = (req, res) => {
        const { id } = req.params
        const element = this.resource.getById(id)
        res.send({
            [this.resource.name]: element,
        })
    }

    add = (req, res) => {
        const { element } = req.body
        this.resource.add(element)
        res.send({
            [this.resource.name]: element,
        })
    }

    delete = (req, res) => {
        const { id } = req.params
        this.resource.delete(id)
        res.send({
            [this.resource.name]: id,
        })
    }

    getColumns = (req, res) => {
        console.log("getColumns")
        console.log(this.resource.columns)
        res.send({
            [this.resource.name]: this.resource.columns,
        })
    }

    addColumn = (req, res) => {
        const { column } = req.body
        this.resource.addColumn(column)
        res.send({
            [this.resource.name]: column,
        })
    }
}

module.exports = { ResourceController }
