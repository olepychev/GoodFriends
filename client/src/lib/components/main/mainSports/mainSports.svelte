<script>
	import SportsBet from '../../sports/sportsBet.svelte';

	const mainSportsTabs = [
		{
			title: 'Soccer',
			image: '/imgs/live-sports/ball.svg'
		},
		{
			title: 'Esports',
			image: '/imgs/live-sports/headphone.svg'
		},
		{
			title: 'Tennis',
			image: '/imgs/live-sports/tennis-ball.svg',
			hide: 'mobile' // hide when taiiwindcss breakpoiint screen.sm
		},
		{
			title: 'Basketball',
			image: '/imgs/live-sports/basket-ball.svg',
			hide: 'mobile' // hide when taiiwindcss breakpoiint screen.sm
		},
		{
			title: 'Rugby',
			image: '/imgs/live-sports/rugby-ball.svg',
			hide: 'mobile' // hide when taiiwindcss breakpoiint screen.sm
		},
		{
			title: 'Cricket',
			image: '/imgs/live-sports/cricket-ball.svg',
			hide: 'mobile' // hide when taiiwindcss breakpoiint screen.sm
		}
	];
	const mainSportsItems = [
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Atletico Madrid askdkajsdlk',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
					image: '/imgs/sevilia.svg'
				},
				team2: {
					title: 'Inter Milan',
					image: '/imgs/atletico.svg'
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
</script>

<SportsBet
	activeTab="esports"
	sportTabs={mainSportsTabs}
	sportItems={mainSportsItems}
	title="Main Sports"
	seeAll={true}
/>
