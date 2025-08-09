<script>
    let { children } = $props();
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
</script>

<main class="py-3 px-8">
    <Header />
    {@render children()}
    <Footer />
</main>
