<script>
	import { ucfirst } from '$utils/helpers';
	import { createEventDispatcher } from 'svelte/internal';

	// Create dispatcher
	const dispatch = createEventDispatcher();

	// Expected props
	export let label = undefined;
	export let labelIcon = '';
	export let type;
	export let name = '';
	export let required = false;
	export let value = '';
	export let callback = () => {};

	// If user didn't make label just use the name as label
	if (label == undefined) label = ucfirst(name);

	// set stuff idk
	let labelToggle;
	let inputElement;

	const shrinkLabel = () => (labelToggle = true);

	function unshrinkLabel() {
		if (value == undefined || value == '') {
			labelToggle = false;
			inputElement.blur();
		}
	}

	function onInput(e) {
		value = e.target.value;
		callback();
		dispatch('input', value);
	}
</script>

<label on:click={inputElement.focus()} on:keypress={inputElement.focus()} for={name} class={labelToggle ? 'shrink' : ''}
	>{@html labelIcon}{label}</label
>
<input
	bind:this={inputElement}
	{value}
	on:input={onInput}
	on:focus={() => shrinkLabel(name)}
	on:blur={() => unshrinkLabel(name)}
	{type}
	{name}
	class="box"
	required={required ? 'required' : ''}
/>

<style>
	label {
		position: absolute;
		left: 1rem;
		z-index: 50;
		font-size: 12px;
		font-weight: 400;
		line-height: 3rem;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
		transition-timing-function: linear;
	}

	label:hover {
		cursor: text;
	}

	input {
		height: 3rem /* 48px */;
		padding-top: 1.2rem /* 16px */;
		padding-left: 0.5rem /* 8px */;
		border: 1px solid #ccc;
	}

	.shrink {
		transform: translate(-2px, -8px) rotate(0) skewX(0) skewY(0) scaleX(0.75) scaleY(0.75);
		transform-origin: left;
	}
</style>
