<script>
	import '$src/app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />
<div id="app" class="flexbox justify-center items-start text-neutral-600">
	<nav class="w-80 border-r border-neutral-500 pl-32 space-y-2">
		<a href="/hyperlinks">HYPERLINKS</a>
		<a href="/buttons">BUTTONS</a>
		<a href="/forms">FORMS</a>
		<a href="/tables">TABLES</a>
	</nav>
	<main class="box min-h-screen font-normal text-neutral-700 pl-[6%] pr-[14%]">
		<slot />
	</main>
</div>
<Footer />

<style>
	nav a,
	nav a:visited {
		@apply block w-full;
	}
</style>
