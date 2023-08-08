<script>
	import { onMount } from 'svelte';
	import globalStore from '../store/globalStore';

	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Chat from '$lib/components/chat/chat.svelte';
	import BetSlip from '$lib/components/betSlip/betSlip.svelte';
	
	import '../base.css';
	
	import ScrollUp from '$lib/components/scrollUp/scroll-up.svelte';
	import MobileNav from '$lib/components/mobile-nav/mobileNav.svelte';
	import MainLoader from '$lib/components/loader/mainLoader.svelte';
	
	import Layout from '$lib/components/auth/layout.svelte';
	import SignIn from '$lib/components/auth/sign-in.svelte';
	import SignUp from '$lib/components/auth/sign-up.svelte';
	import ForgotPassword from '$lib/components/auth/forgot-password.svelte';

	import ProfileMenu from '$lib/components/menus/profile/profileMenu.svelte';
	import DepositModal from '$lib/components/modals/deposit/deposit.svelte';
	import MyProfile from '$lib/components/modals/profile/myProfile.svelte';
	import EditMyProfile from '$lib/components/modals/profile/editMyProfile.svelte';

	$: chatOpen = $globalStore.chatOpen;
	$: betSlipOpen = $globalStore.betSlipOpen;

	$: userDetail = $globalStore.userDetail;
	$: darkMode = $globalStore.darkMode;
// auth Modals
	$: loginOpen = $globalStore.loginOpen;
	$: registrationOpen = $globalStore.registrationOpen;
	$: forgotPasswordOpen = $globalStore.forgotPasswordOpen;

// profile menu Modals
	$: profileMenuOpen = $globalStore.profileMenuOpen;
	$: depositModalOpen = $globalStore.depositModalOpen;
	$: profileModalOpen = $globalStore.profileModalOpen;

	let loaderMain = false;

	// function chatToggle(res) {
	// 	handleChat(res);
	// }

	// function chatClose(res) {
	// 	handleChat(res);
	// }

	function closeForm() {
		globalStore.toggleItem('loginOpen', false);
		globalStore.toggleItem('registrationOpen', 0);
		globalStore.toggleItem('forgotPasswordOpen', 0);

		document.body.style.overflow = 'auto';
	}

	onMount(() => {
		if(darkMode) {
			document.documentElement.classList.add('dark')
		}else {
			document.documentElement.classList.remove('dark')
		}
		loaderMain = true
		chatOpen
			? document.body.classList.add('chat-active')
			: document.body.classList.remove('chat-active');
	});
</script>

{#if !loaderMain}
	<MainLoader />
{/if}
<Header />
<Sidebar />
{#if userDetail}
	{#if chatOpen}
		<div>
			<Chat />
		</div>
	{:else}
		<div class="translate-x-[-2000px] opacity-0 transition-all">
			<Chat />
		</div>
	{/if}

	{#if betSlipOpen}
		<BetSlip />
	{/if}
{/if}

<!-- Auth Modals -->
<div class={loginOpen ? 'block': 'hidden'}>
	<!-- {#if loginOpen} -->
	<Layout on:closeForm={closeForm}>
		<SignIn />
	</Layout>
	<!-- {/if} -->
</div>

{#if registrationOpen}
	<Layout on:closeForm={closeForm}>
		<SignUp />
	</Layout>
{/if}
	
{#if forgotPasswordOpen}
	<Layout on:closeForm={closeForm}>
		<ForgotPassword />
	</Layout>
{/if}


<!-- User Profile Menu Modals -->
{#if profileMenuOpen}
	<ProfileMenu />
{/if}

{#if depositModalOpen}
	<DepositModal />
{/if}

{#if profileModalOpen == 1}
	<MyProfile />
{:else if profileModalOpen == 2}
	<EditMyProfile />
{/if}


<ScrollUp />

<slot />

<MobileNav />