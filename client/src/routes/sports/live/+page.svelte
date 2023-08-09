<script>
	import BreadCrumb from '$lib/components/breadCrumb/breadCrumb.svelte';
	import { onMount } from 'svelte';
	import BettingAccordion from '../../../lib/components/accordion/betting/bettingAccordion.svelte';

	const breadCrumbPages = [
		{
			name: 'Home',
			route: '/'
		},
		{
			name: 'sports',
			route: '/sports'
		},
		{
			name: 'England-Premier League',
			route: '/'
		}
	];
	const current = 'Manchester City vs. Liverpool';

	onMount(() => {
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
	});
</script>

<main class="w-full md:py-[27px] md:pl-[30px] md:pr-[30px]" id="main">
	<div class="container-main">
		<div class="pl-[15px] pr-[15px] md:pl-[0px] md:pr-[0px] my-[15px]">
			<BreadCrumb pages={breadCrumbPages} {current} hide="tablet" />
		</div>
		<div class="relative w-full mb-[35px]">
			<img
				class=" w-full h-[306px] sm:h-[320px] object-cover md:rounded-[14px]"
				src="/src/assets/imgs/liveBanner.svg"
				alt=""
			/>
			<div class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
				<div class="w-full flex items-center justify-between max-w-[90%] sm:max-w-[70%]">
					<div class="flex flex-col items-center gap-[16px]">
						<img class="w-[70px] sm:w-[90px]" src="/src/assets/imgs/item1.svg" alt="" />
						<div class="flex flex-col items-center gap-[6px]">
							<p class="font-semibold text-sm sm:text-md text-white">MANCHESTER</p>
							<div class="flex items-center gap-[4px] sm:gap-[7px]">
								<div class="flex items-center gap-[5px]">
									<img class="w-[10px] sm:w-[14px]" src="/src/assets/imgs/red-rec.svg" alt="" />
									<p class="text-xs sm:text-sm text-white font-semibold">1</p>
								</div>
								<div class="flex items-center gap-[5px]">
									<img class="w-[10px] sm:w-[14px]" src="/src/assets/imgs/yellow-rec.svg" alt="" />
									<p class="text-xs sm:text-sm text-white font-semibold">1</p>
								</div>
								<div class="flex items-center gap-[5px]">
									<img class="w-[10px] sm:w-[14px]" src="/src/assets/imgs/white-rec.svg" alt="" />
									<p class="text-xs sm:text-sm text-white font-semibold">1</p>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col items-center gap-[22px]">
						<div class="flex items-center gap-[4px] sm:gap-[9px]">
							<img src="/src/assets/imgs/live.svg" alt="live" />
							<p class="text-sm font-medium text-grayDark">83'Second Half</p>
						</div>
						<div class="flex items-center gap-[14px]">
							<div
								class="w-[26px] h-[26px] sm:w-[37px] sm:h-[37px] rounded-[7px] border-white11 bg-white5 flex items-center justify-center text-white"
							>
								2
							</div>
							<p class="text-grayDark text-sm sm:text-md">:</p>
							<div
								class="w-[26px] h-[26px] sm:w-[37px] sm:h-[37px] rounded-[7px] border-white11 bg-white5 flex items-center justify-center text-white"
							>
								1
							</div>
						</div>
						<p class="gradient-text font-semibold text-sm">1st half 0:0</p>
					</div>
					<div class="flex flex-col items-center gap-[16px]">
						<img class="w-[70px] sm:w-[90px]" src="/src/assets/imgs/item1.svg" alt="" />
						<div class="flex flex-col items-center gap-[6px]">
							<p class="font-semibold text-sm sm:text-md text-white">MANCHESTER</p>
							<div class="flex items-center gap-[4px] sm:gap-[7px]">
								<div class="flex items-center gap-[5px]">
									<img class="w-[10px] sm:w-[14px]" src="/src/assets/imgs/red-rec.svg" alt="" />
									<p class="text-xs sm:text-sm text-white font-semibold">1</p>
								</div>
								<div class="flex items-center gap-[5px]">
									<img class="w-[10px] sm:w-[14px]" src="/src/assets/imgs/yellow-rec.svg" alt="" />
									<p class="text-xs sm:text-sm text-white font-semibold">1</p>
								</div>
								<div class="flex items-center gap-[5px]">
									<img class="w-[10px] sm:w-[14px]" src="/src/assets/imgs/white-rec.svg" alt="" />
									<p class="text-xs sm:text-sm text-white font-semibold">1</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="px-[15px] pt-[0px] py-[30px] sm:px-[30px] md:px-[0px] md:py-[0px]">
			<div class="dragable overflow-auto scrollbar-hidden w-full pb-[6px] flex items-center gap-[15px]">
				<ul class="flex items-center gap-[12px] sm:gap-[40px] mt-[12px] sm:mt-[20px]">
					<li
						class="gradient-text active dark:text-white50 text-black50 min-w-max text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
					>
						All
					</li>
					<a
						href="/sports/live"
						class="dark:text-white50 text-black50 min-w-max text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
					>
						Main
					</a>
					<li
						class="dark:text-white50 text-black50 min-w-max text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
					>
                        Total
					</li>
                    <li
						class="dark:text-white50 text-black50 min-w-max text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
					>
                        handicap
					</li>
                    <li
						class="dark:text-white50 text-black50 min-w-max text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
					>
                        Correct Store
					</li>
				</ul>
			</div>

			<div class="w-full flex flex-col gap-[20px] mt-[30px]">
				<BettingAccordion title="1X2">
					<div class="w-full grid md:grid-cols-3 gap-[10px]">
						<div
							class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
						>
							<p class="font-semibold text-sm text-grayDark">Manchester</p>
							<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
						</div>
						<div
							class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
						>
							<p class="font-semibold text-sm text-grayDark">Manchester</p>
							<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
						</div>
						<div
							class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
						>
							<p class="font-semibold text-sm text-grayDark">Manchester</p>
							<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
						</div>
					</div>
				</BettingAccordion>
				<BettingAccordion title="Double Chanse">
					<div class="w-full grid md:grid-cols-3 gap-[10px]">
						<div
							class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
						>
							<p class="font-semibold text-sm text-grayDark">Manchester</p>
							<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
						</div>
						<div
							class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
						>
							<p class="font-semibold text-sm text-grayDark">Manchester</p>
							<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
						</div>
						<div
							class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
						>
							<p class="font-semibold text-sm text-grayDark">Manchester</p>
							<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
						</div>
					</div>
				</BettingAccordion>
				<BettingAccordion title="Total">
					<div class="w-full hidden md:flex items-center justify-around mb-[10px]">
						<p class="font-semibold text-sm text-grayDark">MANCHESTER</p>
						<p class="font-semibold text-sm text-grayDark">LIVERPOOL</p>
					</div>
					<div class="w-full grid md:grid-cols-2 gap-[10px]">
						<div class="flex flex-col gap-[10px]">
							<p class="md:hidden flex font-semibold text-sm text-grayDark">MANCHESTER</p>

							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
						</div>
						<div class="flex flex-col gap-[10px]">
							<p class="md:hidden flex font-semibold text-sm text-grayDark">LIVERPOOL</p>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
						</div>
					</div>
				</BettingAccordion>
				<BettingAccordion title="Total • Asian">
					<div class="w-full hidden md:flex items-center justify-around mb-[10px]">
						<p class="font-semibold text-sm text-grayDark">MANCHESTER</p>
						<p class="font-semibold text-sm text-grayDark">LIVERPOOL</p>
					</div>
					<div class="w-full grid md:grid-cols-2 gap-[10px]">
						<div class="flex flex-col gap-[10px]">
							<p class="md:hidden flex font-semibold text-sm text-grayDark">MANCHESTER</p>

							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
						</div>
						<div class="flex flex-col gap-[10px]">
							<p class="md:hidden flex font-semibold text-sm text-grayDark">LIVERPOOL</p>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
							<div
								class="cursor-pointer border-2 border-transparent hover:border-purpleLight flex items-center justify-between w-full bg-grayLight4 dark:bg-white5 p-[14px] rounded-[7px] transition-all"
							>
								<p class="font-semibold text-sm text-grayDark">
									<span class="text-base text-black dark:text-white mr-[4px]">Over</span> 2.75
								</p>
								<p class="font-semibold text-sm text-black dark:text-white">1.7</p>
							</div>
						</div>
					</div>
				</BettingAccordion>
			</div>
		</div>
	</div>
</main>
