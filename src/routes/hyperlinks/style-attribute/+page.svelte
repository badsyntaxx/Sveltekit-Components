<script>
	import Link from '$lib/Link.svelte';
</script>

<section class="mt-20 pb-5 border-b border-neutral-300">
	<h1 class="text-3xl mb-9">HYPERLINK CLASSES</h1>
	<p class="mb-5">
		You can use the <code class="bg-gray-300 px-2 py-1 rounded text-xs">style</code>
		property to apply styles to a hyperlink that override the default styles.
	</p>
	<p class="mb-5">
		This is just the equivalent to the HTML <code class="bg-gray-300 px-2 py-1 rounded text-xs"
			>style=""</code
		>
		attribute.
	</p>
</section>

<section id="styled-by-attr" class="mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/style-attribute" style="color:red;">Styled by attribute</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>style</strong>|null|string</code>
		</div>
		<Link route="/hyperlinks" classes="text-xs">back to hyperlinks</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks" </span><span
				class="codeblue">style</span
			><span class="codewhite">=</span><span class="codeorange">"color:red;"</span><span
				class="codegray">&rsaquo;</span
			><span class="codewhite">Styled by attribute</span><span class="codegray">&lsaquo;</span><span
				class="codegray">/</span
			><span class="codeteal">Link</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
