<script>
  import { inputs } from "../data.json"
  import Table from "../Table/Table.svelte"
</script>

<Table options={inputs} />

<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #fafafa;
  }
</style>
