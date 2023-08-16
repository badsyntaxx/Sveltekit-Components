<script>
	import { onMount } from 'svelte';

	export let data;
	export let titles;

	let allChecked = false;
	let items = [];

	onMount(() => {
		for (const key in data) {
			data[key].checked = false;
		}
	});

	/* async function orderBy(param, settings, refreshTable) {
		settings.orderBy = param;
		if (settings.direction == 'asc') settings.direction = 'desc';
		else settings.direction = 'asc';
		await refreshTable();
	} */

	function toggleAll(e) {
		for (const key in data) {
			if (allChecked) {
				data[key].checked = true;
			} else {
				data[key].checked = false;
			}
		}
	}

	function toggleOne() {
		allChecked = false;
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

	let specificData = [];
	function processData() {
		for (const key in data) {
			console.log('🚀 ~ file: Table.svelte:60 ~ processData ~ data[key].:', data[key].checked);
			if (data[key].checked) {
				specificData.push(data[key]);
			}
		}
		console.log('🚀 ~ file: Table.svelte:61 ~ processData ~ specificData:', specificData);
	}
</script>

<svelte:window on:resize={handleResize} />

<table>
	<tr>
		<th class="number-col">#</th>
		<th class="check-cell">
			<input type="checkbox" bind:checked={allChecked} on:change={toggleAll} />
		</th>
		{#each titles as t}
			<th class="btn-sort">{t}</th>
		{/each}
	</tr>
	{#each data as d, k}
		<tr>
			<td class="number-col"><span style="display: none;" />{k + 1}</td>
			<td class="check-cell">
				<input
					type="checkbox"
					bind:checked={d.checked}
					on:change={toggleOne}
					name={`item-${k}`}
					value={k}
				/>
			</td>
			<td><span style="display: none;">{titles[0]}:</span> {d.name}</td>
			<td><span style="display: none;">{titles[1]}:</span> {d.email}</td>
			<td><span style="display: none;">{titles[2]}:</span> {d.status}</td>
			<td><span style="display: none;">{titles[3]}:</span> {d.role}</td>
		</tr>
	{/each}
</table>
<button on:click={processData}>log</button>

<style>
	table {
		table-layout: fixed;
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-size: 13px;
		font-weight: 600;
	}

	table input {
		vertical-align: middle;
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
	}

	tr:hover {
		background-color: #eee;
	}

	tr:first-child {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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

	tr:focus,
	tr:active {
		background-color: #f7f7f7;
		box-shadow: inset 0px 12px 3px -10px rgba(0, 0, 0, 0.1),
			inset 0px -11px 3px -10px rgba(0, 0, 0, 0.1);
	}

	.number-col,
	.check-cell {
		min-width: 44px;
		width: 44px;
		text-align: center;
		padding: 0;
	}

	.check-cell {
		width: 30px;
		padding: 0 0 0 12px;
	}

	.check-cell input {
		width: 13px !important;
		margin: 0 !important;
		height: 30px;
		line-height: 30px;
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
		th.btn-sort,
		th.number-col {
			display: none;
		}
		.check-cell,
		.number-col {
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
