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
<BasicInfo></BasicInfo>
<ListView title={"Vocabulary"} itemList={$planData["key-vocabulary"].split(" ")}></ListView>
<ListView title={"Supporting Materials"} itemList={$planData["supporting-materials"]}></ListView>
<LearningOutcomes></LearningOutcomes>
<Differentiation></Differentiation>
<LearningExperiences></LearningExperiences>
<EducatorSection></EducatorSection>


<style>
    h1 {
        margin-bottom: 20px;
    }
</style>


