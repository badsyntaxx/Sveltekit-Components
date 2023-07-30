<script>
	export let newTab = false; // boolean - Open link in new tab
	export let unstyled = false; // boolean - Override the default styles for the link
	export let href = null;

	let linkProps = {};
	let classes = $$restProps.class;

	for (const prop in $$restProps) {
		if (prop && prop != 'class') {
			linkProps[prop] = $$restProps[prop];
		}
	}

	let target = '_self';
	$: if (newTab) {
		target = '_blank';
	} else {
		target = '_self';
	}
</script>

{#if newTab}
	<a {href} class:link={!unstyled} class={classes} {...linkProps} {target}>
		<slot />
	</a>
{:else}
	<a {href} class:link={!unstyled} class={classes} {...linkProps}>
		<slot />
	</a>
{/if}

<style>
	a.link,
	a.link:visited {
		text-decoration: underline;
		color: rgb(14 165 233);
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}

	a.link:hover {
		color: rgb(3 105 161);
	}
</style>
