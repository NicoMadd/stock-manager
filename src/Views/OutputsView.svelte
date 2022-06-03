<script>
  import { outputs, fetchOutputs, addOutput } from "../Data/outputsData.js"

  import Table from "../Table/Table.svelte"

  let addNewOutput = (output) => {
    console.log($outputs)
    //todo validar producto
    addOutput(output)
  }
</script>

{#await fetchOutputs()}
  <div>Fetching Outputs</div>
{:then results}
  <Table options={$outputs} addRow={addNewOutput} />
{/await}

<style>
</style>
