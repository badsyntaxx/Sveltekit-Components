<script>
	import { onMount } from 'svelte';

	export let tableData;
	export let ids;
	export let options;

	let allChecked = false;
	let titles = [];

	onMount(() => {
		for (const key in tableData) {
			tableData[key].checked = false;
		}
		sortRows();
	});

	async function makeTitlesArray() {
		for (const key in tableData) {
			for (const k in tableData[key]) {
				if (!titles.includes(k) && k != 'checked' && k != 'id') {
					titles.push(k);
				}
			}
		}
		return titles;
	}

	function sortRows(sortBy = '') {
		let sorter = sortBy;

		if (sortBy) {
			sorter = sortBy;
			options.sortBy = sortBy;
		} else if (options.sortBy) {
			sorter = options.sortBy;
		}

		sorter = sorter.toLowerCase();

		tableData.sort((a, b) => {
			const valueA = a[sorter];
			const valueB = b[sorter];

			if (typeof valueA === 'number' && typeof valueB === 'number') {
				// Both values are numbers
				if (options.direction === 'desc') {
					return valueB - valueA; // Descending numeric sort
				} else {
					return valueA - valueB; // Ascending numeric sort
				}
			} else {
				// At least one value is a string
				if (options.direction === 'desc') {
					return String(valueB).localeCompare(String(valueA)); // Descending string sort
				} else {
					return String(valueA).localeCompare(String(valueB)); // Ascending string sort
				}
			}
		});

		options.direction = options.direction === 'desc' ? 'asc' : 'desc';

		if (options.limit) {
			tableData = tableData.slice(0, options.limit);
		}

		// Since SvelteKit's reactivity system might not detect changes to array elements,
		// it's a good practice to create a new array reference to trigger updates.
		tableData = [...tableData];
	}

	function toggleAll() {
		for (const key in tableData) {
			if (allChecked) {
				tableData[key].checked = true;
			} else {
				tableData[key].checked = false;
			}
		}
		setCheckedIds();
	}

	function toggleOne() {
		allChecked = false;
		setCheckedIds();
	}

	function setCheckedIds() {
		ids = [];
		for (const key in tableData) {
			if (tableData[key].checked) {
				ids.push(tableData[key].id);
			}
		}
	}

	let windowWidth;
	const handleResize = () => {
		windowWidth = window.innerWidth;
		if (windowWidth <= 667) {
			const rowData = [...document.querySelectorAll('td')];
			for (const key in rowData) {
				const span = rowData[key].querySelector('span');
				if (span) span.style.display = 'block';
			}
		} else {
			const mobileLabels = [...document.querySelectorAll('span')];
			for (const key in mobileLabels) {
				const span = mobileLabels[key];
				if (span) span.style.display = 'none';
			}
		}
	};
</script>

<svelte:window on:resize={handleResize} />

<table>
	<tr>
		<th class="check-cell">
			<input type="checkbox" bind:checked={allChecked} on:change={toggleAll} />
		</th>
		{#await makeTitlesArray() then titles}
			{#each titles as t}
				<th class="btn-sort" on:click={() => sortRows(t)}>{t}</th>
			{/each}
		{/await}
	</tr>
	{#each tableData as d, k}
		<tr tabindex={k}>
			{#each Object.entries(d) as td}
				{#if td[0] == 'id'}
					<td class="check-cell">
						<input
							type="checkbox"
							bind:checked={d.checked}
							on:change={toggleOne}
							name={`item-${k}`}
							value={d.id}
						/>
					</td>
				{:else if td[0] != 'checked'}
					<td><span style="display: none;">{td[0]}:</span> {td[1]}({d.id})</td>
				{/if}
			{/each}
		</tr>
	{/each}
</table>

<style>
	table {
		table-layout: fixed;
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-size: 13px;
		font-weight: 600;
	}

	th {
		border-top: 1px solid rgba(0, 0, 0, 0.2);
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		cursor: pointer;
		text-align: left;
		cursor: pointer;
		padding: 0 15px;
		height: 44px;
		line-height: 44px;
		font-weight: 600;
		color: #999;
		text-transform: capitalize;
	}

	tr:hover {
		background-color: #eee;
	}

	tr:focus,
	tr:active {
		background-color: #eee;
		box-shadow: inset 0px 12px 3px -10px rgba(0, 0, 0, 0.1),
			inset 0px -11px 3px -10px rgba(0, 0, 0, 0.1);
	}

	td {
		height: 44px;
		line-height: 44px;
		padding: 5px 15px;
		border: none;
		overflow: hidden;
		background-clip: padding-box;
	}

	td span {
		float: left;
		text-transform: capitalize;
	}

	.check-cell {
		min-width: 44px;
		width: 44px;
		text-align: center;
		padding: 0;
	}

	.check-cell input {
		vertical-align: middle;
	}

	@media only screen and (max-width: 667px) {
		table,
		th,
		td,
		tr {
			display: block;
			float: left;
			width: 100% !important;
		}
		tr {
			border: 1px solid #ddd;
		}
		th {
			background-color: #ececec;
		}
		td {
			border: none;
			border-bottom: 1px solid #ddd;
			position: relative;
			width: 100%;
			text-align: right;
		}
		th.btn-sort {
			display: none;
		}
		.check-cell {
			text-align: left;
			padding: 5px 15px;
			font-weight: bold;
		}
		table input[type='checkbox'] {
			vertical-align: middle;
		}
		td:first-child,
		td:last-child {
			padding: 5px 15px;
		}
	}
</style>
