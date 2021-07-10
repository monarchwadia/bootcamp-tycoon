<script lang="ts">
import type { TStateStats } from "../../../core/src/types/state";


export let stats: TStateStats;

</script>

<div>
  <div>
    <h1>Stats</h1>

    <div>Name: {stats.name}</div>
    <div>Energy: {stats.resources.energy}</div>
    <div>Coding Skill: {stats.skills.coding}</div>
    <div>Time: {stats.time}</div>
  </div>
</div>