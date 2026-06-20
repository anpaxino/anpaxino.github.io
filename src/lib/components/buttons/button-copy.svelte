<script lang="ts">
    import { Clipboard, ClipboardCheck } from "@lucide/svelte";
    import { Button, type ButtonProps } from "$lib/components/ui/button";
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
        value: string;
        copiedTimeout?: number;
        props?: ButtonProps;
    }

    let { children, value, copiedTimeout = 3000, props }: Props = $props();

    let timeoutID = $state<ReturnType<typeof setTimeout> | null>(null);

    const clickHandler = () => {
        navigator.clipboard.writeText(value);

        if (timeoutID) clearTimeout(timeoutID);

        timeoutID = setTimeout(() => {
            timeoutID = null;
        }, copiedTimeout);
    };
</script>

<Button variant="outline" size="sm" onclick={clickHandler} {...props}>
    {#if timeoutID}
        <ClipboardCheck class="size-3.5 text-green-500" />
    {:else}
        <Clipboard class="size-3.5" />
    {/if}
    {#if children}
        {@render children()}
    {/if}
</Button>
