const Item = ({children}) => {
	return (
		<a href="/" className="list-group-item list-group-item-action list-group-item-primary">
			{children}
		</a>
	)
}

export default Item;
