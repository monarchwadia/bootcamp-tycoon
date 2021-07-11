<script lang="ts">
import type { TStateStats } from "../../../core/src/types/state";


export let stats: TStateStats;

</script>

<div>
  <div>
    <h1>Stats</h1>

    <div>Name: {stats.name}</div>
    <div title={`Max: ${stats.resources.energy.max}`}>Energy: {stats.resources.energy.curr}</div>
    <div title="Max: 100.00%">Coding Skill: {stats.skills.coding}</div>
    <div>Time: {stats.time}</div>
  </div>
</div>