<script>
	import { writable } from 'svelte/store';
	import Select from 'svelte-select';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let items; // select array
	export let selectedIndex;
	let selectedValue;
	if (selectedIndex) {
		selectedValue = writable(items[selectedIndex].value);
	} else {
		selectedValue = writable(items[0].value);
	}

	function handleChange(item) {
		selectedValue.set(item);
		const selectElement = document.querySelectorAll('.svelte-select input');
		if (selectElement) {
			selectElement.forEach((select) => {
				select.blur();
			});
		}
		dispatch('handleChange', item.label);
	}
</script>

<Select
	class="svelte-cr relative z-[99] max !max-w-full !rounded-[7px] !w-full !gap-[17px] !bg-grayLight4 dark:!bg-white5 !backdrop-blur-[8px] !border !border-transparent !py-[6px]"
	{items}
	clearable={false}
	showChevron
	searchable={false}
	bind:value={$selectedValue}
>
	<div slot="selection" let:selection>
		<div class="flex items-center gap-[12px]">
			{#if selection.image}
				<div class="w-[30px] h-[30px]">
					<img src={selection.image} alt={selection.label} />
				</div>
			{/if}
			<p class="text-sm text-black dark:text-white font-medium">{selection.label}</p>
		</div>
	</div>
	<div slot="chevron-icon">
		<svg class="w-[20px] h-[20px]">
			<use
				class="fill-black dark:fill-white"
				href="/imgs/icons/icons.svg#chevron-down"
			/>
		</svg>
	</div>
	<div slot="list" let:filteredItems class="bg-grayLight4 dark:bg-blackLight">
		{#each filteredItems as items}
			<div
				class={`${
					$selectedValue.label === items.label ? 'bg-blue select-selected !opacity-100' : ''
				} cursor-pointer flex items-center gap-[6px] px-[15px] py-[12px]  hover:bg-blue hover:opacity-80`}
				on:click={handleChange(items)}
			>
				{#if items.image}
					<div class="w-[30px] h-[30px]">
						<img src={items.image} alt={items.label} />
					</div>
				{/if}
				<p class="text-sm text-black dark:text-white font-medium">{items.label}</p>
			</div>
		{/each}
	</div>
</Select>

<style>
	:global(.svelte-cr .prepend) {
		position: absolute;
	}
	:global(.svelte-cr.focused) {
		border-color: theme('colors.blue') !important;
		z-index: 999 !important;
	}
	:global(.svelte-cr .svelte-select-list) {
		border: none;
		background: transparent !important;
	}
</style>
