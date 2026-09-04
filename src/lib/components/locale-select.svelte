<script lang="ts">
    import { getLocale, setLocale, locales } from "$lib/paraglide/runtime.js";
    import { cn } from "$lib/utils";

    let { className = "" } = $props();

    let locale = $state(getLocale());

    $effect(() => {
        setLocale(locale);
    });
</script>

<div class={cn("rounded-full ring ring-input overflow-x-hidden text-muted-foreground", className)}>
{#each locales as opt}
	<button 
		disabled={locale==opt}
		class="h-8 w-10 disabled:bg-border disabled:text-foreground cursor-pointer"
		onclick={() => { setLocale(opt) }}
	>
		{ opt.toUpperCase() }
	</button>
{/each}
</div>

