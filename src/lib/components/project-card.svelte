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
    import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
    import Code from "@lucide/svelte/icons/code";

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

<Card class={cn("w-full py-0 gap-1", className)}>
    <CardHeader class="py-2">
        <CardTitle class="font-semibold">{project.title}</CardTitle>
        {#if project.subtitle}
            <p class="text-muted-foreground">{project.subtitle}</p>
        {/if}
    </CardHeader>

    {#if project.imgs.length > 0}
        <ProjectImages images={project.imgs} />
    {:else}
        <div class="aspect-video w-full bg-muted"></div>
    {/if}

    <CardContent class="flex p-2 flex-col size-full gap-2">
    	{desc}

        <ProjectTags tags={project.tags} />

        <div class="flex flex-wrap gap-2 mt-auto">
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
