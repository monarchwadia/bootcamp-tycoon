<script lang="ts">
import type { TReport } from "../../../core/src/utils/stateReportBuilder";


export let report: TReport;

</script>

<div>
  <div>
    <h1>Stats</h1>

    <div>Name: {report.name}</div>
    <div title={`Max: ${report.resources.energy.max}`}>Energy: {report.resources.energy.curr}</div>
    <div title="Max: 100.00%">Coding Skill: {report.skills.coding}</div>
    <div>Time: {report.time}</div>
  </div>
</div>