<script>
  import Form from "./components/Form.svelte";
  import LessonPlan from "./components/LessonPlan.svelte";
  import { loading, success, error } from "./store";
  import loader from "./assets/loader.gif";
  import errorPic from "./assets/error.jpg";
</script>

<div class="app-body">
  <aside />
  <main>
    {#if $success}
      <LessonPlan />
    {:else}
      <Form />
      {#if $loading}
        <section class="loader">
          <img src={loader} alt="Loader displayed while data is loading" width="50px" height="50px"/>
        </section>
      {:else if $error}
        <section class="loader">
          <img src={errorPic} alt="Error displayed on error" width="50px" height="50px"/>
        </section>
      {/if}
    {/if}
  </main>
  <aside />
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

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
