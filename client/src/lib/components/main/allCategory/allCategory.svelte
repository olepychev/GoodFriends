<script>
    import { onMount } from 'svelte';
	import { Navigation, Pagination } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

    // Category Slider
	let categorySlider;
    const categorySliderArr = [
        {
            title: "Casino",
            image: "/imgs/casino.svg",
            link: "/"
        },
        {
            title: "Slot",
            image: "/imgs/slot.svg",
            link: "/"
        },
        {
            title: "sports",
            image: "/imgs/sports.svg",
            link: "/"
        },
        {
            title: "V-Game",
            image: "/imgs/v-games.svg",
            link: "/"
        },
        {
            title: "Mini Games",
            image: "/imgs/mini-games.svg",
            link: "/"
        },
        {
            title: "Live Sports",
            image: "/imgs/live-sports.svg",
            link: "/"
        },
    ];
	onMount(() => {
        categorySlider = document.getElementById('categorySlider').swiper
    });
	function categorySliderPrev() {
		categorySlider.slidePrev();
	}
	function categorySliderNext() {
		// swiper.slidePrev();
        categorySlider.slideNext()
	}
</script>

<div class="w-full flex flex-col items-start gap-[15px] mt-[37px]">
	<div class="w-full flex items-center justify-between">
		<h6 class="font-semibold text-xl gradient-text-white2 main">All Categories</h6>
		<div class="flex items-center gap-[11px]">
			<button
				class="bg-grayLight dark:bg-blueDark border border-grayLight4 dark:border-white11 opacity-80 hover:opacity-100 rounded-[11px] w-[36px] h-[36px] flex items-center justify-center"
				id="slidePrev"
				on:click={categorySliderPrev}
			>
				<svg class="w-[24px] h-[24px]">
					<use class="dark:fill-white fill-black" href="/imgs/icons/icons.svg#chevron-left"/>
				</svg>
			</button>
			<button
				class="bg-grayLight dark:bg-blueDark border border-grayLight4 dark:border-white11 opacity-80 hover:opacity-100 rounded-[11px] w-[36px] h-[36px] flex items-center justify-center"
				id="slidePrev"
				on:click={categorySliderNext}
			>
				<svg class="w-[24px] h-[24px] rotate-[180deg]">
					<use class="dark:fill-white fill-black" href="/imgs/icons/icons.svg#chevron-left"/>
				</svg>
			</button>
		</div>
	</div>
	<Swiper
		id="categorySlider"
		class="w-full"
		spaceBetween={15}
		slidesPerView={2}
		modules={[Pagination]}
		breakpoints={{
			0: {
				slidesPerView: 2
			},
			535: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 4
			},
			1440: {
				slidesPerView: 6
			}
		}}
	>
		{#each categorySliderArr as categoryItem}
			<SwiperSlide>
				<a
					href={categoryItem.link}
					class="group flex relative w-full bg-black rounded-[20px] border border-grayLight2 dark:border-white11 overflow-hidden"
				>
					<img
						class="group-hover:scale-[1.2] max-h-[250px] w-full object-cover transition05"
						src={categoryItem.image}
						alt="slot"
					/>
					<p
						class="absolute top-0 top-[18px] left-[18px] text-xl gradient-text-white2 font-semibold"
					>
						{categoryItem.title}
					</p>
				</a>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
