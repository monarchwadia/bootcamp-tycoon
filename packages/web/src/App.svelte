<script lang="ts">
  import Controls from "./components/Controls.svelte";
  import startBootcampTycoon from "../../core/src/index";
  
  const core = startBootcampTycoon({
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
