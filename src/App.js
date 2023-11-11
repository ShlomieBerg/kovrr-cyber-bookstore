import { useState } from 'react';
import { useGet } from './hooks';
import { BOOKS_URL, PAGE_SIZE_OPTIONS } from './consts';
import { getQueryFromValue, getValueFromQuery } from './utils';
import { PaginationButtons, PaginationSelect, SearchBar, BookItem, RegistrationForm, Modal, Spinner } from './components';
import './App.css';

function App()
{
  const [queryParams, setQueryParams] = useState({ q: 'cyber', maxResults: 40, startIndex: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(25);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data, loading, error } = useGet(BOOKS_URL, queryParams);

  if (loading)
  {
    return <Spinner loading />;
  }

  if (error)
  {
    return <div>Error: {error.message}</div>;
  }

  const { items, totalItems } = data;
  const pageItems = totalItems !== 0 ? items.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  ) : [];

  const onNumOfItemsChange = (numOfBooks) =>
  {
    setCurrentPage(1);
    setBooksPerPage(numOfBooks);
  };


  const handleSearchChange = (value) =>
  {
    setQueryParams({ ...queryParams, q: getQueryFromValue(value) });
  }

  const openModal = (item) =>
  {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () =>
  {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleSubmit = (values) =>
  {
    console.log(values)
    closeModal();
  };


  const getBooks = (items) => items.map((item) => <BookItem key={item.id} book={item} handleClick={openModal} />);
  return (
    <div className="mainContainer">
      <h1>Cyber Bookstore</h1>
      <div className="configContainer">
        <SearchBar searchValue={getValueFromQuery(queryParams.q)} onSearchChange={handleSearchChange} />
        <PaginationSelect pageOptions={PAGE_SIZE_OPTIONS} size={booksPerPage} setSize={onNumOfItemsChange} />
      </div>
      <div className="booksContainer">{getBooks(pageItems)}</div>
      <PaginationButtons
        totalPages={totalItems !== 0 ? Math.ceil(items.length / booksPerPage) : 0}
        currentPage={totalItems !== 0 ? currentPage : 0}
        setCurrentPage={setCurrentPage}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} closeButton='Cancel purchase'>
        <div className="modalContainer">
          <RegistrationForm handleSubmit={handleSubmit} />
          {selectedItem && <BookItem key={selectedItem.id} book={selectedItem} />}
        </div>
      </Modal>
    </div>

  );

}

export default App;
