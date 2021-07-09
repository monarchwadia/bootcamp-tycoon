<script lang="ts">
import type BootcampTycoon from "../../../core/src";


export let core: BootcampTycoon;
const actions = core.getAvailableActions();
</script>

<div>
  Controls
  <div>
    <h1>Actions</h1>

    {#each actions as action }
      <button onclick={() => core.act({
        id: action
      })}>{action}</button>
    {/each}
  </div>
</div>