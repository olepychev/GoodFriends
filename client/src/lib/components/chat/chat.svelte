<script>
	import globalStore from '../../../store/globalStore';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	$: chatOpen = $globalStore.chatOpen;

	function chatClose(e) {
		chatOpen ? document.body.classList.remove('chat-active')
			: document.body.classList.add('chat-active');
		globalStore.toggleItem('chatOpen', false);
	}
</script>

<div class="fixed right-0 md:w-auto w-full top-[80px] md:top-[85px] bg-white dark:bg-black border !border-t-[0px] border-grayLight4 dark:border-white5 z-[99999999] md:z-[999]">
	<div class="w-full md:w-[297px] h-[calc(100vh-86px)]">
		<div
			class="sticky flex top-0 w-full px-[12px] py-[18px] bg-white dark:bg-black21 border border-grayLight4 dark:border-white5 backdrop-blur-[34px] justify-between"
		>
			<p class="text-black dark:text-white text-base font-semibold">Live Chat</p>
			<div class="flex items-center gap-[21px]">
				<div id="info" class="cursor-pointer opacity-60 hover:opacity-100">
					<svg
						class=""
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.99996 18.3334C14.5833 18.3334 18.3333 14.5834 18.3333 10C18.3333 5.41669 14.5833 1.66669 9.99996 1.66669C5.41663 1.66669 1.66663 5.41669 1.66663 10C1.66663 14.5834 5.41663 18.3334 9.99996 18.3334Z"
							stroke="#595A69"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 6.66669V10.8334"
							stroke="#595A69"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.99512 13.3333H10.0026"
							stroke="#595A69"
							stroke-width="1.66667"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div id="prize" class="cursor-pointer opacity-60 hover:opacity-100">
					<svg
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_341_13379)">
							<path
								opacity="0.994"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.69238 -0.0185547C5.62207 -0.0185547 7.55176 -0.0185547 9.48145 -0.0185547C9.48145 0.822592 9.48145 1.66374 9.48145 2.50488C9.30095 2.52401 9.14631 2.59822 9.01758 2.72754C8.86294 3.03678 8.70835 3.34603 8.55371 3.65527C8.18559 3.73881 7.81449 3.80683 7.44043 3.85937C7.08745 4.05179 6.99467 4.33011 7.16211 4.69434C7.40952 4.94174 7.65689 5.18911 7.9043 5.43652C7.88856 5.79737 7.84529 6.15611 7.77441 6.51269C7.81026 6.97515 8.05767 7.1669 8.5166 7.08789C8.83337 6.92331 9.15496 6.76871 9.48145 6.62402C9.48145 9.71646 9.48145 12.8089 9.48145 15.9014C8.19497 15.9014 6.90854 15.9014 5.62207 15.9014C6.58502 14.7798 7.24679 13.4933 7.60742 12.042C7.70565 11.6261 7.75515 11.2055 7.75586 10.7803C6.85588 10.3515 6.11989 9.72681 5.54785 8.90625C3.36448 8.69992 1.72548 7.65466 0.630859 5.77051C0.304766 5.12024 0.0882947 4.43988 -0.0185547 3.72949C-0.0185547 2.96256 -0.0185547 2.19564 -0.0185547 1.42871C0.0487918 1.28106 0.16012 1.17591 0.31543 1.11328C1.32968 1.09473 2.344 1.08854 3.3584 1.09473C3.35223 0.834668 3.35841 0.574902 3.37695 0.31543C3.43959 0.16012 3.54473 0.0487918 3.69238 -0.0185547ZM4.73145 7.58887C3.26316 7.19773 2.19317 6.31947 1.52148 4.9541C1.1678 4.07372 1.02555 3.15834 1.09473 2.20801C1.87065 2.19588 2.64376 2.20825 3.41406 2.24512C3.53919 4.10626 3.97831 5.88751 4.73145 7.58887Z"
								fill="#FED842"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M9.48145 -0.0185547C11.4111 -0.0185547 13.3408 -0.0185547 15.2705 -0.0185547C15.4182 0.0487918 15.5233 0.16012 15.5859 0.31543C15.6045 0.574902 15.6107 0.834668 15.6045 1.09473C16.6189 1.08854 17.6332 1.09473 18.6475 1.11328C18.8028 1.17591 18.9141 1.28106 18.9814 1.42871C18.9814 2.19564 18.9814 2.96256 18.9814 3.72949C18.619 5.9169 17.4315 7.4817 15.4189 8.42383C14.7724 8.67825 14.1044 8.83904 13.415 8.90625C12.843 9.72681 12.107 10.3515 11.207 10.7803C11.2755 12.2349 11.7084 13.5709 12.5059 14.7881C12.7788 15.1658 13.0572 15.5369 13.3408 15.9014C12.0607 15.9384 10.7742 15.9508 9.48145 15.9385C8.18867 15.9508 6.9022 15.9384 5.62207 15.9014C6.90854 15.9014 8.19497 15.9014 9.48145 15.9014C9.48145 12.8089 9.48145 9.71646 9.48145 6.62402C9.80022 6.75866 10.1094 6.91329 10.4092 7.08789C10.8859 7.18397 11.1457 6.99222 11.1885 6.5127C11.1055 6.15774 11.0622 5.79901 11.0586 5.43652C11.306 5.18912 11.5534 4.94174 11.8008 4.69434C11.9739 4.36347 11.9058 4.09751 11.5967 3.89648C11.1981 3.82809 10.8023 3.74768 10.4092 3.65527C10.2545 3.34603 10.0999 3.03678 9.94531 2.72754C9.81721 2.59854 9.66258 2.52432 9.48145 2.50488C9.48145 1.66374 9.48145 0.822592 9.48145 -0.0185547ZM14.2314 7.58887C14.9846 5.88751 15.4237 4.10626 15.5488 2.24512C16.3191 2.20825 17.0922 2.19588 17.8682 2.20801C18.047 4.60383 17.0698 6.32941 14.9365 7.38477C14.706 7.47194 14.471 7.53996 14.2314 7.58887Z"
								fill="#F9BD2C"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M9.48144 2.50488C9.48144 3.87793 9.48144 5.25098 9.48144 6.62402C9.15495 6.76871 8.83336 6.92331 8.5166 7.08789C8.05767 7.1669 7.81026 6.97515 7.77441 6.5127C7.84529 6.15611 7.88856 5.79738 7.90429 5.43652C7.65688 5.18912 7.40951 4.94174 7.1621 4.69434C6.99467 4.33011 7.08744 4.05179 7.44042 3.85938C7.81449 3.80683 8.18558 3.73881 8.55371 3.65527C8.70834 3.34603 8.86294 3.03678 9.01757 2.72754C9.14631 2.59822 9.30094 2.52401 9.48144 2.50488Z"
								fill="#FABE2C"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M9.48145 2.50488C9.66258 2.52432 9.81721 2.59854 9.94531 2.72754C10.0999 3.03678 10.2545 3.34603 10.4092 3.65527C10.8023 3.74768 11.1981 3.82809 11.5967 3.89648C11.9058 4.09751 11.9739 4.36347 11.8008 4.69434C11.5534 4.94174 11.306 5.18912 11.0586 5.43652C11.0622 5.79901 11.1055 6.15774 11.1885 6.5127C11.1457 6.99222 10.8859 7.18397 10.4092 7.08789C10.1094 6.91329 9.80021 6.75866 9.48145 6.62402C9.48145 5.25098 9.48145 3.87793 9.48145 2.50488Z"
								fill="#FE9100"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5.62212 15.9014C6.90225 15.9384 8.18872 15.9508 9.4815 15.9385C9.4815 16.5817 9.4815 17.2249 9.4815 17.8682C8.18267 17.8682 6.88384 17.8682 5.58502 17.8682C5.57277 17.2061 5.58513 16.5505 5.62212 15.9014Z"
								fill="#FE9100"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M13.3408 15.9014C13.3778 16.5505 13.3902 17.2061 13.3779 17.8682C12.0791 17.8682 10.7803 17.8682 9.48145 17.8682C9.48145 17.2249 9.48145 16.5817 9.48145 15.9385C10.7742 15.9508 12.0607 15.9384 13.3408 15.9014Z"
								fill="#FE9100"
							/>
							<path
								opacity="0.996"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M5.5849 17.8682C6.88373 17.8682 8.18256 17.8682 9.48139 17.8682C9.48139 18.2392 9.48139 18.6103 9.48139 18.9814C7.92279 18.9814 6.3642 18.9814 4.8056 18.9814C4.49841 18.8114 4.39328 18.5517 4.49017 18.2021C4.54584 18.0475 4.65097 17.9424 4.8056 17.8867C5.06507 17.8682 5.32484 17.862 5.5849 17.8682Z"
								fill="#FABE2C"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M9.48145 17.8682C10.7803 17.8682 12.0791 17.8682 13.3779 17.8682C13.638 17.862 13.8978 17.8682 14.1572 17.8867C14.4695 18.0481 14.5746 18.3016 14.4727 18.6475C14.41 18.8028 14.3049 18.9141 14.1572 18.9814C12.5986 18.9814 11.04 18.9814 9.48145 18.9814C9.48145 18.6103 9.48145 18.2392 9.48145 17.8682Z"
								fill="#FABE2C"
							/>
						</g>
						<defs>
							<clipPath id="clip0_341_13379">
								<rect width="19" height="19" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>

				<div on:click={chatClose} id="close" class="cursor-pointer opacity-60 hover:opacity-100">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.3335 3.33331L16.6668 16.6666"
							stroke="#595A69"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16.6667 3.33331L3.77783 16.2222"
							stroke="#595A69"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
		</div>
		<div class="relative flex flex-col md:grid md:grid-rows-[1fr,100px] w-full justify-between h-[calc(100%-121px)] md:h-[calc(100%-61px)]">
			<div class="w-full flex items-start justify-start max-h-full overflow-auto scrollbar-hidden">
				<div class="w-full flex flex-col gap-[25px] px-[14px] py-[20px]">
					<!-- Chat Item -->
					<div class="flex items-start gap-[10px]">
						<div class="min-w-[30px] min-h-[30px] rounded-[10px] overflow-hidden">
							<img class="w-full" src="/imgs/friend.svg" alt="friend's Profile Image" />
						</div>
						<div class="flex w-full md:w-auto flex-col gap-[13px]">
							<div class="w-full flex items-center justify-between">
								<div class="flex items-center gap-[5px]">
									<p class="text-msm text-black dark:text-white font-normal">Ellis Schneider</p>
									<img src="/imgs/award1.svg" alt="" />
								</div>
								<p class="text-gray text-msm font-normal">12:03</p>
							</div>
							<p class="text-gray text-msm font-normal">
								Lorem ipsum dolor sit amet consecte Feugiat accum.
							</p>
						</div>
					</div>
					
				</div>
			</div>
			<div class="px-[13px] pt-[29px] pb-[18px]  bg-gradientWhiteLight dark:bg-gradientBlack w-full">
				<form>
					<div class="relative">
						<input
							placeholder="Write a message"
							type="text"
							class="w-full bg-white dark:bg-blueDark rounded-[14px] h-[53px] outline-none border border-grayLight dark:border-white11 px-[18px] placeholder:text-gray text-black dark:text-white text-sm"
						/>
						<button
							class="absolute right-[0px] opacity-60 hover:opacity-100 flex items-center top-[50%] translate-y-[-50%] w-[40px] h-[40px]"
							type="submit"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M16.1269 4.20144C17.9162 3.60499 19.0284 3.88221 19.5702 4.42486C20.1129 4.96839 20.3895 6.08413 19.7979 7.87367L19.7976 7.87444L16.9682 16.3628L16.9681 16.3631C16.5091 17.7424 15.9945 18.7182 15.4857 19.3343C14.975 19.9528 14.5395 20.1324 14.2197 20.1324C13.8999 20.1324 13.4644 19.9528 12.9536 19.3343C12.4449 18.7182 11.9303 17.7424 11.4713 16.3631L11.4712 16.3628L10.7177 14.1022L14.2205 10.5897C14.513 10.2964 14.5123 9.82148 14.219 9.529C13.9257 9.23651 13.4509 9.23718 13.1584 9.53048L9.57837 13.1205C9.56475 13.1341 9.55176 13.1482 9.53941 13.1626L7.63686 12.5284L7.63648 12.5283C6.25694 12.0692 5.2811 11.5552 4.66498 11.0471C4.04637 10.5369 3.86719 10.1024 3.86719 9.78368C3.86719 9.46471 4.04661 9.02942 4.66558 8.5179C5.28188 8.00859 6.25779 7.49278 7.63714 7.03135L7.63761 7.03119L16.1269 4.20144ZM21.2218 8.34541C21.8898 6.3254 21.7614 4.49638 20.6317 3.36499C19.501 2.23264 17.6732 2.10486 15.6525 2.77841L7.16252 5.60841L7.16177 5.60866C5.68637 6.10219 4.52117 6.69132 3.71004 7.36164C2.90152 8.02981 2.36719 8.84889 2.36719 9.78368C2.36719 10.7187 2.90175 11.5373 3.71065 12.2043C4.52195 12.8734 5.68723 13.4605 7.16252 13.9514L7.16289 13.9516L9.32676 14.6729L10.0481 16.8367L10.0481 16.837L10.0482 16.8371C10.5392 18.3126 11.127 19.478 11.797 20.2893C12.465 21.0983 13.2845 21.6324 14.2197 21.6324C15.1549 21.6324 15.9744 21.0983 16.6424 20.2893C17.3124 19.478 17.9002 18.3126 18.3912 16.8371L18.3913 16.8367L21.2212 8.3471L21.2218 8.34541Z"
									fill="url(#paint0_linear_2501_35365)"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_2501_35365"
										x1="6.00534"
										y1="-1.27108"
										x2="21.7625"
										y2="2.26825"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#C6A3FF" />
										<stop offset="1" stop-color="#7E8BED" />
									</linearGradient>
								</defs>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
