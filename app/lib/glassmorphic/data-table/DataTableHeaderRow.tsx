import { type Props } from '../../utils/type/Props';

export const DataTableHeaderRow = ({
	columns,
}: Props<{
	columns: string[];
}>) => {
	return (
		<tr>
			{columns.map((name, i) => (
				<th
					key={i}
					className='text-start font-normal text-fg-1/70'
				>
					{name}
				</th>
			))}
		</tr>
	);
};
