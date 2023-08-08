<script>
	import toast from '../../../lib/components/toast/toast';
	import globalStore from '../../../store/globalStore';
	import { forgotPasswordEmail, forgotPasswordChange } from '../../../apis/account';
	
	let forgotUserData = {
    email: "",
    authCode: "",
    password: "",
  };

	$: forgotPasswordOpen = $globalStore.forgotPasswordOpen;

	async function handleForgotPassword(event) {
    event.preventDefault();
    if (forgotPasswordOpen == 1) {
      document.getElementById('submit_forgot').disabled = true
      const res = await forgotPasswordEmail({
        email: forgotUserData.email,
      });
      document.getElementById('submit_forgot').disabled = false
      if (res.success) {
        toast.success("Sent a verification code to your email.");
        globalStore.toggleItem("forgotPasswordOpen", 2);
      } else {
        toast.error(res.data.message);
      }
    } else if (forgotPasswordOpen == 2) {
      const res = await forgotPasswordChange({
        email: forgotUserData.email,
        authCode: forgotUserData.authCode,
        password: forgotUserData.password,
      });
      if (res.success) {
        toast.success(res.data.message);
        globalStore.toggleItem("forgotPasswordOpen", 3);
      } else toast.error(res.data.message);
    }
		else {
			globalStore.toggleItem('forgotPasswordOpen', 0)
		}
  }
</script>

<h5 class="text-2xl font-medium text-white">Forgot password</h5>
<p class="mb-[25px] text-sm text-grayDark3 mt-[15px]">
	Enter your email address to reset your password
</p>
<form class="w-full" on:submit={handleForgotPassword}>
	<div class="flex flex-col w-full gap-[15px]">
		{#if forgotPasswordOpen == 1}
		<div class="flex flex-col gap-[9px]">
			<label class="text-msm text-white font-medium" for="email">Email address</label>
			<div class="w-full flex">
				<input
					type="email"
					id="email"
					class="w-full rounded-[7px] bg-white3 border-2 border-white16 focus:border-white32 !outline-none focus:outline-white p-[11px] text-sm text-white"
					bind:value={forgotUserData.email}
					required
				/>
			</div>
		</div>
		{:else if forgotPasswordOpen == 2} 
		<div class="flex flex-col gap-[9px]">
			<label class="text-msm text-white font-medium" for="authCode">5 Verification Code</label>
			<div class="w-full flex">
				<input
					type="authCode"
					id="authCode"
					class="w-full rounded-[7px] bg-white3 border-2 border-white16 focus:border-white32 !outline-none focus:outline-white p-[11px] text-sm text-white"
					bind:value={forgotUserData.authCode}
					required
				/>
			</div>
		</div>
		<div class="flex flex-col gap-[9px]">
			<label class="text-msm text-white font-medium" for="password">Password</label>
			<div class="w-full flex">
				<input
					type="password"
					id="password"
					class="w-full rounded-[7px] bg-white3 border-2 border-white16 focus:border-white32 !outline-none focus:outline-white p-[11px] text-sm text-white"
					bind:value={forgotUserData.password}
					required
				/>
			</div>
		</div>
		{:else if forgotPasswordOpen == 3 }
		<div class="flex items-center justify-between mt-[15px] gap-[4px]">
			<p class="text-msm text-grayDark3 font-medium">
				Successfully Changed! <a href="/" on:click={ () => {
					globalStore.toggleItem('loginOpen', true)
					globalStore.toggleItem('forgotPasswordOpen', 0)
				}} class="gradient-text font-bold"
					>Sign In</a>
			</p>
		</div>
		{/if}
		<button
			type="submit"
			id="submit_forgot"
			class="w-full bg-linear p-[13px] rounded-[7px] text-sm font-semibold text-white opacity-90 hover:opacity-100 transition-all"
		>
			{forgotPasswordOpen == 1
			? "Send"
			: forgotPasswordOpen == 2
			? "Verify"
			: "Submit"}
		</button>
	</div>
	
	
</form>
