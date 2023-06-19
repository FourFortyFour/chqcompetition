<script>
    import Form from "./components/Form.svelte";
    import LessonPlan from "./components/LessonPlan.svelte";
    import { loading, success, planData } from "./store";

</script>

<div class="app-body">
    <aside></aside>
    <main>
        {#if $success}
            <h1>{$planData["lesson-title"]}</h1>
            <LessonPlan></LessonPlan>
        {:else}
            <Form></Form>
        {/if}
    </main>
    <aside></aside>
</div>

<style>

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: "Oxygen", sans-serif;
    }

    .app-body {
        display: flex;
    }

    aside {
        flex: 1;
    }

    main {
        flex: 3;
    }
</style>





