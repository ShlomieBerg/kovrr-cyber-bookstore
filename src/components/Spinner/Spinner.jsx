import './Spinner.css';

const Spinner = ({ loading }) => {
	return (
		<div className={`spinner ${loading ? 'visible' : ''}`}>
			<div className="spinner-circle"></div>
		</div>
	);
};

export default Spinner;
