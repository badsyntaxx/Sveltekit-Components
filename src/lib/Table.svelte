<script>
	export let data;

	let windowWidth;

	const handleResize = () => {
		windowWidth = window.innerWidth;

		if (windowWidth <= 1000) {
			let th = [];
			let num = 1;
			const rows = document.querySelectorAll('tr');
			document.querySelectorAll('th').forEach((element) => th.push(element.innerText));
			rows.forEach((element) => {
				const rowData = element.querySelectorAll('td');
				rowData.forEach((td) => {
					const span = td.querySelector('span');
					if (span) {
						span.innerHTML = th[num];

						num++;
					}
				});
				num = 1;
			});
		} else {
			const labels = document.querySelectorAll('span');
			if (labels.length) labels.forEach((l) => (l.innerHTML = ''));
		}
	};
</script>

<svelte:window on:resize={handleResize} />

<table>
	<tr>
		<th class="number-col">#</th>
		<th class="check-cell"><input type="checkbox" id="check-all" /></th>
		<th class="btn-sort">Name</th>
		<th class="btn-sort">Email</th>
		<th class="btn-sort">Status</th>
		<th class="btn-sort">Role</th>
	</tr>
	{#each data as d, k}
		<tr>
			<td class="number-col"><span />{k}</td>
			<td class="check-cell"><input type="checkbox" id="check-all" /></td>
			<td><span /> {d.name}</td>
			<td><span /> {d.email}</td>
			<td><span /> {d.status}</td>
			<td><span /> {d.role}</td>
		</tr>
	{/each}
</table>

<style>
	/* Tables */
	table {
		table-layout: fixed;
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-size: 13px;
		font-weight: 600;
	}

	table input {
		height: auto;
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

	tr {
		position: relative;
	}

	tr:hover {
		background-color: red;
		cursor: pointer;
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
		background-color: #fff;
		background-clip: padding-box;
	}

	td span {
		float: left;
	}

	tr:focus,
	tr:active {
		background-color: #f7f7f7;
		box-shadow: inset 0px 12px 3px -10px rgba(0, 0, 0, 0.1),
			inset 0px -11px 3px -10px rgba(0, 0, 0, 0.1);
	}

	.id-col {
		max-width: 0;
		width: 0;
		overflow: hidden;
		display: none !important;
	}

	.check-col,
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

	@media only screen and (max-width: 1000px) {
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
