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
    const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

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
    {@html `<script>${THEME_INIT_SCRIPT}</script>`}
</svelte:head>

<Topnav />

<main class="md:px-36 pt-20 pb-16">
    {@render children()}
</main>
