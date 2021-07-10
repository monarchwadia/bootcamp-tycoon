<script lang="ts">
import Button from "./atoms/Button.svelte";
import type  { BootcampTycoon } from "../../../core/src";


export let core: BootcampTycoon;
const actions = core.getAvailableActions();

const handleAction = (actionId: string) => {
  core.act({ id: actionId });
}

</script>

<div>
  <div>
    <h1>Actions</h1>
    {#each actions as actionId }
      <Button on:click={() => handleAction(actionId)}>
        {actionId}
      </Button>
    {/each}
  </div>
</div>