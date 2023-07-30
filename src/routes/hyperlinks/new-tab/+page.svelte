<script>
	import Link from '$lib/Link.svelte';
</script>

<section class="mt-20 pb-5 border-b border-neutral-300">
	<h1 class="text-3xl mb-9">HYPERLINK OPENS NEW TAB</h1>
	<p class="mb-5">This hyperlink opens a new tab.</p>
	<p class="mb-12">
		The newTab property works just like <code class="bg-gray-300 px-2 py-1 rounded text-xs"
			>target="_blank"</code
		> to open a new tab when the link is clicked.
	</p>
</section>

<section id="opens-tab" class="mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/new-tab" newTab>Opens new tab</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>newTab</strong>|boolean</code>
		</div>
		<Link route="/hyperlinks" classes="text-xs">back to hyperlinks</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks" </span><span
				class="codeblue">newTab</span
			><span class="codegray">&rsaquo;</span><span class="codewhite">Opens new tab</span><span
				class="codegray">&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Link</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>
