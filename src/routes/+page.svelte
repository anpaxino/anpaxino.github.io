<script lang="ts">
    import Hero from "$lib/components/hero.svelte";
    import ProjectCard from "$lib/components/project-card.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Slider from "$lib/components/ui/slider/slider.svelte";
    import projects from "$lib/data/projects.v2.json" with { type: "json" };
    import { m } from "$lib/paraglide/messages.js";
    import { getLocale } from "$lib/paraglide/runtime.js";
    import { ChevronUp } from "@lucide/svelte";
    import { browser } from "$app/environment";

    function getInitialProjectsNum(): number {
        if (!browser) return 3;
        if (window.matchMedia("(min-width: 1024px)").matches) return 3;
        if (window.matchMedia("(min-width: 768px)").matches) return 2;
        return 1;
    }

    let projectsNum = $state(getInitialProjectsNum());
</script>

<svelte:head>
    <title>{m.full_name()} // Portfolio</title>
</svelte:head>

<Hero />

<!-- Projects -->
<section class="space-y-6 py-8" id="projects">
    <header class="flex items-center gap-x-5">
        <h2 class="font-heading text-xl font-semibold tracking-tight">
            {m.projects_title()}
        </h2>
        <div class="grow"></div>
        <Slider
            class="max-w-40"
            type="single"
            bind:value={projectsNum}
            max={6}
            min={1}
        />
        <div class="bg-muted px-2">{projectsNum}</div>
    </header>

    <div
        class="grid gap-6"
        style="grid-template-columns: repeat({projectsNum}, minmax(0, 1fr));"
    >
        {#each projects as project}
            <ProjectCard {project} lang={getLocale()} />
        {/each}
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
