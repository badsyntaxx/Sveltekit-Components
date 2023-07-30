<script>
	import Link from '$lib/Link.svelte';
</script>

<section class="mt-20 pb-5 border-b border-neutral-300">
	<h1 class="text-3xl mb-9">HYPERLINK CLASSES</h1>
	<p class="mb-5">
		You can apply classes to a Link component with the <code
			class="bg-gray-300 px-2 py-1 rounded text-xs">classes</code
		>
		property. The class styles will override the default styles of the link if the classes are written
		in the root CSS file.
	</p>
	<p class="mb-5">
		The word "class" is protected in javascript, so this property is instead called classes, but is
		just the equivalent to the HTML <code class="bg-gray-300 px-2 py-1 rounded text-xs"
			>class=""</code
		>
		attribute. This does have a caveat. Custom classes like
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">buttonStyle</code> must be defined in a root
		CSS file, like app.css in this project. If you use a CSS library like Tailwind or Bootstrap, then
		this will be less of an issue for you.
	</p>
</section>

<section id="styled-by-classes" class="mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/styled-by-classes" classes="buttonStyle">Styled by classes</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>classes</strong>|null|string</code>
		</div>
		<Link route="/hyperlinks" classes="text-xs">back to hyperlinks</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks" </span><span
				class="codeblue">classes</span
			><span class="codewhite">=</span><span class="codeorange">"buttonStyle"</span><span
				class="codegray">&rsaquo;</span
			><span class="codewhite">Styled by classes</span><span class="codegray">&lsaquo;</span><span
				class="codegray">/</span
			><span class="codeteal">Link</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<section id="styled-by-classes" class="mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link
				route="/hyperlinks/styled-by-classes"
				classes="bg-sky-500 !text-white px-3 py-2 rounded-lg">Styled by Tailwind</Link
			>
			<code class="ml-5"><strong>route</strong>|string, <strong>classes</strong>|null|string</code>
		</div>
		<Link route="/hyperlinks" classes="text-xs">back to hyperlinks</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>route</span
			><span class="codewhite">=</span><span class="codeorange">"/hyperlinks" </span><span
				class="codeblue">classes</span
			><span class="codewhite">=</span><span class="codeorange"
				>"bg-sky-500 !text-white px-3 py-2 rounded-lg"</span
			><span class="codegray">&rsaquo;</span><span class="codewhite">Styled by classes</span><span
				class="codegray">&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Link</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>
