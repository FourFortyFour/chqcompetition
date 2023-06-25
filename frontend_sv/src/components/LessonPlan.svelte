<script>
  import { onMount } from "svelte";
  import { planData } from "../store";
  import BasicInfo from "./BasicInfo.svelte";
  import ListView from "./ListView.svelte";
  import LearningOutcomes from "./LearningOutcomes.svelte";
  import EducatorSection from "./EducatorSection.svelte";
  import LearningExperiences from "./LearningExperiences.svelte";
  import Differentiation from "./Differentiation.svelte";
  import CarouselTest from "./CarouselTest.svelte";
</script>

<h1>{$planData["lesson-title"]}</h1>
<BasicInfo />

<h2>Vocabulary</h2>
<main>
  <ListView itemList={$planData["key-vocabulary"].split(",")} />
</main>

<h2>Additional Materials</h2>
<main>
  <ListView itemList={$planData["supporting-materials"]} />
</main>

<LearningOutcomes />
<Differentiation />
<LearningExperiences />
<EducatorSection />

<style>
  h2 {
    text-align: center;
  }
  h1 {
    margin-bottom: 20px;
  }

  main {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
  }
</style>
