<script lang="ts">

</script>


<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
</svelte:head>

<svelte:body class="cinzel-400" />
<slot />


<style>

:global(body) {
    font-family: "Cinzel", serif;
    background-color: #224;
    color: #bbb;
}

:global(.cinzel-400) {
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>