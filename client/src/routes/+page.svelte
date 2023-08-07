<script>
	import Hero from '$lib/components/main/hero/hero.svelte';
	import AllCategory from '$lib/components/main/allCategory/allCategory.svelte';
	import LiveSports from '$lib/components/main/liveSports/liveSports.svelte';
	import MainSports from '$lib/components/main/mainSports/mainSports.svelte';
	import BestCasino from '$lib/components/main/bestCasino/bestCasino.svelte';
	import BestSlot from '$lib/components/main/bestSlot/bestSlot.svelte';
	import ActivityTable from '$lib/components/main/activityTable/activityTable.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	const betActivity = [
		{
			type: 'latest bets',
			game: {
				image: '/src/assets/imgs/game1.svg',
				title: 'Ring of fortune'
			},
			player: 'bountyHunter31',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/bitcoin.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: false,
				profit: '21.567',
				image: '/src/assets/imgs/bitcoin.svg'
			}
		},
		{
			type: 'latest bets',
			game: {
				image: '/src/assets/imgs/game2.svg',
				title: 'Ring of fortune'
			},
			player: 'unknown',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/eth.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: true,
				profit: '21.567',
				image: '/src/assets/imgs/eth.svg'
			}
		},
		{
			type: 'latest bets',
			game: {
				image: '/src/assets/imgs/game3.svg',
				title: 'Ring of fortune'
			},
			player: 'wdwdw21',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/eth.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: true,
				profit: '21.567',
				image: '/src/assets/imgs/eth.svg'
			}
		},

		{
			type: 'recent deposits',
			game: {
				image: '/src/assets/imgs/game4.svg',
				title: 'Ring of fortune'
			},
			player: 'gmaksd askd',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/bitcoin.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: false,
				profit: '21.567',
				image: '/src/assets/imgs/bitcoin.svg'
			}
		},
		{
			type: 'recent deposits',
			game: {
				image: '/src/assets/imgs/game4.svg',
				title: 'Ring of fortune'
			},
			player: 'gmaksd askd',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/bitcoin.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: false,
				profit: '21.567',
				image: '/src/assets/imgs/bitcoin.svg'
			}
		},
		{
			type: 'recent deposits',
			game: {
				image: '/src/assets/imgs/game1.svg',
				title: 'Ring of fortune'
			},
			player: 'uadasd123',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/eth.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: true,
				profit: '21.567',
				image: '/src/assets/imgs/eth.svg'
			}
		},
		{
			type: 'recent deposits',
			game: {
				image: '/src/assets/imgs/game2.svg',
				title: 'Ring of fortune'
			},
			player: 'blabla bla',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/eth.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: true,
				profit: '21.567',
				image: '/src/assets/imgs/eth.svg'
			}
		},

		{
			type: 'recent withdrawals',
			game: {
				image: '/src/assets/imgs/game2.svg',
				title: 'Ring of fortune'
			},
			player: 'blabla bla',
			betAmount: {
				amount: '104.54',
				image: '/src/assets/imgs/eth.svg'
			},
			multiplier: '0.001x',
			profitAmount: {
				isProfit: true,
				profit: '21.567',
				image: '/src/assets/imgs/eth.svg'
			}
		}
	];

	
</script>

<main class="w-full md:py-[27px] md:pl-[30px] md:pr-[30px]" id="main">
	<div class="container-main">
		<!--Hero-->
		<Hero />
		<div class="px-[15px] py-[30px] sm:px-[30px] md:px-[0px] md:py-[0px]">
			<!-- All Category -->
			<AllCategory />
			<!-- Live Sports -->
			<LiveSports />
			<!-- Main Sports -->
			<MainSports />
			<!-- Best Casino -->
			<BestCasino />
			<!-- Best Slot -->
			<BestSlot />
			<!-- Recent Bet Deposits & Withdrawal History -->
			<ActivityTable title="Recent Bet Deposits & Withdrawal History" showCols={[1, 1, 1]} />
			<!-- Footer -->
			<Footer />
		</div>
	</div>
</main>
