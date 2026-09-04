<script lang="ts">
    import { m } from "$lib/paraglide/messages.js";
    import ButtonCopy from "$lib/components/buttons/button-copy.svelte";
    import connect from "$lib/data/connect.json" with { type: "json" };
    import { CircleArrowOutUpRight, MoveUpRight } from "@lucide/svelte";
</script>

<section class="space-y-10">
    <header>
        <h1
            class="font-heading text-5xl text-center font-semibold tracking-tight"
        >
            {m.full_name()}
        </h1>
        <p class="text-xl font-thin text-muted-foreground text-center mt-5">
            {m.subtitle()}
        </p>
    </header>
    <article class="grid gap-5 md:grid-cols-2">
        <p class="">
            {m.intro()}
        </p>
        <nav
            class="grid grid-cols-[repeat(3,max-content)] gap-1 md:justify-end"
        >
            {#each connect as item, i}
                <div>{item.title}:</div>
                <a
                    class="underline text-amber-400/70 dark:text-amber-200 font-bold"
                    target="_blank"
                    href={item.href}
                >
                    {item.label}
                    <MoveUpRight class="inline size-3" /></a
                >
                <ButtonCopy value={item.label}></ButtonCopy>
            {/each}
        </nav>
    </article>
</section>
