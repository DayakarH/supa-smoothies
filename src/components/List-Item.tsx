type Props = {
	details: string[];
};
const ListItem = ({ details }: Props) => {
	const [name, value] = details;
	return (
		<li>
			{name}: <em>{value}</em>
		</li>
	);
};

export default ListItem;
