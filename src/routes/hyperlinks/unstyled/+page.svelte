<script>
	import Link from '$lib/Link.svelte';
</script>

<section class="mt-20 pb-5 border-b border-neutral-300">
	<h1 class="text-3xl mb-9">UNSTYLED HYPERLINK</h1>
	<p class="mb-5">
		The unstlyled hyperlink component works like a typical hyperlink <code
			class="bg-gray-300 px-2 py-1 rounded text-xs"
			><span>&lsaquo;</span>a href="/route"<span>&rsaquo;</span>Go Here<span>&lsaquo;</span>/a<span
			/><span>&rsaquo;</span></code
		> and ignores all default stylings.
	</p>
	<p class="mb-12">
		The <code class="bg-gray-300 px-2 py-1 rounded text-xs">plain</code> property is useful if you
		need a hyperlink that looks like plain text. The
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">plain</code>
		property is also good if you wanted to have a uniquely designed link, and dont want to content with
		default styles at all. You could first use the
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">plain</code>
		prop to strip the link down and then the
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">classes</code> prop to add new css classes to
		the link to style it anew.
	</p>
</section>

<section id="unstyled" class="mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/unstyled" plain>Unstyled</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>plain</strong>|boolean</code>
		</div>
		<Link route="/hyperlinks" classes="text-xs">back to hyperlinks</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks" </span><span
				class="codeblue">plain</span
			><span class="codegray">&rsaquo;</span><span class="codewhite">Unstyled</span><span
				class="codegray">&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Link</span><span class="codegray"
				>&rsaquo;</span
			>
OR	
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks" </span><span
				class="codeblue">plain</span
			>=<span class="codeyellow">{'{'}</span><span class="codedarkblue">true</span><span
				class="codeyellow">{'}'}</span
			><span class="codegray">&rsaquo;</span><span class="codewhite">Unstyled</span><span
				class="codegray">&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Link</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>

<style>
	section {
		scroll-margin-top: 90px;
	}
</style>
