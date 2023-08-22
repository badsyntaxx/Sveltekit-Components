<script>
	import Table from '$lib/Table.svelte';
	import Button from '$lib/Button.svelte';

	let tableData = [
		{
			id: 1,
			name: 'Bilbo Baggins',
			role: 'Hobbit',
			gender: 'Male',
			email: 'bilbo@shire.com',
			status: 'Online'
		},
		{
			id: 7,
			name: 'Barbara Gorden',
			role: 'Batgirl',
			gender: 'Female',
			email: 'babs@gotham.com',
			status: 'Online'
		},
		{
			id: 2,
			name: 'Gandalf',
			role: 'Wizard',
			gender: 'Male',
			email: 'gandalf@valinor.com',
			status: 'Online'
		},
		{
			id: 3,
			name: 'Batman',
			role: 'Dark Knight',
			gender: 'Male',
			email: 'batman@cave.com',
			status: 'Offline'
		},
		{
			id: 4,
			name: 'Luke Skywalker',
			role: 'Jedi Knight',
			gender: 'Male',
			email: 'luke@degoba.com',
			status: 'Online'
		},
		{
			id: 5,
			name: 'Ab Lincoln',
			role: 'President',
			gender: 'Male',
			email: 'ZePres@whitehouse.com',
			status: 'Offline'
		},
		{
			id: 6,
			name: 'Galadriel',
			role: 'Lady',
			gender: 'Female',
			email: 'gal@lothlorien.com',
			status: 'Offline'
		}
	];
	let ids = [];
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
