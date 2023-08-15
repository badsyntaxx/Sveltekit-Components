<script>
	export let data;

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
		<th class="number-col">#</th>
		<th class="check-cell"><input type="checkbox" id="check-all" /></th>
		<th class="btn-sort">Name</th>
		<th class="btn-sort">Email</th>
		<th class="btn-sort">Status</th>
		<th class="btn-sort">Role</th>
	</tr>
	{#each data as d, k}
		<tr>
			<td class="number-col"><span style="display: none;" />{k + 1}</td>
			<td class="check-cell"><input type="checkbox" /></td>
			<td><span style="display: none;">{Object.getOwnPropertyNames(d)[0]}:</span> {d.name}</td>
			<td><span style="display: none;">Email:</span> {d.email}</td>
			<td><span style="display: none;">Status:</span> {d.status}</td>
			<td><span style="display: none;">Role:</span> {d.role}</td>
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
