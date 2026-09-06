<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import ChevronUp from "@lucide/svelte/icons/chevron-up";
    import Hero from "./hero.svelte";
    import Projects from "./projects.svelte";
    import { m } from "$lib/paraglide/messages.js";
</script>

<svelte:head>
    <title>{m.full_name()} // Portfolio</title>
    <meta name="description" content={m.meta_description()} />
</svelte:head>

<Hero />

<Projects />

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
