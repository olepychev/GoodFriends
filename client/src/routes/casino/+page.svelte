<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import { getFilterMenu, getCasinoList } from '../../apis/casino';
	import Skeleton from '$lib/components/loader/skeleton.svelte';

	const filterData = [
		{
			title: 'VendorList',
			data: []
		},
		{
			title: 'Type',
			data: []
		}
	];

	const casinoTabs = [
		{
			title: 'All'
		},
		{
			title: 'Best Casino',
			image: '/imgs/live-sports/ball.svg'
		},
		{
			title: 'Slot',
			image: '/imgs/live-sports/headphone.svg'
		},
		{
			title: 'Blackjack',
			image: '/imgs/live-sports/tennis-ball.svg'
		},
		{
			title: 'Baccarat',
			image: '/imgs/live-sports/basket-ball.svg'
		},
		{
			title: 'Roulette',
			image: '/imgs/live-sports/rugby-ball.svg'
		}
	];
	export let data;
	let currentTab = 'All';
	let totalNumber = 0,
		casinoSlotsArr = [],
		currentLimit = 0;
	let filter = false;
	let type = data.type ? [data.type] : '';
	let vendorSelectedList = [],
		typeSelectedList = [];
	let searchKey = '',
		page = 0;

	let slotsLoaded = false;
	let loadedMore = true;

	onMount(async () => {
		const container = document.querySelectorAll('.dragable');
		container.forEach((cont) => {
			let startY;
			let startX;
			let scrollLeft;
			let scrollTop;
			let isDown;

			cont.addEventListener('mousedown', (e) => {
				isDown = true;
				startY = e.pageY - cont.offsetTop;
				startX = e.pageX - cont.offsetLeft;
				scrollLeft = cont.scrollLeft;
				scrollTop = cont.scrollTop;
			});
			cont.addEventListener('mouseup', (e) => {
				isDown = false;
			});
			cont.addEventListener('mouseleave', (e) => {
				isDown = false;
			});
			cont.addEventListener('mousemove', (e) => {
				if (isDown) {
					e.preventDefault();

					//Move Horizontally
					const x = e.pageX - cont.offsetLeft;
					const walkX = x - startX;
					cont.scrollLeft = scrollLeft - walkX;
				}
			});
		});

		const res = await getFilterMenu();
		await load();

		if (res.success) {
			filterData[0].data = res.data.vendor;
			filterData[1].data = res.data.type;
		}
	});

	function handleFilter() {
		filter = !filter;
	}

	function handleCasinoFilter(title) {
		currentTab = title.toLowerCase();
	}
	const load = async () => {
		const res = await getCasinoList({
			title: '',
			vendor: [],
			type: type,
			page: 0
		});
		totalNumber = res.data.totalNumber;
		casinoSlotsArr = res.data.list;
		currentLimit = casinoSlotsArr.length;
		slotsLoaded = true;
	};

	const search = async () => {
		page = 0;
		currentLimit = 0;
		const res = await getCasinoList({
			title: searchKey,
			vendor: vendorSelectedList,
			type: typeSelectedList,
			page: page
		});
		totalNumber = res.data.totalNumber;
		casinoSlotsArr = res.data.list;
		currentLimit = casinoSlotsArr.length;
	};

	const moreLoad = async () => {
		page++;
		loadedMore = false;
		const res = await getCasinoList({
			title: searchKey,
			vendor: vendorSelectedList,
			type: type,
			page: page
		});
		currentLimit += res.data.list.length;
		casinoSlotsArr = [...casinoSlotsArr, ...res.data.list];
		loadedMore = true;
	};

	const selectVendor = (e, item) => {
		vendorSelectedList = e.target.checked
			? [...vendorSelectedList, item.name]
			: vendorSelectedList.filter((it) => it !== item.name);
		search();
	};
	function removeFromvendorSelectedList(vendor) {
	 	vendorSelectedList = vendorSelectedList.filter(item => {
			if(item !== vendor) {
				return true
			} 
		})
		search();
	}
	const selectType = (e, item) => {
		typeSelectedList = e.target.checked
			? [...typeSelectedList, item.name]
			: typeSelectedList.filter((it) => it !== item.name);
		search();
	};
	function removeFromTypeSelectedList(type) {
		typeSelectedList = typeSelectedList.filter(item => {
			if(item !== type) {
				return true
			} 
		})
		search();
	}
