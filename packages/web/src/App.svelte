<script lang="ts">
  import Controls from "./components/Controls.svelte";
  import BootcampTycoon from "../../core/src/index";
  
  const core = new BootcampTycoon({
    name: "Monarch Wadia"
  });
</script>

<main>
  <div>
    <Controls core={core}/>
  </div>
</main>

<style>

</style>
