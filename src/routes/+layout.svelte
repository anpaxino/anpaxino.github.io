<script lang="ts">
    import { theme } from "$lib/stores/theme";
    import { onMount } from "svelte";
    import "./layout.css";
    // ------ ICONS ---------------------------------
    import appleTouchIcon from "$lib/assets/apple-touch-icon.png";
    import favicon96 from "$lib/assets/favicon-96x96.png";
    import faviconIco from "$lib/assets/favicon.ico";
    import favicon from "$lib/assets/favicon.svg";
    import siteWebManifest from "$lib/assets/site.webmanifest";

    import Topnav from "$lib/components/topnav.svelte";

    let { children } = $props();

    onMount(() => {
        theme.init();
    });
</script>

<svelte:head>
    <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href={favicon} />
    <link rel="shortcut icon" href={faviconIco} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="manifest" href={siteWebManifest} />
</svelte:head>

<Topnav />

<main class="md:px-12 px-2 pt-20 pb-12">
    {@render children()}
</main>
