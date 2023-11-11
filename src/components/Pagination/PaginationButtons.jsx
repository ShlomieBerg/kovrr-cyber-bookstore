import './Pagination.css';

const PaginationButtons = ({ totalPages, currentPage, setCurrentPage }) => {
	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<div className="paginationContainer">
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<div className="buttonsContainer">
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
				>
					Previous
				</button>

				<button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PaginationButtons;
