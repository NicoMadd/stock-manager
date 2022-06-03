<script>
  export let values
  export let handleOnClick
</script>

{#each values as value}
  <h1>{value}</h1>
{/each}
<button on:click={handleOnClick}>Increment</button>