</script>

<main class="w-full py-[27px] pl-[15px] pr-[15px] md:pl-[30px] md:pr-[30px]" id="main">
	<div class="container-main">
		<div class="grid grid-cols-[auto,50px] gap-[4px] rounded-[7px] overflow-hidden">
			<div
				class="w-full grid grid-cols-[auto,50px] items-center bg-white dark:bg-white5 rounded-[7px]"
			>
				<input
					class="w-full h-full bg-transparent outline-none px-[23px] text-sm font-medium font-normal text-black dark:text-grayLight placeholder:text-grayDark4"
					type="text"
					bind:value={searchKey}
					placeholder="Seach here..."
					on:input={search}
				/>
				<div
					class="opacity-80 hover:opacity-100 flex h-[calc(100%-20px)] justify-center items-center cursor-pointer border-l border-grayDark40"
				>
					<svg class="w-[20px] h-[20px]">
						<use class="fill-grayDark" href="/imgs/icons/icons.svg#search" />
					</svg>
				</div>
			</div>
			<div
				on:click={handleFilter}
				id="filterToggle"
				class="opacity-80 hover:opacity-100 w-[50px] h-[50px] bg-white dark:bg-white5 rounded-[7px] flex items-center justify-center cursor-pointer"
			>
				<svg class="w-[20px] h-[20px]">
					<use class="fill-grayDark" href="/imgs/icons/icons.svg#filter" />
				</svg>
			</div>
			{#if filter}
				<div
					class="w-full px-[25px] py-[13px] bg-white dark:bg-white5 rounded-[7px] h-[500px] overflow-auto custom-scrollbar md:h-auto"
					id="filter"
				>
					<h6
						class="text-xl text-black dark:text-white50 font-medium border-b border-b-grayLight4 dark:border-b-white11 pb-[6px] mb-[22px]"
					>
						Filter
					</h6>
					{#each filterData as filter}
						<div class="w-full flex flex-col gap-[12px] mb-[24px]">
							<p class="text-sm text-black50 dark:text-white50 font-medium">{filter.title}</p>
							<div class="w-full flex flex-wrap items-center gap-[6px]">
								{#each filter.data as item}
									<label class="cursor-pointer group">
										<input
											type="checkbox"
											name={filter.title + '[]'}
											class="peer sr-only"
											on:click={(e) => {
												if (filter.title == 'VendorList') selectVendor(e, item);
												else selectType(e, item);
											}}
											checked={filter.title == 'VendorList'
												? vendorSelectedList.includes(item.name)
												: typeSelectedList.includes(item.name)}
										/>
										<div
											class="flex px-[12px] py-[8px] bg-grayLight4 dark:bg-white5 text-black50 dark:text-white50 hover:text-grayLight dark:hover:text-white50 text-sm border border-grayLight2 dark:border-white11 rounded-[4px] hover:bg-linear
                            peer-checked:bg-linear peer-checked:text-white peer-focus:scale-[0.99] peer-blur:scale-[2] transition-all"
										>
											{item.name}
										</div>
									</label>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		{#if vendorSelectedList.length > 0}
		<div class="flex flex-col gap-[6px] mt-[15px]">
			<p class="dark:text-white text-black text-base font-medium">Seleted Vendors</p>
			<div class="flex items-cnter flex-wrap gap-[6px]">
				{#each vendorSelectedList as vendor}
					<div
						class="select-none flex items-center gap-[6px] pl-[12px] py-[6px] dark:bg-white11 bg-grayLight2 rounded-[59px]"
					>
						<p class="text-sm dark:text-white50 text-black50 translate-y-[1px]">{vendor}</p>
							<div on:click={removeFromvendorSelectedList(vendor)} class="h-full flex items-center w-[20px] pl-[6px] pr-[20px]  border-l dark:border-white11 border-grayLight cursor-pointer group">
								<p class="font-medium dark:text-white50 text-black50 group-hover:text-red">✖</p>
							</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
		{#if typeSelectedList.length > 0}
			<div class="flex flex-col gap-[6px] mt-[15px]">
				<p class="dark:text-white text-black text-base font-medium">Seleted Types</p>
				<div class="flex items-cnter flex-wrap gap-[6px]">
					{#each typeSelectedList as type}
						<div
							class="select-none flex items-center gap-[6px] pl-[12px] py-[6px] dark:bg-white11 bg-grayLight2 rounded-[59px]"
						>
							<p class="text-sm dark:text-white50 text-black50 translate-y-[1px]">{type}</p>
								<div on:click={removeFromTypeSelectedList(type)} class="h-full flex items-center w-[20px] pl-[6px] pr-[20px]  border-l dark:border-white11 border-grayLight cursor-pointer group">
									<p class="font-medium dark:text-white50 text-black50 group-hover:text-red">✖</p>
								</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<div
			class="select-none flex sm:flex-wrap items-center gap-[15px] mt-[30px] dragable overflow-auto scrollbar-hidden"
		>
			{#each casinoTabs as tab}
				<div
					on:click={() => handleCasinoFilter(tab.title)}
					class={`${
						currentTab.toLowerCase() === tab.title.toLowerCase() ? 'bg-linear active-p-white' : ''
					} ${
						tab.hide ? 'hidden sm:flex' : 'flex'
					} group items-center gap-[8px] p-[12px] min-w-max bg-black5 dark:bg-white5 border border-black5 dark:border-white11 rounded-[7px] cursor-pointer hover:bg-linear`}
				>
					{#if tab.image}
						<img class="w-[15px] mb-[3px]" src={tab.image} alt={tab.title} />
					{/if}
					<p
						class="group-hover:text-white text-black dark:text-white text-xs sm:text-sm font-normal"
					>
						{tab.title}
					</p>
				</div>
			{/each}
		</div>

		<div class="grid grid-system-slots w-full gap-[20px] mt-[20px]">
			{#each casinoSlotsArr as item}
				<a
					href="/play/{item.title.toLowerCase().replaceAll(' ', '-')}/{item.idx}"
					class="border-b-4 border-b-transparent group flex flex-col bg-white dark:bg-white5 relative w-full rounded-[20px] overflow-hidden hover:border-b-blue transition-all"
				>
					<div class="relative rounded-[20px] overflow-hidden">
						<img
							class="w-full h-[150px] sm:h-[180px] object-cover transition05"
							src={item.thumbnail}
							alt={item.title}
						/>
						<div
							class="group-hover:opacity-100 opacity-0 transition-all absolute left-0 top-0 w-full h-full bg-black81 flex items-center justify-center"
						>
							<div
								class="flex flex-col gap-[12px] scale-[0.80] group-hover:scale-[1] transition-all"
							>
								<img src="/imgs/play.svg" alt="play.svg" />
							</div>
						</div>
					</div>
					<div
						class="w-full flex gap-[6px] items-center justify-between px-[13px] pt-[11px] pb-[16px]"
					>
						<p class="text-sm text-grayDark2 font-semibold">
							{item.title}
						</p>
						<svg class="min-w-[20px] min-h-[20px] w-[20px] h-[20px]">
							<use class="fill-transparent" href="/imgs/icons/icons.svg#info" />
						</svg>
					</div>
				</a>
			{/each}

			{#if !slotsLoaded}
				<Skeleton cardCount={40} />
			{/if}

			{#if !loadedMore}
				<Skeleton cardCount={40} />
			{/if}
		</div>

		{#if slotsLoaded}
			<div class="w-full justify-center flex flex-col items-center gap-[12px] mt-[32px]">
				<p class="text-base font-medium text-black dark:text-white">
					{currentLimit} / {totalNumber}
				</p>
				<button
					class="p-[12px] bg-linear text-white rounded-[6px] border border-white11"
					on:click={moreLoad}>Load more</button
				>
			</div>
		{/if}

		<Footer banner={false} />
	</div>
</main>
