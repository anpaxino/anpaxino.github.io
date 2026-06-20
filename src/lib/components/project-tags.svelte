<script lang="ts">
    import { cn } from "$lib/utils";
    import tagColors from "$lib/data/tag-colors.json" with { type: "json" };

    interface TagColor {
        light: string;
        dark: string;
    }

    let { tags = [] as string[], className = "" } = $props();
</script>

<div class={cn("flex flex-wrap gap-1.5", className)}>
    {#each tags as tag}
        {@const color = (tagColors as Record<string, TagColor>)[tag]}
        {#if color}
            <span
                class="tag inline-block rounded px-1.5 py-0.5 text-[10px]/tight font-medium"
                style="--tag-bg: {color.light}19; --tag-color: {color.light}; --tag-bg-dark: {color.dark}19; --tag-color-dark: {color.dark}"
            >
                {tag}
            </span>
        {:else}
            <span
                class="bg-muted text-muted-foreground inline-block rounded px-1.5 py-0.5 text-[10px]/tight font-medium"
            >
                {tag}
            </span>
        {/if}
    {/each}
</div>

<style>
    .tag {
        background-color: var(--tag-bg);
        color: var(--tag-color);
    }
    :global(.dark) .tag {
        background-color: var(--tag-bg-dark);
        color: var(--tag-color-dark);
    }
</style>
