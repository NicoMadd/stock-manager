<script>
  import { outputs } from "../data.json"
  import Table from "../Table/Table.svelte"
</script>

<Table options={outputs} />

<style>
  .output {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #fafafa;
  }
</style>
