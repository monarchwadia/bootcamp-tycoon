<script lang="ts">
import Button from "./atoms/Button.svelte";
import type  { BootcampTycoon } from "../../../core/src";


export let core: BootcampTycoon;
const actions = core.getAvailableActions();

let arr = [];

</script>

<div>
  Controls
  <div>
    <h1>Actions</h1>

    <Button onclick={() => {
      console.log(arr);
      arr = [...arr, Math.random()];
    }}>Add something</Button>

    {#each arr as a}
      <div>{a}</div>
    {/each}

    {#each actions as action }
      <Button onclick={() => core.act({id: action})}>
        {action}
      </Button>
    {/each}
  </div>
</div>