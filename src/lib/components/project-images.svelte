<script lang="ts">
    import {
        Carousel,
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious,
    } from "$lib/components/ui/carousel";
    import { Dialog, DialogContent } from "$lib/components/ui/dialog";
    import { getProjectImgUrl } from "$lib/images";
    import { type CarouselAPI } from "$lib/components/ui/carousel/context";

    let {
        images = [] as string[],
        visibleCount = 3,
        className = "",
    } = $props();

    let open = $state(false);
    let startIndex = $state(0);

    const visible = $derived(images.slice(0, visibleCount));
    const remaining = $derived(images.length - visibleCount);

    const openAt = (i: number) => {
        startIndex = i;
        open = true;
    };

    let current = $state(0);
    let api = $state<CarouselAPI>();
    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap() + 1;
            api.on("select", () => {
                current = api!.selectedScrollSnap() + 1;
            });
        }
    });
</script>

<div class={className}>
    {#if images.length === 1}
        <button
            onclick={() => openAt(0)}
            class="aspect-[16/10] w-full overflow-hidden bg-muted ring-1 ring-border cursor-pointer"
        >
            <img
                src={getProjectImgUrl(images[0])}
                alt=""
                loading="lazy"
                class="h-full w-full object-cover hover:scale-105 transition-transform"
            />
        </button>
    {:else if images.length === 2}
        <div
            class="aspect-[16/10] grid grid-cols-2 gap-1 overflow-hidden ring-1 ring-border"
        >
            {#each visible as img, i}
                <button
                    onclick={() => openAt(i)}
                    class="overflow-hidden bg-muted cursor-pointer"
                >
                    <img
                        src={getProjectImgUrl(img)}
                        alt=""
                        loading="lazy"
                        class="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                </button>
            {/each}
        </div>
    {:else}
        <div
            class="aspect-[16/10] grid grid-cols-2 gap-1 overflow-hidden ring-1 ring-border"
        >
            <button
                onclick={() => openAt(0)}
                class="col-span-2 overflow-hidden bg-muted cursor-pointer ring ring-border"
            >
                <img
                    src={getProjectImgUrl(visible[0])}
                    alt=""
                    loading="lazy"
                    class="h-full w-full object-cover hover:scale-105 transition-transform"
                />
            </button>
            {#each visible.slice(1) as img, i}
                <button
                    onclick={() => openAt(i + 1)}
                    class="overflow-hidden bg-muted cursor-pointer relative ring ring-border"
                >
                    <img
                        src={getProjectImgUrl(img)}
                        alt=""
                        loading="lazy"
                        class="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                    {#if i === visible.slice(1).length - 1 && remaining > 0}
                        <div
                            class="absolute right-1 bottom-1 rounded-full bg-black/50 text-white size-6 flex items-center justify-center"
                        >
                            +{remaining}
                        </div>
                    {/if}
                </button>
            {/each}
        </div>
    {/if}
</div>

<Dialog bind:open>
    <DialogContent
        class="max-w-4xl sm:max-w-[90vw] p-0 bg-background"
        showCloseButton={false}
    >
        <Carousel
            setApi={(emblaApi) => (api = emblaApi)}
            opts={{ startIndex, loop: true }}
        >
            <CarouselPrevious
                aria-haspopup="false"
                class="top-1/2 -translate-y-1/2 py-20 -start-8 active:none"
            />
            <CarouselNext
                aria-haspopup="false"
                class="top-1/2 -translate-y-1/2 py-20 -end-8"
            />
            <CarouselContent>
                {#each images as img, idx}
                    <CarouselItem>
                        <img
                            src={getProjectImgUrl(img)}
                            alt=""
                            loading="lazy"
                            class="max-h-[80vh] w-full object-contain ring-1 ring-border"
                        />
                    </CarouselItem>
                {/each}
            </CarouselContent>
        </Carousel>
        <div
            class="absolute bottom-2 right-3 rounded-full bg-black/50 text-white px-2"
        >
            {current}/{images.length}
        </div>
    </DialogContent>
</Dialog>
