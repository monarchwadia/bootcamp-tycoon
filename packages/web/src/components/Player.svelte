<script lang="ts">
import type BootcampTycoon from "../../../core/src";


export let core: BootcampTycoon;

const {name, resources, skills, time } = core.getStats();

</script>

<div>
  Controls
  <div>
    <h1>Stats</h1>

    <div>Name: {name}</div>
    <div>Energy: {resources.energy}</div>
    <div>Coding Skill: {skills.coding}</div>
    <div>Time: {time}</div>
  </div>
</div>