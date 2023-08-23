<script>
	import Table from '$lib/Table.svelte';
	import Button from '$lib/Button.svelte';

	export let data;

	let ids = [];
	let tableData = data.data.map((user) => {
		return {
			id: user.id,
			name: user.username,
			email: user.email,
			gender: user.gender,
			address: `${user.address.address} ${user.address.city}, ${user.address.state}`
		};
	});
	let options = {
		limit: 10,
		skip: 0,
		sortBy: false,
		direction: 'asc'
	};

	function deleteData() {
		const newData = tableData.filter((row) => !ids.includes(row.id));

		tableData = newData;

		ids = [];
	}
</script>

<Button on:click={deleteData} size="sm" style="margin-bottom: 4px;">Delete</Button>
<Table bind:tableData bind:ids bind:options />
