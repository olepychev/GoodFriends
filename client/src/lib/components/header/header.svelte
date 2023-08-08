<script>
	import globalStore from '../../../store/globalStore';
	import LoggedinHeader from './headerLoggedin.svelte';
	import LoginHeader from './headerlogin.svelte';
	import { page } from '$app/stores';
	
	$: path = $page.url.pathname;
	$: isLoggedIn = $globalStore.userDetail;
	
</script>

<header
	id="header"
	class="overflow-hidden sticky top-0 w-full px-[15px] sm:px-[30px] py-[17px] bg-white dark:bg-blackDark z-[999]"
>
	<div class="w-full flex items-center justify-between">
		<!-- <div class="telegram-login-widget"></div> -->
		<div class="hidden md:flex items-center gap-[15px]">
			<a
				href="/casino"
				class={`${
					path === '/casino' ? 'active' : ''
				} group header-filter px-[18px] py-[13px] border-[1.14px] hover:bg-grayLight4 dark:hover:bg-white5 border-transparent rounded-[7px] transition-all hover:border-grayLight2 dark:hover:border-white11 flex items-center gap-[9px] cursor-pointer`}
			>
				<div class="header_icon-light hidden group-hover:block">
					<img class="w-[24px]" src="/imgs/casinoR.svg"/>
				</div>
				<div class="header_icon-dark block group-hover:hidden">
					<img class="dark:hidden flex w-[24px]" src="/imgs/casinoLight.svg"/>
					<img class="dark:flex hidden w-[24px]" src="/imgs/casinoDark.svg"/>
				</div>

				<p class="text-grayLight3 dark:text-gray font-semibold text-sm group-hover:text-black dark:group-hover:text-white">Casino</p>
			</a>

			<a
				href="/sports"
				class={`${
					path === '/sports' ? 'active' : ''
				} group header-filter px-[18px] py-[13px] border-[1.14px] hover:bg-grayLight4 dark:hover:bg-white5 border-transparent rounded-[7px] transition-all hover:border-grayLight2 dark:hover:border-white11 flex items-center gap-[9px] cursor-pointer`}
			>
				<div class="header_icon-light hidden group-hover:block">
					<img class="w-[24px]" src="/imgs/sportsR.svg"/>
				</div>
				<div class="header_icon-dark block group-hover:hidden">
					<img class="dark:hidden flex w-[24px]" src="/imgs/sportsLight.svg"/>
					<img class="dark:flex hidden w-[24px]" src="/imgs/sportsDark.svg"/>
				</div>

				<p class="text-grayLight3 dark:text-gray font-semibold text-sm group-hover:text-black dark:group-hover:text-white">Sports</p>
			</a>
		</div>
		<a href="/" class="flex md:hidden w-full max-w-[42px]">
			<img class="w-full" src="/imgs/Logo.svg" alt="">
		</a>

		{#if isLoggedIn}
			<LoggedinHeader />
		{:else}
			<LoginHeader />
		{/if}
		<img
			src="/imgs/headerElipse.svg"
			class="hidden dark:flex h-[125px] object-cover sm:object-inherit sm:h-auto absolute z-[-1] right-0 bottom-[2px]"
			alt=""
		/>
	</div>
</header>
