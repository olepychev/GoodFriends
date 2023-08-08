import { writable } from 'svelte/store';

const globalStore = writable({
	sidebarOpen: false,
	chatOpen: false,
	betSlipOpen: false,

	// profile menu modals
	profileMenuOpen: false,
	depositModalOpen: false,
	withdrawModalOpen: false,
	profileModalOpen: 0,

	// auth modals
	loginOpen: false,
	registrationOpen: 0,
	forgotPasswordOpen: 0,

	telegramUserData: null,
	darkMode: true,
	userDetail: null,
	// userDetail: {
	// 	member_idx: 3,
	// 	email: 'g_115965063647480354431',
	// 	nick: 'user6474563937',
	// 	level: 1,
	// 	game_money: 0,
	// 	profile_image: 'https://storage.goodfriendszone.com/uploads/permanent/newbie.webp',
	// 	login_type: 'google',
	// 	affiliate_code: 'abcde'
	// }
});

const store = {
	subscribe: globalStore.subscribe,
	toggleItem: (item, value) => {
		globalStore.update((storeValues) => {
			return { ...storeValues, [item]: value };
		});
	}
};

export default store;
