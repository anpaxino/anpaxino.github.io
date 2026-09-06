<script lang="ts">
    import ProjectCard from "$lib/components/project-card.svelte";
    import Slider from "$lib/components/ui/slider/slider.svelte";
    import projects from "$lib/data/projects.v2.json" with { type: "json" };
    import { m } from "$lib/paraglide/messages.js";
    import { getLocale } from "$lib/paraglide/runtime.js";
    import { browser } from "$app/environment";

    function getBreakPointProjectsNum(): number {
        if (!browser) return null;
        if (window.matchMedia("(min-width: 1024px)").matches) return 3;
        if (window.matchMedia("(min-width: 768px)").matches) return 2;
        return 1;
    }

    let projectsNum = $state(getBreakPointProjectsNum());
</script>


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
        class="grid gap-4 lg:grid-cols-3 md:grid-cols-2"
        style="grid-template-columns: repeat({projectsNum}, minmax(0, 1fr));"
    >
	{#each projects as project}
		<ProjectCard {project} lang={getLocale()} />
	{/each}
    </div>
</section>
