<script>
  export let filter = () => {}
</script>

<div class="flex place-content-end items-center">
  <div class="flex justify-around w-60 h-7">
    <input
      id="search"
      class="rounded-md border-2 w-full h-full min-w-max"
      type="text"
      placeholder=" Buscar"
      on:input={(e) => {
        let searchInput = e.target.value
        filter(searchInput)
      }}
    />
  </div>
  <img src="mgf.png" alt="magnifying glass" class="absolute w-5 h-5 m-1" />
</div>
