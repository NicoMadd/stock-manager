<script>
  import Elem from "./Elem.svelte"

  export let value = []
  export let increment = () => {
    value = [...value, value.length]
  }
</script>

<Elem values={value} handleOnClick={increment} />
