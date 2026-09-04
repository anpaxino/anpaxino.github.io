<script lang="ts">
    import { cn } from "$lib/utils";
    import LocaleSelect from "$lib/components/locale-select.svelte";
    import ToggleTheme from "$lib/components/toggles/toggle-theme.svelte";

    let { className = "" } = $props();
</script>

<header
    class={cn(
        "flex items-center md:px-12 px-2 border-border/50 bg-background/70 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm gap-5",
        className,
    )}
>
    <nav class="mr-auto flex h-12">
        <!-- <a href="/" class="text-sm font-medium tracking-tight">
            {m.full_name()}
        </a> -->
    </nav>

    <ToggleTheme className="bg-transparent" />

    <LocaleSelect />
</header>
