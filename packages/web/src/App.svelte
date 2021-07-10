<script lang="ts">
  import Actions from "./components/Actions.svelte";
  import Player from "./components/Player.svelte";
  import startBootcampTycoon from "../../core/src/index";
  import type { TStateStats } from "../../core/src/types/state";
  
  const core = startBootcampTycoon({
    fullName: "Monarch Wadia"
  });
  
  let stats: TStateStats = core.getStats();
  core.onUpdate(() => {
    const newStats = core.getStats();
    console.log(stats === newStats, newStats.skills.coding)
    stats = newStats;
  })
</script>

<main>
  <div>
    <Actions core={core}/>
    <Player stats={stats} />
  </div>
</main>

<style>

</style>
