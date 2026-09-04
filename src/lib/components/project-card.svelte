<script lang="ts">
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import ProjectTags from "./project-tags.svelte";
    import ProjectImages from "./project-images.svelte";
    import { cn } from "$lib/utils";
    import { m } from "$lib/paraglide/messages.js";
    import { ArrowUpRight, Code } from "@lucide/svelte";

    interface Project {
        types: string[];
        title: string;
        subtitle: string;
        link?: string;
        repo?: string;
        tags: string[];
        imgs: string[];
        desc: { vi: string[]; en: string[] };
    }

    let {
        project,
        lang,
        className = "",
    }: { project: Project; lang: string; className?: string } = $props();

    const desc = $derived(project.desc[lang as "vi" | "en"] ?? project.desc.en);
</script>

<Card class={cn("w-full", className)}>
    <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        {#if project.subtitle}
            <p class="text-muted-foreground">{project.subtitle}</p>
        {/if}
    </CardHeader>

    {#if project.imgs.length > 0}
        <ProjectImages images={project.imgs} />
    {:else}
        <div class="aspect-video w-full bg-muted"></div>
    {/if}

    <CardContent class="flex flex-col space-y-1 size-full">
        {#if desc.length > 0}
            <ul class="list-disc pl-2">
                {#each desc as item}
                    <li class="">
                        {item}
                    </li>
                {/each}
            </ul>
        {/if}

        <ProjectTags tags={project.tags} />

        <div class="flex flex-wrap gap-2 pt-1 mt-auto">
            {#if project.link}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="default" size="sm">
                        <ArrowUpRight class="size-3.5" />
                        {m.view_project()}
                    </Button>
                </a>
            {/if}
            {#if project.repo}
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline" size="sm">
                        <Code class="size-3.5" />
                        {m.view_repo()}
                    </Button>
                </a>
            {/if}
        </div>
    </CardContent>
</Card>
