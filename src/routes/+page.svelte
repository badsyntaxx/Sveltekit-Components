<script>
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';

	function alertUser() {
		alert('Alert user function executed');
	}

	let input;
	let address = '222 Bagend #33';
	let gender = 'Wormself';

	function logInput() {
		console.log(input);
	}
</script>

<section class="container mt-14">
	<h1>Sveltekit components</h1>
</section>

<section class="container mt-40 pb-20 border-b border-neutral-300">
	<h1 class="text-2xl mb-9">INPUTS</h1>
	<div class="flexbox justify-start items-center space-x-5 mt-9">
		<label for="username">
			Typical
			<Input bind:value={input} type="text" name="username" placeholder="Username" />
		</label>
		<label for="address">
			On input
			<Input
				on:input={logInput}
				bind:value={input}
				type="email"
				name="email"
				placeholder="Email"
				required
			/>
		</label>
		<label for="address">
			Error
			<Input bind:value={address} type="text" name="address" required error />
		</label>
		<label for="gender">
			Prefilled
			<Input bind:value={gender} type="text" name="gender" required />
		</label>
	</div>
</section>
