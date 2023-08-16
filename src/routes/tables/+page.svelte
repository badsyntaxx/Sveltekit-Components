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
		}
	];

	const titles = ['Name', 'Email', 'Status', 'Role'];
</script>

<Table {data} {titles} />
