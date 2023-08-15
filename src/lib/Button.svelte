<script>
	import { createEventDispatcher } from 'svelte';

	export let newTab = false; // boolean - Open link in new tab
	export let btnLoading = false; // boolean - Will set the button to spin when loading if true
	export let btnSuccess = false; // boolean - Will replace the button text with checkmark if true / relies on fontawesome
	export let unstyled = false; // boolean - Override the default styles for the link
	export let href = null;
	export let size = 'base';
	export let color = 'teal';

	let buttonProps = {};
	$: classes = $$restProps.class;
	let buttonElement;

	buttonProps.type = 'button';

	for (const prop in $$restProps) {
		if (prop && prop != 'class') {
			buttonProps[prop] = $$restProps[prop];
		}
	}

	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('click', {
			buttonElement
		});
	}

	let target = '_self';
	$: if (newTab) {
		target = '_blank';
	} else {
		target = '_self';
	}
</script>

{#if href}
	{#if newTab}
		<a
			{href}
			on:click={handleClick}
			bind:this={buttonElement}
			class:btn={!unstyled}
			class:btn-loading={btnLoading}
			class:btn-success={btnSuccess}
			class:btn-xl={size == 'xl' && !unstyled}
			class:btn-lg={size == 'lg' && !unstyled}
			class:btn-base={size == 'base' && !unstyled}
			class:btn-sm={size == 'sm' && !unstyled}
			class:btn-xs={size == 'xs' && !unstyled}
			class:btn-teal={color == 'teal' && !unstyled}
			class:btn-black={color == 'black' && !unstyled}
			class={classes}
			{...buttonProps}
			{target}
		>
			{#if !btnLoading}
				{#if btnSuccess}
					<i class="fas fa-check fa-fw" />
				{:else}
					<slot />
				{/if}
			{/if}
		</a>
	{:else}
		<a
			{href}
			on:click={handleClick}
			bind:this={buttonElement}
			class:btn={!unstyled}
			class:btn-loading={btnLoading}
			class:btn-success={btnSuccess}
			class:btn-xl={size == 'xl' && !unstyled}
			class:btn-lg={size == 'lg' && !unstyled}
			class:btn-base={size == 'base' && !unstyled}
			class:btn-sm={size == 'sm' && !unstyled}
			class:btn-xs={size == 'xs' && !unstyled}
			class:btn-teal={color == 'teal' && !unstyled}
			class:btn-black={color == 'black' && !unstyled}
			class={classes}
			{...buttonProps}
		>
			{#if !btnLoading}
				{#if btnSuccess}
					<i class="fas fa-check fa-fw" />
				{:else}
					<slot />
				{/if}
			{/if}
		</a>
	{/if}
{:else if buttonProps.type == 'button'}
	<button
		on:click|preventDefault={handleClick}
		bind:this={buttonElement}
		class:btn={!unstyled}
		class:btn-loading={btnLoading}
		class:btn-success={btnSuccess}
		class:btn-xl={size == 'xl' && !unstyled}
		class:btn-lg={size == 'lg' && !unstyled}
		class:btn-base={size == 'base' && !unstyled}
		class:btn-sm={size == 'sm' && !unstyled}
		class:btn-xs={size == 'xs' && !unstyled}
		class:btn-teal={color == 'teal' && !unstyled}
		class:btn-black={color == 'black' && !unstyled}
		class={classes}
		{...buttonProps}
	>
		{#if !btnLoading}
			{#if btnSuccess}
				<i class="fas fa-check fa-fw" />
			{:else}
				<slot />
			{/if}
		{/if}
	</button>
{:else}
	<button
		on:click={handleClick}
		bind:this={buttonElement}
		class:btn={!unstyled}
		class:btn-loading={btnLoading}
		class:btn-success={btnSuccess}
		class:btn-xl={size == 'xl' && !unstyled}
		class:btn-lg={size == 'lg' && !unstyled}
		class:btn-base={size == 'base' && !unstyled}
		class:btn-sm={size == 'sm' && !unstyled}
		class:btn-xs={size == 'xs' && !unstyled}
		class:btn-teal={color == 'teal' && !unstyled}
		class:btn-black={color == 'black' && !unstyled}
		class={classes}
		{...buttonProps}
	>
		{#if !btnLoading}
			{#if btnSuccess}
				<i class="fas fa-check fa-fw" />
			{:else}
				<slot />
			{/if}
		{/if}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 2.5rem /* 40px */;
		padding: 0 0.75rem /* 12px */;
		border-radius: 4px;
		border-color: transparent;
		white-space: nowrap;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
		-webkit-appearance: none;
		appearance: none;
		background-color: transparent;
		background-image: none;
		background-color: #0ea5e9;
		color: #ffffff;
	}

	.btn-xl {
		height: 3.5rem !important;
		padding-left: 2rem !important;
		padding-right: 2rem !important;
		font-size: 1.25rem !important;
		line-height: 1.75rem !important;
	}

	.btn-lg {
		height: 2.75rem !important;
		padding-left: 1.5rem !important;
		padding-right: 1.5rem !important;
		font-size: 1rem !important;
		line-height: 1.5rem !important;
	}

	.btn-base {
		height: 2.25rem !important;
		padding-left: 1.25rem !important;
		padding-right: 1.25rem !important;
		font-size: 1rem !important;
		line-height: 1.5rem !important;
	}

	.btn-sm {
		height: 1.5rem !important;
		padding-left: 0.75rem !important;
		padding-right: 0.75rem !important;
		font-size: 0.75rem !important;
		line-height: 1rem !important;
	}

	.btn-xs {
		height: 1rem !important;
		padding-left: 0.5rem !important;
		padding-right: 0.5rem !important;
		font-size: 10px !important;
	}

	.btn-loading {
		animation: spinButton 0.5s linear infinite alternate;
		background-color: #16813e;
		border-radius: 100%;
		width: 32px;
		height: 32px;
		padding: 0;
		float: none;
	}

	.btn-loading:hover {
		background-color: #16813e;
	}

	.btn-loading i,
	.btn-success i {
		float: left;
		width: 32px;
		text-align: center;
	}

	.btn-success {
		background-color: #22c55e;
		color: #fff;
		border-radius: 100%;
		width: 32px;
		height: 32px;
		padding: 0;
		float: none;
	}

	.btn-success:hover {
		background-color: #22c55e;
	}

	.btn-blue {
		background-color: rgb(14 165 233);
		color: #fff;
	}

	.btn-black {
		background-color: #000;
		color: #fff;
	}

	.btn-teal {
		background-color: rgb(20 184 166);
		color: #fff;
	}

	@keyframes spinButton {
		from {
			transform: rotateY(180deg);
		}

		to {
			transform: rotateY(0deg);
		}
	}
</style>
