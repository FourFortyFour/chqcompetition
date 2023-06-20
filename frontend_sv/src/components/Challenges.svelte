<script>
  import { planData } from "../store";
  import Help from "./Help.svelte";
  import ListView from "./ListView.svelte";
  import { Icon, Styles } from "sveltestrap";
  import RegenButton from "./RegenButton.svelte";

  let hard = false;
</script>

<section>
  <h2>Challenges</h2>
  <ListView itemList={$planData["additional"]} />
  <hr />
  <div class="challenge-help">
    <label>
      <input
        type="radio"
        name="challenge"
        id=""
        bind:group={hard}
        value={false}
      />
      Easier
    </label>
    <RegenButton handleClick={() => {}}></RegenButton>
    <label>
      <input
        type="radio"
        name="challenge"
        id=""
        bind:group={hard}
        value={true}
      />
      Harder
    </label>
  </div>
</section>

<style>
  h2 {
    text-align: center;
  }

  .challenge-help {
    padding: 0 3%;
    display: flex;
    justify-content: space-around;
  }

  section {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }
</style>
