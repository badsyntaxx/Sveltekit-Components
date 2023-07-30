<script>
	import Button from '$lib/Button.svelte';

	function alertUser() {
		alert('Function executed');
	}
</script>

<section class="ml-40 mr-80 mt-20 pb-20 border-b border-neutral-300">
	<h1 class="text-2xl mb-9">BUTTONS</h1>
	<p class="mb-12 text-lg">
		A simple sveltekit component that consolidates button design and functionality. No need to hunt
		down CSS files or search for button related styles in a monolith of CSS. Simple functionality is
		also made slightly easier. For example, traditionally when you want to open a new tab with a
		button you would type <code class="bg-gray-300 px-2 py-1 rounded text-xs">target="_blank"</code
		>. Using this component you could instead provide the shorter
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">newTab</code> property.
	</p>
	<div class="flexbox justify-start items-center space-x-6">
		<div>
			<Button>Default Type = Button</Button>
		</div>
		<form action="/buttons">
			<Button type="submit">Type = Submit</Button>
		</form>
		<div>
			<Button disabled>Disabled</Button>
		</div>
		<div class="text-center">
			<span>btnLoading = true</span><br />
			<Button btnLoading />
		</div>
		<div class="text-center">
			<span>btnSuccess = true</span><br />
			<Button btnSuccess />
		</div>
		<div>
			<Button on:click={alertUser}>Executes Func</Button>
		</div>
	</div>
	<div class="flexbox justify-start items-center space-x-5 mt-9">
		<Button class="buttonStyle">Styled with classes</Button>
		<Button style="border-radius: 9999px;">Styled by attribute</Button>
		<Button unstyled>Unstyled</Button>
		<Button href={'/home'}>Hyperlink Button</Button>
	</div>
</section>

<!-- BUTTON -->
<section class="ml-40 mr-80 mt-20 pb-20">
	<p class="box mb-9">
		This is the basic button. It's the same as <code class="bg-gray-300 px-2 py-1 rounded text-xs"
			>&lsaquo;button type="button"&rsaquo;Click here&lsaquo;/button&rsaquo;</code
		>
	</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button>Default Type = Button</Button>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button</span><span class="codegray"
				>&rsaquo;</span
			><span>Default Type = Button</span><span class="codegray">&lsaquo;</span><span
				class="codegray">/</span
			><span class="codeteal">Button</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- SUBMIT -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">
		I think this is obvious. Same as <code class="bg-gray-300 px-2 py-1 rounded text-xs"
			>&lsaquo;button type="submit"&rsaquo;Click here&lsaquo;/button&rsaquo;</code
		>
	</p>
	<div class="flexbox justify-start items-center space-x-5">
		<form action="/buttons">
			<Button type="submit">Type = Submit</Button>
		</form>
		<code><strong>type</strong>|string</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codedarkblue">form </span><span class="codeblue"
				>action</span
			><span>=</span><span class="codeorange">"/buttons"</span><span class="codegray">&rsaquo;</span
			><br />     <span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span
				class="codeblue">type</span
			><span>=</span><span class="codeorange">"submit"</span><span class="codegray">&rsaquo;</span
			><span>No Default styles</span><span class="codegray">&lsaquo;</span><span class="codegray"
				>/</span
			><span class="codeteal">Button</span><span class="codegray">&rsaquo;</span><br /><span
				class="codegray">&lsaquo;</span
			><span class="codegray">/</span><span class="codedarkblue">form</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>

<!-- HREF -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">
		Buttons can also be hyperlinks. This is a true hyperlink styled like a button, it's the same as <code
			class="bg-gray-300 px-2 py-1 rounded text-xs"
			>&lsaquo;a href="/buttons"&rsaquo;Click here&lsaquo;/a&rsaquo;</code
		>
	</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button href="/buttons">Hyperlink button</Button>
		<code><strong>href</strong>|string</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>href</span
			>=<span class="codeorange">"/buttons"</span><span class="codegray">&rsaquo;</span><span
				>Hyperlink buttons</span
			><span class="codegray">&lsaquo;</span><span class="codegray">/</span><span class="codeteal"
				>Button</span
			><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- CLASS -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">The class property works just like html's class attribute.</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button class="buttonStyle">Styled with classes</Button>
		<code><strong>class</strong>|string</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>class</span
			>=<span class="codeorange">"buttonStyle"</span><span class="codegray">&rsaquo;</span><span
				>Styled with class</span
			><span class="codegray">&lsaquo;</span><span class="codegray">/</span><span class="codeteal"
				>Button</span
			><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- STYLE -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">So does the style attribute.</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button style="border-radius: 9999px;">Styled by attribute</Button>
		<code><strong>style</strong>|string</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>style</span
			>=<span class="codeorange">"border-radius: 9999px;"</span><span class="codegray"
				>&rsaquo;</span
			><span>Styled with attribute</span><span class="codegray">&lsaquo;</span><span
				class="codegray">/</span
			><span class="codeteal">Button</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- DISABLED -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">and the disabled attribute.</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button disabled>Disabled</Button>
		<code><strong>disabled</strong>|boolean</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>disabled</span
			><span class="codegray">&rsaquo;</span><span>Disabled</span><span class="codegray"
				>&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Button</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>

