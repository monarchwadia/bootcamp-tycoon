<script lang="ts">
import type BootcampTycoon from "../../../core/src";


export let core: BootcampTycoon;
const actions = core.getAvailableActions();

let arr = [];

</script>

<div>
  Controls
  <div>
    <h1>Actions</h1>

    <button on:click={() => {
      console.log(arr);
      arr = [...arr, Math.random()];
    }}>Add something</button>

    {#each arr as a}
      <div>{a}</div>
    {/each}

    {#each actions as action }
      <button on:click={() => core.act({id: action})}>
        {action}
      </button>
    {/each}
  </div>
</div>