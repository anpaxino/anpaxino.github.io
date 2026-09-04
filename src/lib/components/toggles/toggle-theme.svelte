<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { theme, type ThemeMode } from "$lib/stores/theme";
    import { cn } from "$lib/utils";
    import { Moon, Sun, Eclipse } from "@lucide/svelte";
    import type { Component } from "svelte";

    const ICON_MAP: Record<ThemeMode, Component> = {
        light: Sun,
        dark: Moon,
        auto: Eclipse,
    };
    const MODE_SEQUENCE: ThemeMode[] = ["auto", "dark", "light"];

    const Icon = $derived(ICON_MAP[$theme]);

    const btnHandler = () => {
        const currIdx = MODE_SEQUENCE.indexOf($theme);
        const nextIdx = (currIdx + 1) % MODE_SEQUENCE.length;
        theme.set(MODE_SEQUENCE[nextIdx]);
    };

    let { className = "" } = $props();
</script>

<Button
    variant="outline"
    onclick={btnHandler}
    class={cn("rounded-full h-7", className)}
>
    <Icon />
</Button>