<!-- LOADING STATE -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">
		There is also some fancy stuff. Like the btnLoading prop, which puts the button in a loading
		state.
	</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button btnLoading />
		<code><strong>btnLoading</strong>|boolean</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>btnLoading</span
			><span class="codegray">&rsaquo;</span><span>text doesn't matter</span><span class="codegray"
				>&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Button</span><span class="codegray"
				>&rsaquo;</span
			>
<span>OR</span>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>btnLoading </span><span class="codegray">/</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- SUCCESS STATE -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">The btnSuccess prop works just like the btnLoading prop.</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button btnSuccess />
		<code><strong>btnSuccess</strong>|boolean</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>btnSuccess</span
			><span class="codegray">&rsaquo;</span><span>text doesn't matter</span><span class="codegray"
				>&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Button</span><span class="codegray"
				>&rsaquo;</span
			>
<span>OR</span>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>btnSuccess </span><span class="codegray">/</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- ONCLICK -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">
		A click event is dispatched from the button component to imitate svelte built in on:click.
	</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button on:click={alertUser}>Executes Func</Button>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codepurple"
				>on</span
			><span>:</span><span class="codeteal">click</span><span>=</span><span class="codedarkyellow"
				>{'{'}</span
			><span class="codeyellow">alertUser</span><span class="codedarkyellow">{'}'}</span><span
				class="codegray">&rsaquo;</span
			><span>Executes Func</span><span class="codegray">&lsaquo;</span><span class="codegray"
				>/</span
			><span class="codeteal">Button</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- UNSTYLED -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">The unstyled property removes all the default styles from the buttons.</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button unstyled>Unstyled</Button>
		<code><strong>unstyled</strong>|boolean</code>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>unstyled</span
			><span class="codegray">&rsaquo;</span><span>Unstyled</span><span class="codegray"
				>&lsaquo;</span
			><span class="codegray">/</span><span class="codeteal">Button</span><span class="codegray"
				>&rsaquo;</span
			>
</code>
</pre>
</section>

<!-- COMBINED PROPS -->
<section class="ml-40 mr-80 mt-5 pb-20">
	<p class="box mb-9">
		You can also combine properties to make something different. For example, let's say we want a
		special button that will open a <code class="bg-gray-300 px-2 py-1 rounded text-xs">newTab</code
		>. We want to style this button differently to show its special behavior. First remove all
		default styles with the
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">unstyled</code>
		property. Then I re-style the button with the
		<code class="bg-gray-300 px-2 py-1 rounded text-xs">class</code>
		property.
	</p>
	<div class="flexbox justify-start items-center space-x-5">
		<Button unstyled class="specialButton" href="/buttons" newTab>Click here</Button>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>unstyled</span
			> <span class="codeblue">class</span>=<span class="codeorange">"specialButton"</span> <span
				class="codeblue">href</span
			>=<span class="codeorange">"/buttons"</span> <span class="codeblue">newTab</span><span
				class="codegray">&rsaquo;</span
			><span>Click here</span><span class="codegray">&lsaquo;</span><span class="codegray">/</span
			><span class="codeteal">Button</span><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>

<!-- INNER HTML -->
<section id="has-icon" class="ml-40 mr-80 mt-5 rounded pt-9 pb-14 mb-96">
	<p class="box mb-9">
		The buttons inner content is filled using sveltes <code
			class="bg-gray-300 px-2 py-1 rounded text-xs">slot</code
		>
		feature so inner HTML works fine <i class="fa-solid fa-face-smile" />.
	</p>
	<div class="flexbox justify-between items-center space-x-5">
		<div>
			<Button href="/buttons"><i class="fa-solid fa-face-smile mr-2" /> Inner HTML</Button>
			<code class="ml-5"><strong>href</strong>|string</code>
		</div>
	</div>
	<pre>
<code>
<span class="codegray">&lsaquo;</span><span class="codeteal">Button </span><span class="codeblue"
				>href</span
			><span class="codewhite">=</span><span class="codeorange">"/buttons"</span><span
				class="codegray">&rsaquo;</span
			><span class="codewhite"
				><span class="codegray">&lsaquo;</span><span class="codedarkblue">i </span><span
					class="codeblue">class</span
				><span class="codewhite">=</span><span class="codeorange">"fa-solid fa-face-smile"</span
				><span class="codegray"> /</span><span class="codegray">&rsaquo;</span> Inner HTML</span
			><span class="codegray">&lsaquo;</span><span class="codegray">/</span><span class="codeteal"
				>Button</span
			><span class="codegray">&rsaquo;</span>
</code>
</pre>
</section>
