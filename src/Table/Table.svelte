<script>
    import { capitalize } from "../Utils/Utils.js"
    import SearchBar from "./SearchBar.svelte"
    import RowMenu from "./RowMenu/RowMenu.svelte"

    export let addRow = undefined
    export let elementOptions = undefined
    export let options // [{column, value}]
    export let excludeColumns = []

    let showMenu = false
    let formattedSelectedElement = undefined
    let pos = { x: 0, y: 0 }
    export let formatRowElement = (event) => {
        let target = event.path[1]
        return { id: target.id }
    }

    let columns = [
        ...new Set(options.map((option) => Object.keys(option)).flatMap((keys) => keys)),
    ]

    options.forEach((option) => {
        columns.forEach((column) => {
            if (!option[column]) {
                option[column] = ""
            }
        })
        return option
    })

    let filteredOptions

    let filter = () => {
        let searchInput = document.getElementById("search").value
        filteredOptions = options.filter((option) => {
            for (let key in option) {
                if (!option[key]) continue
                let value = option[key].toString()
                if (value.toLowerCase().includes(searchInput.toLowerCase())) {
                    return true
                }
            }
            return false
        })

        return filteredOptions
    }

    let openRowMenu = async (e) => {
        if (showMenu) {
            showMenu = false
            await new Promise((res) => setTimeout(res, 100))
        }

        formattedSelectedElement = formatRowElement(e)
        pos = { x: e.clientX, y: e.clientY }
        showMenu = true
    }

    function closeMenu(e) {
        showMenu = false
    }

    let handleAddRow = () => {
        let inputs = [].slice.call(
            document.getElementById("insertRow").getElementsByTagName("input")
        )

        let filteredColumns = columns.filter((column) => !excludeColumns.includes(column))

        let values = inputs.reduce((values, input, index) => {
            values[filteredColumns[index]] = input.value
            return values
        }, {})
        console.log("inputs", inputs)
        try {
            addRow(values)
            inputs.forEach((input) => (input.value = ""))
        } catch (e) {}
    }

    function onPageClick(e) {
        // evaluates wether the class in the event target is row-menu. Is a dependent solution ive found. :v

        let isRowMenu = e.target.classList.contains("row-menu")
        if (!isRowMenu) closeMenu()
    }

    $: {
        filteredOptions = options
    }
    let tdStyle =
        "text-left border-b border-l-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"

    let trStyle = "text-sm hover:bg-gray-100"

    let thStyle =
        "border-b dark:border-slate-600 font-medium p-4 text-slate-400 dark:text-slate-200 text-left hover:bg-gray-100"
</script>

<SearchBar {filter} />
<div class="relative rounded-xl overflow-auto">
    <div class="shadow-sm overflow-hidden my-2 py-3 ">
        <table class="border-collapse table-auto w-full text-sm">
            <thead>
                <tr>
                    {#each columns as column, i}
                        <th class={thStyle}>{capitalize(column)}</th>
                    {/each}
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                {#each filteredOptions as elem}
                    <tr
                        id={elem.id}
                        on:contextmenu|preventDefault={openRowMenu}
                        class={trStyle}
                    >
                        {#each columns as column, j}
                            <td class={tdStyle}> {elem[column]}</td>
                        {/each}
                    </tr>
                {/each}
                {#if addRow}
                    <tr id="insertRow">
                        {#each columns as column}
                            {#if !excludeColumns.includes(column)}
                                <td class={tdStyle}>
                                    <input
                                        class="border rounded-sm h-8 px-2 w-full"
                                        placeholder={capitalize(column)}
                                    /></td
                                >
                            {:else}
                                <td class={tdStyle} />
                            {/if}
                        {/each}
                    </tr>
                {/if}
            </tbody>
        </table>
        {#if addRow}
            <div class="flex items-center justify-center mt-2">
                <img
                    class="w-10 h-10 hover:bg-slate-400 rounded-full"
                    alt="add one"
                    src="plus.png"
                    on:click={handleAddRow}
                />
            </div>
        {/if}
    </div>
</div>

{#if showMenu && elementOptions}
    <RowMenu {...pos}>
        {#each elementOptions as option}
            <div
                class="hover:bg-slate-200 hover:cursor-pointer"
                on:click={option.action(formattedSelectedElement)}
            >
                {option.label}
            </div>
        {/each}
    </RowMenu>
{/if}

<svelte:body on:click={onPageClick} />
