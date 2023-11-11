const BookItem = ({ book, handleClick = () => {} }) => {
	const {
		volumeInfo: { title, imageLinks = {} },
	} = book;
	const { thumbnail } = imageLinks;

	return (
		<div
			className="book"
			onClick={() => {
				handleClick(book);
			}}
		>
			<h5>{title}</h5>
			<img alt={title} src={thumbnail} />
		</div>
	);
};

export default BookItem;
