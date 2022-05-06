<script>
  export let options = []
  import { capitalize } from "./Utils/Utils.js"
</script>

<div>
  <ul class="flex justify-around">
    {#each options as { option, onClick }, i}
      <li class="px-2 mx-2" on:click={onClick}>
        <span
          class="inline-block border border-blue-200 rounded py-1 px-3 bg-blue-400 text-gray-100 hover:bg-blue-500 w-40 text-center"
          >{capitalize(option)}</span
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #fafafa;
  }

  .option {
    padding: 0.5rem 2rem;
    border-radius: 13%;
    border: 1px solid #ccc;
  }

  .option:hover {
    background-color: #ccc;
  }
</style>
