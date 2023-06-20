<script>
  import { planData } from "../store";
  import ListView from "./ListView.svelte";
  import { Icon, Styles } from "sveltestrap";
  import RegenButton from "./RegenButton.svelte";

  let options = ["Dyslexia", "Photosensitive", "Limited Arm Movement"];

  let selectedOptions = [];
</script>

<section class="help">
  <h2>Help</h2>
  <ListView itemList={$planData["differentiation"]} />
  <hr />
  <div class="options-help-holder">
    <div class="options-help">
      {#each options as option}
        <label>
          <input
            type="checkbox"
            bind:group={selectedOptions}
            name="help-options"
            value={option}
          />
          {option}
        </label>
      {/each}
    </div>
    <div class="regen-holder">
      <RegenButton handleClick={() => {}}></RegenButton>
    </div>
  </div>
</section>

<style>
  h2 {
    text-align: center;
  }
  .help {
    display: flex;
    flex-direction: column;
  }

  .options-help-holder {
    display: flex;
    flex-direction: column;
  }

  .options-help {
    display: flex;
    justify-content: space-around;
  }

  .regen-holder {
    margin: 1% 0;
    text-align: center;
  }

  section {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }
</style>
