<script>
	import { createEventDispatcher } from 'svelte';
	import ModalLayout from '../modalLayout.svelte';
	const dispathEvent = createEventDispatcher();
    
    export let step;

	function closeProfileModal() {
		dispathEvent('closeProfileModal');
	}

    function stepBack() {
        dispathEvent('stepBack')
    }
</script>

<ModalLayout on:stepBack={stepBack} step={step} on:closeProfileModal={closeProfileModal} title="Edit Profile">
	<div class="w-full flex flex-col items-center gap-[10px] my-[30px]">
		<div class="relative flex justify-center w-full h-[200px] rounded-[14px] bg-linear4">
			
            <div class="mt-[20px] flex items-center justify-center w-[154px] h-[154px] rounded-full bg-linear3">
                <div class="w-[138px] h-[138px] rounded-full">
                    <img src="/imgs/profile.svg" class="w-full h-full object-cover" alt="profile">
                </div>
            </div>
		</div>
	</div>

	<div class="relative z-[9] w-full flex flex-col gap-[16px]">
        <p class="text-base font-normal text-black dark:text-white">Default Images</p>
		<div class="flex items-center flex-wrap gap-[15px]">
            <label class="cursor-pointer">
                <input checked type="radio" name="defaultImage" class="peer sr-only">
                <div class="w-[78px] h-[78px] border-[2px] rounded-full border-transparent peer-checked:border-blue flex items-center justify-center transitin-al">
                    <div class="w-[69px] h-[69px] rounded-full">
                        <img class="w-[69px]" src="/imgs/profile.svg" alt="profile">
                    </div>
                </div>
            </label>
            <label class="cursor-pointer">
                <input type="radio" name="defaultImage" class="peer sr-only">
                <div class="w-[78px] h-[78px] border-[2px] rounded-full border-transparent peer-checked:border-blue flex items-center justify-center transitin-al">
                    <div class="w-[69px] h-[69px] rounded-full">
                        <img class="w-[69px]" src="/imgs/profile2.svg" alt="profile">
                    </div>
                </div>
            </label>
            <label class="cursor-pointer">
                <input type="radio" name="defaultImage" class="peer sr-only">
                <div class="w-[78px] h-[78px] border-[2px] rounded-full border-transparent peer-checked:border-blue flex items-center justify-center transitin-al">
                    <div class="w-[69px] h-[69px] rounded-full">
                        <img class="w-[69px]" src="/imgs/profile3.svg" alt="profile">
                    </div>
                </div>
            </label>
            <label class="cursor-pointer">
                <input type="radio" name="defaultImage" class="sr-only peer">
                <div class="w-[78px] h-[78px] border-[2px] rounded-full border-transparent peer-checked:border-blue flex items-center justify-center transitin-al">
                    <div class="w-[69px] h-[69px] rounded-full">
                        <img class="w-[69px]" src="/imgs/profile4.svg" alt="profile">
                    </div>
                </div>
            </label>
        </div>
	</div>

    <div class="relative z-[99] w-full flex flex-col gap-[15px] mt-[24px]">
		<p class="text-base text-black dark:text-white font-normal">Edit Nickname</p>
		<div
			class="w-full grid items-center bg-grayLight4 dark:bg-white5 rounded-[7px] focus:bg-red"
		>
			<input
				type="text"
				class="w-full h-full bg-transparent py-[17px] outline-none text-black dark:text-white pl-[20px]"
			/>
		</div>
	</div>

    <button class="relative z-[99] w-full py-[14px] bg-linear rounded-[7px] mt-[30px] text-white font-medium opacity-80 hover:opacity-100 transition-all">Save</button>
</ModalLayout>
