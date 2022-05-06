<script>
  import { capitalize } from "../Utils/Utils.js"
  import SearchBar from "./SearchBar.svelte"

  export let addRow = undefined
  export let options = [] // [{column, value}]

  let columns = [
    ...new Set(
      options.map((option) => Object.keys(option)).flatMap((keys) => keys)
    ),
  ]

  options.map((option) => {
    columns.forEach((column) => {
      if (!option[column]) {
        option[column] = ""
      }
    })
    return option
  })

  let filteredOptions = options

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

  let handleAddRow = () => {
    let inputs = [].slice.call(
      document.getElementById("insertRow").getElementsByTagName("input")
    )

    let values = inputs.reduce((values, input, index) => {
      values[columns[index]] = input.value
      return values
    }, {})
    addRow(values)
    inputs.forEach((input) => (input.value = ""))
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
          <tr class={trStyle}>
            {#each columns as column, j}
              <td class={tdStyle}> {elem[column]}</td>
            {/each}
          </tr>
        {/each}
        {#if addRow}
          <tr id="insertRow">
            {#each columns as column}
              <td class={tdStyle}>
                <input
                  class="border rounded-sm"
                  placeholder={capitalize(column)}
                /></td
              >
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
