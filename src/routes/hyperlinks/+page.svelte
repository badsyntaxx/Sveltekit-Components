<script>
	import Link from '$lib/Link.svelte';

	function alertUser() {
		alert('Function executed');
	}
</script>

<section class="ml-40 mr-80 mt-20 pb-20 border-b border-neutral-300">
	<h1 class="text-3xl mb-9">HYPERLINKS</h1>
	<p class="mb-12">
		A component that consolidates hyperlink design and functionality. No need to hunt down CSS files
		or search for hyperlink related styles in a monolith of CSS. Simple functionality is also made
		easier and more readable. For example, traditionally when you want to open a new tab with a
		hyperlink you would type <code class="bg-gray-300 px-2 py-1 rounded text-xs"
			>target="_blank"</code
		>. Using this component you could instead provide the shorter
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">newTab</code> property.
	</p>
	<div class="flexbox justify-start items-center space-x-6">
		<Link href="/hyperlinks">Default</Link>
		<Link href="/hyperlinks" disabled>Disabled</Link>
		<Link href="/hyperlinks" on:click={alertUser}>Executes Func</Link>
		<Link href="/hyperlinks" class="buttonStyle">Styled with classes</Link>
		<Link href="/hyperlinks" style="color: red;">Styled by attribute</Link>
		<Link href="/hyperlinks" unstyled>Unstyled</Link>
	</div>
</section>
<!-- DEFAULT STYLED HYPERLINK -->
<section id="styled" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14">
	<div class="flexbox flex-wrap justify-between items-center">
		<div>
			<Link route="/hyperlinks/default">Default link</Link>
			<code class="ml-5"><strong>route</strong>|string</code>
		</div>
		<Link route="/hyperlinks/default" classes="text-xs">LEARN MORE</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link</span> <span class="codeblue"
				>href</span
			><span>=</span><span class="codeorange">"/hyperlinks"</span><span class="codegray"
				>&rsaquo;</span
			><span>Default</span><span class="codegray">&lsaquo;</span><span class="codegray">/</span
			><span class="codeteal">Link</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
<!-- UNSTYLED HYPERLINK -->
<section id="unstyled" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/unstyled" plain>Unstyled</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>plain</strong>|boolean</code>
		</div>
		<Link route="/hyperlinks/unstyled" classes="text-xs">LEARN MORE</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>class</span
			>=<span class="codeorange">"buttonStyle"</span><span class="codegray">&rsaquo;</span><span
				>Styled with class</span
			><span class="codegray">&lsaquo;</span><span class="codegray">/</span><span class="codeteal"
				>Link</span
			><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
<!-- HYPERLINK CLASSES -->
<section id="styled-by-classes" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/classes" classes="buttonStyle">Styled by classes</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>classes</strong>|null|string</code>
		</div>
		<Link route="/hyperlinks/classes" classes="text-xs">LEARN MORE</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>style</span
			>=<span class="codeorange">"color: red;"</span><span class="codegray">&rsaquo;</span><span
				>Styled with attribute</span
			><span class="codegray">&lsaquo;</span><span class="codegray">/</span><span class="codeteal"
				>Link</span
			><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
<!-- HYPERLINK STYLE ATTRIBUTE -->
<section id="styled-by-attr" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Link route="/hyperlinks/style-attribute" style="color:red;">Styled by attribute</Link>
			<code class="ml-5"><strong>route</strong>|string, <strong>style</strong>|null|string</code>
		</div>
		<Link route="/hyperlinks/style-attribute" classes="text-xs">LEARN MORE</Link>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>disabled</span
			><span class="codegray">&rsaquo;</span><span>Disabled</span><span class="codegray"
				>&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Link</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>

<section id="opens-tab" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-start items-center space-x-5">
		<Link route="/hyperlinks" newTab>Opens new tab</Link>
		<code><strong>route</strong>|string, <strong>newTab</strong>|boolean</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>unstyled</span
			><span class="codegray">&rsaquo;</span><span>Unstyled</span><span class="codegray"
				>&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Link</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>

<section id="styled-by-id" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14">
	<div class="flexbox justify-start items-center space-x-5">
		<Link route="/hyperlinks" id="buttonStyle">Styled by id</Link>
		<code><strong>route</strong>|string, <strong>id</strong>|null|string</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>unstyled</span
			> <span class="codeblue">class</span>=<span class="codeorange">"specialButton"</span> <span
				class="codeblue">href</span
			>=<span class="codeorange">"/hyperlinks"</span> <span class="codeblue">newTab</span><span
				class="codegray">&rsaquo;</span
			><span>Click here</span><span class="codegray">&lsaquo;</span><span class="codegray">/</span
			><span class="codeteal">Link</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<section id="has-icon" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14 mb-96">
	<div class="flexbox justify-start items-center space-x-5">
		<Link route="/hyperlinks"><i class="fa-solid fa-face-smile" /> Icon</Link>
		<code><strong>route</strong>|string</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Link </span><span class="codeblue"
				>href</span
			><span class="codewhite">=</span><span class="codeorange">"/buttons"</span><span
				class="codegray">&rsaquo;</span
			><span class="codewhite"
				><span class="codegray">&lsaquo;</span><span class="codedarkblue">i </span><span
					class="codeblue">class</span
				><span class="codewhite">=</span><span class="codeorange">"fa-solid fa-face-smile"</span
				><span class="codegray"> /</span><span class="codegray">&rsaquo;</span> Inner HTML</span
			><span class="codegray">&lsaquo;</span><span class="codegray">/</span><span class="codeteal"
				>Link</span
			><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
