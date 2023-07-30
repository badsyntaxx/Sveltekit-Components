<script>
	import Input from '$lib/Input.svelte';
	let input;
	let address;
	let gender;
	let disabled;

	function alertUser() {
		alert(input);
	}
</script>

<section class="container mt-40 pb-20 border-b border-neutral-300">
	<h1 class="text-2xl mb-9">INPUTS</h1>
	<div class="flexbox justify-start items-center space-x-5 mt-9">
		<div>
			<label for="username">Typical</label>
			<Input bind:value={input} type="text" name="username" placeholder="Username" />
		</div>
		<div>
			<label for="email">React to input</label>
			<Input
				on:input={alertUser}
				bind:value={input}
				type="email"
				name="email"
				placeholder="Email"
				required
			/>
		</div>
		<div>
			<label for="address">Error</label>
			<Input bind:value={address} type="text" name="address" required error />
		</div>
		<div>
			<label for="gender"> Prefilled </label>
			<Input bind:value={gender} type="text" name="gender" required />
		</div>

		<label for="disabled"> Disabled </label>
		<Input bind:value={disabled} type="text" name="disabled" required disabled />
	</div>
</section>
