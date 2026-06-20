<script lang="ts">
    import {
        NativeSelect,
        NativeSelectOption,
    } from "$lib/components/ui/native-select";
    import { getLocale, setLocale } from "$lib/paraglide/runtime.js";
    import { cn } from "$lib/utils";

    let { className = "" } = $props();

    let locale = $state(getLocale());

    $effect(() => {
        setLocale(locale);
    });
</script>

<NativeSelect bind:value={locale} class={cn("", className)} aria-label="alo">
    <NativeSelectOption value="vi">Tiếng Việt</NativeSelectOption>
    <NativeSelectOption value="en">English</NativeSelectOption>
</NativeSelect>
