export async function load() {
	const response = await fetch('https://dummyjson.com/users');
	const fetchedData = await response.json();
	const data = fetchedData.users;

	return {
		data
	};
}
