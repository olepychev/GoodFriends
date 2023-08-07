<script>
	import globalStore from '../../../store/globalStore';
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	$: chatOpen = $globalStore.chatOpen;

	function chatToggle(e) {
		chatOpen ? document.body.classList.remove('chat-active')
			: document.body.classList.add('chat-active')
		globalStore.toggleItem('chatOpen', !$globalStore.chatOpen);
	}

	function openProfileMenu() {
		dispatch('openProfileMenu')
	}

	function openBetSlip() {
		dispatch('openBetSlip')
	}

</script>
<div class="flex items-center md:gap-[25px] lg:gap-[50px]">
	<div class="flex items-center gap-[23px]">
		<div class="hidden md:flex cursor-pointer flex items-center opacity-70 hover:opacity-100 transition-all">
			<svg class="w-[24px] h-[24px]">
				<use class="dark:fill-white fill-black" href="/imgs/icons/icons.svg#bell"/>
			</svg>
		</div>
		<button
			on:click={chatToggle}
			class="hidden md:flex w-[49px] h-[44px] gradient-border rounded-[7px] before:rounded-[7px] bg-purpleLight2  dark:bg-blueDark items-center justify-center"
		>
			<img class="w-[24px]" src="/imgs/chatLinear.svg" alt="">
		</button>
	</div>
	<div class="flex items-center gap-[15px] lg:gap-[20px]">
		<button on:click={openBetSlip}
			class="hidden md:flex gradient-border bg-purpleLight2  dark:bg-blueDark px-[21px] h-[47px] items-center justify-center rounded-[7px] before:rounded-[7px]"
		>
			<p class="text-base font-medium gradient-text hidden lg:flex">Bet Slip</p>
			<p class="text-base font-semibold gradient-text lg:hidden flex">BS</p>
		</button>
		<button class="group flex items-center gap-[8px] rounded-full p-[7px] bg-yellow25">
			<img class="w-[21px]" src="/imgs/coin.svg" alt="">
			<p class="text-yellow dark:text-white text-base font-normal">$ { $globalStore.userDetail.game_money }</p>
			<div
				class="group-hover:shadow-lgBlue w-[21px] h-[21px] bg-linear rounded-full flex items-center justify-center"
			>
			<img class="w-[21px]" src="/imgs/add.svg" alt="">
			</div>
		</button>
		<div on:click={openProfileMenu} id="headerProfile" class="flex items-center gap-[9px] cursor-pointer">
			<div class="relative w-[48px] h-[48px] rounded-full border border-grayLight dark:border-white50">
				<img class="absolute w-full h-full object-cover rounded-full" src={ $globalStore.userDetail.profile_image } alt="profile image" />
				<img class="lg:hidden w-[14px] absolute top-[calc(100%-10px)] left-[50%] translate-x-[-50%]" src="/imgs/medal.svg" alt="" />
			</div>
			<div class="hidden lg:flex flex-col gap-[2px]">
				<p class="text-black dark:text-white text-base font-normal">{ $globalStore.userDetail.nick }</p>
				<div class="flex items-center gap-[7px]">
					<img class="w-[14px]" src="/imgs/medal.svg" alt="" />
					<p class="text-gray font-normal text-base">level { $globalStore.userDetail.level }</p>
				</div>
			</div>
			<svg class="w-[20px] h-[20px] hidden lg:block">
				<use class="fill-black dark:fill-white" href="/imgs/icons/icons.svg#chevron-down"/>
			</svg>
		</div>
	</div>
</div>