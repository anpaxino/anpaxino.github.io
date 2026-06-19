<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';

	// ------ ICONS ---------------------------------
	import favicon from "$lib/assets/favicon.svg";
	import favicon96 from "$lib/assets/favicon-96x96.png";
	import appleTouchIcon from "$lib/assets/apple-touch-icon.png";
	import faviconIco from "$lib/assets/favicon.ico";
	import siteWebManifest from "$lib/assets/site.webmanifest";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="shortcut icon" href={faviconIco} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="manifest" href={siteWebManifest} />
</svelte:head>

{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a
			href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
		>{locale}</a>
	{/each}
</div>
