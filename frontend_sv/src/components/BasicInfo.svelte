<script>
  import { planData, loading, success, error } from "../store";
  import { Styles, Icon } from "sveltestrap";
  import RegenButton from "./RegenButton.svelte";
  import axios from "axios";
  let gradeString = $planData["grade"].split(" ")[1];
  $: grade = parseInt(gradeString);

  async function regenLessonPlan() {

    let query = $planData["lesson-title"];
    const gradeQ = "Grade " + grade
    success.set(false);
    loading.set(true);
    try {
            //Make the request to the API
            const response = await axios.post("http://localhost:5000/querygpt", 
            {
              query : query,
              grade : gradeQ
            })
            if (response) {
                planData.set(response.data.response);
            }
            success.set(true);
            console.log("Request successful")
            loading.set(false);
        } catch (e) {
            console.log(`Error: ${e.message}`);
            error.set(true);
            loading.set(false);
        }
  }
</script>

<Styles />
<main class="info-holder">
  <div class="info-component">{$planData["lesson-title"]}</div>
  <div class="info-component">{$planData["subject"]}</div>
  <input type="text" value={$planData["teacher-name"]} class="info-component">
  <div class="info-component">{$planData["date"]}</div>
  <div class="info-component grade-selector-major">
    <div class="grade-selector">
      <p>Grade 1</p>
      <input type="range" bind:value={grade} min={1} max={12} />
      <p>Grade 12</p>
    </div>
    <div class="grade-view">
        <p>Selected Grade : {grade}</p>
        <RegenButton handleClick={regenLessonPlan}></RegenButton>
    </div>
  </div>
  <div class="info-component">{$planData["duration"]}</div>
</main>

<style>
  .info-holder {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  .info-component {
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  }

  .grade-selector {
    display: flex;
    align-items: center;
  }

  .grade-selector-major {
    display: flex;
    flex-direction: column;
  }

  .grade-selector > * {
    margin: 0;
    width: 100%;
  }

  .grade-view > * {
    /* width: 100%; */
    margin: 0 1px;
  }

</style>
