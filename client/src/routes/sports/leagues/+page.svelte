<script>
	import BreadCrumb from '$lib/components/breadcrumb/breadCrumb.svelte';
	import SportsBet from '$lib/components/sports/sportsBet.svelte';
    import Footer from '$lib/components/footer/footer.svelte';
	const sportsTabs = [
		{
			title: 'Soccer',
			image: '/src/assets/imgs/live-sports/ball.svg'
		},
		{
			title: 'Esports',
			image: '/src/assets/imgs/live-sports/headphone.svg'
		},
		{
			title: 'Tennis',
			image: '/src/assets/imgs/live-sports/tennis-ball.svg'
		},
		{
			title: 'Basketball',
			image: '/src/assets/imgs/live-sports/basket-ball.svg'
		},
		{
			title: 'Rugby',
			image: '/src/assets/imgs/live-sports/rugby-ball.svg'
		},
		{
			title: 'Cricket',
			image: '/src/assets/imgs/live-sports/cricket-ball.svg'
		}
	];
	const sportsItems = [
		{
			type: 'Soccer',
			id: 0,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'ITALY - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Sevilia',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Atletico Madrid askdkajsdlk',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Soccer',
			id: 1,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'ITALY - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Esports',
			id: 2,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'Esports - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Esports',
			id: 2,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'Esports - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Tennis',
			id: 2,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'Tennis - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Basketball',
			id: 2,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'Basketball - PREMIER LEAGUE askdaksdjakdjasjkd >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Rugby',
			id: 2,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'Rugby - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		},
		{
			type: 'Cricket',
			id: 2,
			timeData: {
				time: '15:31',
				date: '27 Feb'
			},
			content: 'Cricket - PREMIER LEAGUE >',
			teams: {
				team1: {
					title: 'Torino',
					image: '/src/assets/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/src/assets/imgs/atletico.svg'
				}
			},
			bet: {
				first: '5.5',
				x: '3.6',
				second: '1.7'
			},
			handicap: {
				first: {
					subTitle: '+0.75',
					title: '1.9'
				},
				second: {
					subTitle: '-0.75',
					title: '1.7'
				}
			},
			total: [
				{
					subTitle: '2.25',
					title: '2.0'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '1.8'
				},
				{
					subTitle: '2.25',
					title: '2.0'
				}
			]
		}
	];

	const breadCrumbPages = [
		{
			name: 'Home',
			route: '/'
		}
	];
	const title = 'sports';
</script>

<main class="w-fw-full md:py-[27px] md:pl-[30px] md:pr-[30px]" id="main">
	<div class="container-main">
		<div class="pl-[15px] pr-[15px] md:pl-[0px] md:pr-[0px] my-[15px]">
			<BreadCrumb pages={breadCrumbPages} current={title} />
		</div>
		<div class="relative w-full mb-[35px]">
			<img
				class=" w-full min-h-[256px] sm:min-h-[220px] object-cover md:rounded-[14px]"
				src="/src/assets/imgs/sportsBanner.svg"
				alt=""
			/>
			<div class="absolute left-[28px] top-[70%] translate-y-[-50%]">
				<div class="flex flex-col w-full">
					<h4 class="text-2xl text-white font-semibold">Soccer Odds</h4>
					<ul class="hidden md:flex items-center gap-[12px] sm:gap-[40px] mt-[12px] sm:mt-[20px]">
						<a
							href="/sports"
							class="text-white50 text-[10px] sm:text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
						>
							Highlights
						</a>
						<a
							href="/sports/live"
							class="text-white50 text-[10px] sm:text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
						>
							Live
						</a>
						<li
							class="gradient-text active text-white50 text-[10px] sm:text-xs font-semibold uppercase pb-[14px] cursor-pointer hover-gradient-text transition-all"
						>
							Leagues
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="px-[15px] py-[30px] sm:px-[30px] md:px-[0px] md:py-[0px]">
			<ul class="md:hidden flex items-center gap-[12px]">
				<a
					href="/sports"
					class="dark:text-white50 hover:bg-linear p-[12px] dark:bg-white5 bg-grayLight2 rounded-[7px] border dark:border-white11 border-black5 text-[10px] sm:text-xs font-semibold uppercase cursor-pointer transition-all"
				>
					Highlights
				</a>
				<a
					href="/sports/live"
					class="dark:text-white50 hover:bg-linear text-grayDark p-[12px] dark:bg-white5 bg-grayLight2 rounded-[7px] border dark:border-white11 border-black5 text-[10px] sm:text-xs font-semibold uppercase cursor-pointer transition-all"
				>
					Live
				</a>
				<a
					href="/sports/leagues"
					class="bg-linear !text-white dark:text-white50 hover:bg-linear text-grayDark p-[12px] dark:bg-white5 bg-grayLight2 rounded-[7px] border dark:border-white11 border-black5 text-[10px] sm:text-xs font-semibold uppercase cursor-pointer transition-all"
				>
					Leagues
				</a>
			</ul>
			<div class="flex flex-col gap-[4px] mt-[35px]">
				<div class="w-full px-[20px] py-[12px] rounded-[7px] bg-linear text-white text-md">
					Top Leagues
				</div>
				<div class="w-full flex flex-col gap-[30px]">
					<div class="flex flex-col gap-[5px]">
						<div
							class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
						>
							<div class="flex items-center gap-[12px]">
								<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
								<p class="font-semibold text-base text-grayDark">(3)</p>
							</div>
							<div
								class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
							>
								<svg class="w-[16px] h-[16px]">
									<use
										class="group-hover:fill-yellow fill-grayDark transition-all"
										href="/src/assets/imgs/icons/icons.svg#star"
									/>
								</svg>
							</div>
						</div>
						<div
							class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
						>
							<div class="flex items-center gap-[12px]">
								<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
								<p class="font-semibold text-base text-grayDark">(3)</p>
							</div>
							<div
								class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
							>
								<svg class="w-[16px] h-[16px]">
									<use
										class="group-hover:fill-yellow fill-grayDark transition-all"
										href="/src/assets/imgs/icons/icons.svg#star"
									/>
								</svg>
							</div>
						</div>
						<div
							class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
						>
							<div class="flex items-center gap-[12px]">
								<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
								<p class="font-semibold text-base text-grayDark">(3)</p>
							</div>
							<div
								class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
							>
								<svg class="w-[16px] h-[16px]">
									<use
										class="group-hover:fill-yellow fill-grayDark transition-all"
										href="/src/assets/imgs/icons/icons.svg#star"
									/>
								</svg>
							</div>
						</div>
						<div
							class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
						>
							<div class="flex items-center gap-[12px]">
								<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
								<p class="font-semibold text-base text-grayDark">(3)</p>
							</div>
							<div
								class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
							>
								<svg class="w-[16px] h-[16px]">
									<use
										class="group-hover:fill-yellow fill-grayDark transition-all"
										href="/src/assets/imgs/icons/icons.svg#star"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div class="flex flex-col gap-[4px]">
						<div class="w-full px-[20px] py-[12px] rounded-[7px] bg-blue10 text-purpleLight text-md">
							Top Leagues
						</div>
						<div class="flex flex-col gap-[5px]">
							<div
								class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
							>
								<div class="flex items-center gap-[12px]">
									<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
									<p class="font-semibold text-base text-grayDark">(3)</p>
								</div>
								<div
									class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
								>
									<svg class="w-[16px] h-[16px]">
										<use
											class="group-hover:fill-yellow fill-grayDark transition-all"
											href="/src/assets/imgs/icons/icons.svg#star"
										/>
									</svg>
								</div>
							</div>
							<div
								class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
							>
								<div class="flex items-center gap-[12px]">
									<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
									<p class="font-semibold text-base text-grayDark">(3)</p>
								</div>
								<div
									class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
								>
									<svg class="w-[16px] h-[16px]">
										<use
											class="group-hover:fill-yellow fill-grayDark transition-all"
											href="/src/assets/imgs/icons/icons.svg#star"
										/>
									</svg>
								</div>
							</div>
							<div
								class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
							>
								<div class="flex items-center gap-[12px]">
									<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
									<p class="font-semibold text-base text-grayDark">(3)</p>
								</div>
								<div
									class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
								>
									<svg class="w-[16px] h-[16px]">
										<use
											class="group-hover:fill-yellow fill-grayDark transition-all"
											href="/src/assets/imgs/icons/icons.svg#star"
										/>
									</svg>
								</div>
							</div>
							<div
								class="w-full flex items-center justify-between px-[20px] rounded-[7px] py-[12px] bg-white dark:bg-white5"
							>
								<div class="flex items-center gap-[12px]">
									<p class="font-medium text-base text-black dark:text-white">England - FA Cup</p>
									<p class="font-semibold text-base text-grayDark">(3)</p>
								</div>
								<div
									class="group cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-[4px] bg-grayLight4 dark:bg-white11"
								>
									<svg class="w-[16px] h-[16px]">
										<use
											class="group-hover:fill-yellow fill-grayDark transition-all"
											href="/src/assets/imgs/icons/icons.svg#star"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Footer banner={false} />
		</div>

	</div>
</main>
