<script lang="ts">
  import Actions from "./components/Actions.svelte";
  import Player from "./components/Player.svelte";
  import startBootcampTycoon from "../../core/src/index";
  import type { TStateStats } from "../../core/src/types/state";
  import type { TReport } from "../../core/src/utils/stateReportBuilder";
  
  const core = startBootcampTycoon({
    fullName: "Monarch Wadia"
  });
  
  let report: TReport = core.getReport();
  core.onUpdate(() => {
    const newStats = core.getReport();
    report = newStats;
  })
</script>

<main>
  <div>
    <Actions core={core}/>
    <Player report={report} />
  </div>
</main>

<style>

</style>
