<script>
	import Table from '$lib/Table.svelte';
	const data = [
		{
			id: 1,
			name: 'Bilbo Baggins',
			role: 'Hobbit',
			email: 'bilbo@shire.com',
			status: 'Online'
		},
		{
			id: 2,
			name: 'Gandalf',
			role: 'Wizard',
			email: 'gandalf@valinor.com',
			status: 'Online'
		},
		{
			id: 3,
			name: 'Batman',
			role: 'Dark Knight',
			email: 'batman@cave.com',
			status: 'Offline'
		},
		{
			id: 4,
			name: 'Luke Skywalker',
			role: 'Jedi Knight',
			email: 'luke@degoba.com',
			status: 'Online'
		},
		{
			id: 5,
			name: 'Ab Lincoln',
			role: 'President',
			email: 'ZePres@whitehouse.com',
			status: 'Offline'
		}
	];

	const titles = ['Name', 'Email', 'Status', 'Role'];

	let ids = [];
</script>

<button on:click={() => console.log(ids)}>log</button>
<Table {data} bind:ids {titles} />
