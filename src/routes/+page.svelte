<script lang="ts">
    import Hero from "$lib/components/hero.svelte";
    import ProjectCard from "$lib/components/project-card.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Slider from "$lib/components/ui/slider/slider.svelte";
    import projects from "$lib/data/projects.v2.json" with { type: "json" };
    import { m } from "$lib/paraglide/messages.js";
    import { getLocale } from "$lib/paraglide/runtime.js";
    import ChevronUp from "@lucide/svelte/icons/chevron-up";
    import { browser } from "$app/environment";

    function getBreakPointProjectsNum(): number {
        if (!browser) return null;
        if (window.matchMedia("(min-width: 1024px)").matches) return 3;
        if (window.matchMedia("(min-width: 768px)").matches) return 2;
        return 1;
    }

    let projectsNum = $state(getBreakPointProjectsNum());
</script>

<svelte:head>
    <title>{m.full_name()} // Portfolio</title>
    <meta name="description" content={m.meta_description()} />
</svelte:head>

<Hero />

<!-- Projects -->
<section class="space-y-6 py-8" id="projects">
    <header class="flex items-center gap-x-5">
        <h2 class="font-heading text-xl font-semibold tracking-tight">
            {m.projects_title()}
        </h2>
        <div class="grow"></div>
	{#if projectsNum}
		<Slider
			class="max-w-40"
			type="single"
			bind:value={projectsNum}
			max={6}
			min={1}
		/>
	{/if}
        <div class="bg-muted px-2">{projectsNum}</div>
    </header>

    <div
        class="grid gap-6"
        style="grid-template-columns: repeat({projectsNum}, minmax(0, 1fr));"
    >
    	{#if browser}
	{#each projects as project}
		<ProjectCard {project} lang={getLocale()} />
	{/each}
    	{/if}
    </div>
</section>

<hr />

<div class="flex justify-center p-3">
    <Button
        variant="ghost"
        size="lg"
        class="text-lg"
        onclick={() => {
            document.body.scrollIntoView();
        }}
        ><ChevronUp />{m.back_to_top()}
    </Button>
</div>
