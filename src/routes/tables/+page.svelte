<script>
	import Table from '$lib/Table.svelte';
	let data = [
		{
			name: 'Bilbo Baggins',
			role: 'Hobbit',
			email: 'bilbo@shire.com',
			status: 'Online'
		},
		{
			name: 'Gandalf',
			role: 'Wizard',
			email: 'gandalf@valinor.com',
			status: 'Online'
		},
		{
			name: 'Batman',
			role: 'Dark Knight',
			email: 'batman@cave.com',
			status: 'Offline'
		},
		{
			name: 'Luke Skywalker',
			role: 'Jedi Knight',
			email: 'luke@degoba.com',
			status: 'Online'
		}
	];
</script>

<Table {data} />
