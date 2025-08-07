<script>
    let { children } = $props();
    import Header from "./header.svelte";
    import Footer from "./footer.svelte";
</script>

<Header />

{@render children()}
<Footer />
