<script lang="ts">
	import { Dialog as DialogPrimitive } from "$lib/bits";

	let { ...restProps }: DialogPrimitive.PortalProps = $props();
</script>

<DialogPrimitive.Portal {...restProps} />
