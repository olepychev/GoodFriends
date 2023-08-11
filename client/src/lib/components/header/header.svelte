<script>
	import globalStore from '../../../store/globalStore';
	import LoggedinHeader from './headerLoggedin.svelte';
	import LoginHeader from './headerlogin.svelte';
	import { page } from '$app/stores';
	import toast from '../../../lib/components/toast/toast';
	import { getAccessToken, getRefreshToken } from '../../../apis/account';
	import ProfileMenu from '$lib/components/menus/profile/profileMenu.svelte';
	import DepositModal from '../modals/deposit/deposit.svelte';
	import WithdrawModal from '../modals/withdraw/withdraw.svelte';
	import MyProfile from '../modals/profile/myProfile.svelte';
	import EditMyProfile from '../modals/profile/editMyProfile.svelte';
	import BetSlip from '../betSlip/betSlip.svelte';

	$: path = $page.url.pathname;
	$: isLoggedIn = $globalStore.userDetail;

	let activeProfileMenu = false;
	function openProfileMenu() {
		activeProfileMenu = true;
	}
	function closeProfileMenu() {
		activeProfileMenu = false;
	}

	let activeDepositModal = false;
	let activeWithdrawModal = false;
	function openDepositModal() {
		activeProfileMenu = false;
		activeDepositModal = true;
		activeWithdrawModal = false;
		document.body.style.overflow = 'hidden';
	}

	function openWithdrawModal() {
		activeProfileMenu = false;
		activeDepositModal = false;
		activeWithdrawModal = true;
		document.body.style.overflow = 'hidden';
	}

	let activeMyProfileModal = false;
	let editMyProfileModal = false;
	function openMyProfileModal() {
		activeProfileMenu = false;
		activeMyProfileModal = true;
		editMyProfileModal = false;
		document.body.style.overflow = 'hidden';
	}
	function editMyProfile() {
		editMyProfileModal = true;
	}
	function previousMyProfile() {
		editMyProfileModal = false;
	}
	$: activeBetSlip = $globalStore.betSlip
	function openBetSlip() {
		globalStore.toggleItem('betSlip', !$globalStore.betSlip);
	}

	function closeBetSlip() {
		globalStore.toggleItem('betSlip', false);
	}

	function closeProfileModal() {
		activeDepositModal = false;
		activeMyProfileModal = false;
		activeWithdrawModal = false;
		document.body.style.overflow = 'auto';
	}
</script>

<header
	id="header"
	class="overflow-hidden sticky top-0 w-full px-[15px] sm:px-[30px] py-[17px] bg-white dark:bg-blackDark z-[999]"
>
	<div class="w-full flex items-center justify-between">
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
					path.includes('/sports') ? 'active' : ''
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
			<LoggedinHeader on:openBetSlip={openBetSlip} on:openProfileMenu={openProfileMenu} />
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

{#if activeProfileMenu}
	<ProfileMenu
		on:closeProfileMenu={closeProfileMenu}
		on:openDepositModal={openDepositModal}
		on:openWithdrawModal={openWithdrawModal}
		on:openMyProfileModal={openMyProfileModal}
	/>
{/if}

{#if activeDepositModal}
	<DepositModal on:closeProfileModal={closeProfileModal} />
{/if}

{#if activeWithdrawModal}
	<WithdrawModal on:closeProfileModal={closeProfileModal} />
{/if}

{#if activeMyProfileModal && !editMyProfileModal}
	<MyProfile on:closeProfileModal={closeProfileModal} on:editMyProfile={editMyProfile} />
{:else if activeMyProfileModal && editMyProfileModal}
	<EditMyProfile
		step={true}
		on:stepBack={previousMyProfile}
		on:closeProfileModal={closeProfileModal}
	/>
{/if}

{#if activeBetSlip}
	<BetSlip on:closeBetSlip={closeBetSlip}/>
{/if}
