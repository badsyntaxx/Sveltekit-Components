<script>
	import Link from '$lib/Link.svelte';
</script>

<section class="mt-20 pb-5 border-b border-neutral-300">
	<h1 class="text-3xl mb-9">DEFAULT HYPERLINK</h1>
	<p class="mb-5">
		The default hyperlink component works like a typical hyperlink <code
			class="bg-gray-300 px-2 py-1 rounded text-xs"
			><span>&lsaquo;</span>a href="/route"<span>&rsaquo;</span>Go Here<span>&lsaquo;</span>/a<span
			/><span>&rsaquo;</span></code
		>.
	</p>
	<p class="mb-12">
		You can breakout of the default styles in several different ways. A couple examples are using
		the <Link route="/hyperlinks/style">style property</Link> which is basically the
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">style=""</code> attribute. Or, using the <Link
			route="/hyperlinks/classes">classes property</Link
		> which is basically the <code class="bg-gray-300 px-2 py-1 rounded text-xs">class=""</code>
		attribute. You can also add new behavior to a link. An example of this would be the <Link
			route="/hyperlinks/newTab">newTab</Link
		> property.
	</p>
</section>

<section id="styled" class="mt-5 rounded pt-9 pb-14">
	<div class="flexbox flex-wrap justify-between items-center">
		<div>
			<Link route="/hyperlinks/styled">Default link</Link>
			<code class="ml-5"><strong>route</strong>|string</code>
		</div>
		<Link route="/hyperlinks" classes="text-xs">back to hyperlinks</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks"</span><span
				class="codegray">&rsaquo;</span
			><span class="codewhite">Default link</span><span class="codegray">&lsaquo;</span><span
				class="codegray">/</span
			><span class="codeteal">Link</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
