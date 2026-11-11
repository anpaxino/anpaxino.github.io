<script lang="ts">
	import { Dialog as DialogPrimitive } from "$lib/bits";

	let { open = $bindable(false), ...restProps }: DialogPrimitive.RootProps = $props();
</script>

<DialogPrimitive.Root bind:open {...restProps} />
