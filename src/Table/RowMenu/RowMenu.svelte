<script>
  import { fade } from "svelte/transition"

  export let x = 0
  export let y = 0
  console.log($$slots)
</script>

<div
  on:contextmenu|preventDefault={() => {}}
  class="row-menu"
  style={`top:${y}px;left:${x}px`}
  transition:fade={{ duration: 100 }}
>
  <slot />
</div>

<style>
  .row-menu {
    position: absolute;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 9999;
  }
</style>
