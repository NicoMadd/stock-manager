<script>
  import StockView from "./Views/StockView.svelte"
  import InputsView from "./Views/InputsView.svelte"
  import OutputsView from "./Views/OutputsView.svelte"
  import Test from "./Test.svelte"

  import NavMenu from "./NavMenu.svelte"

  let views = [
    { description: "stock", option: StockView },
    { description: "inputs", option: InputsView },
    { description: "outputs", option: OutputsView },
    // { description: "test", option: Test },
  ]

  let selectedView = StockView
</script>

<NavMenu
  options={views.map((view) => ({
    option: view.description,
    onClick: () => {
      selectedView = view.option
    },
  }))}
/>
<br />
<svelte:component this={selectedView} />

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
