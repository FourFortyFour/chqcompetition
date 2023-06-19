<script>
    import axios from 'axios'
    import { planData, loading, success } from '../store';

    let query = "lesson topic";

    async function handleClick() {
        loading.set(true);

        if (query === '' || query === "lesson topic") {
            alert("Please enter a topic")
            return
        }

        console.log(`The query is: ${query}`);

        try {
            //Make the request to the API
            const response = await axios.post("http://localhost:5000/querygpt", {query : query})
            success.set(true);
            if (response) {
                planData.set(response.data.response);
            }
            console.log("Request successful")
            loading.set(false);
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
        

    }
</script>

<main>
  <h1>Lesson Planner</h1>
  <p>Create customized lessons easily with our AI powered generator!</p>
  <input
    bind:value={query}
    on:click={() => {
      query = "";
    }}
    type="text"
  />
  <button on:click={handleClick}>Generate Plan</button>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap");

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Oxygen", sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-bottom: 1%;
  }

  p {
    margin-bottom: 1%;
  }

  input {
    margin: 1% 0;
  }

  button {
    padding: 12px;
    color: #fff;
    background-color: black;
    width: 150px;
    border: none;
    border-radius: 10px;
  }

  button:hover {
    color: #eee;
    background-color: #333;
  }
</style>
