<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte/internal';

	export let ids = null; // null|string - id="someID" - #someID
	export let classes = null; // null|string - class="foo bar" - .foo .bar
	export let styles = null; // null|string - style="color:'red';"
	export let value = '';
	export let name;
	export let placeholder = null;
	export let required = false;
	export let error = false;
	export let type;
	export let disabled = false; // boolean - Will disable the button if true
	export let plain = false; // boolean - Override the default styles for the link

	const dispatch = createEventDispatcher();

	function onInput(e) {
		value = e.target.value; // this is important stupid
		dispatch('input', value);
	}

	let element;

	onMount(() => {
		if (ids) element.setAttribute('id', ids);
		if (classes) {
			classes.split(' ').forEach((c) => element.classList.add(c));
		}
		if (styles) element.setAttribute('style', styles);
		if (placeholder) element.setAttribute('placeholder', placeholder);
		if (required) element.setAttribute('required', '');
	});
</script>

<input
	bind:this={element}
	on:input={onInput}
	{type}
	{name}
	{value}
	{placeholder}
	required={required ? 'required' : ''}
	class:!border-red-500={error}
	class:input={!plain}
	{disabled}
/>

<style lang="postcss">
	.input,
	textarea,
	select,
	option {
		@apply inline-block align-middle h-9 border border-neutral-400 rounded-lg text-sm text-neutral-600 indent-1 bg-slate-100 px-2 font-sans font-semibold;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px white inset, 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
		-moz-box-shadow: 0 0 0 30px white inset, 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
		box-shadow: 0 0 0 30px white inset, 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
	}

	input:-internal-autofill-previewed {
		background-color: #fff;
	}
	input:-internal-autofill-selected {
		background-color: #fff;
	}

	input:invalid,
	textarea:invalid,
	select:invalid,
	option:invalid {
		box-shadow: 0 0 0 30px white inset, 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;
	}

	input:focus,
	textarea:focus,
	select:focus,
	option:focus {
		@apply outline-none;
	}
</style>
