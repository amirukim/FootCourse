function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className='flex justify-center items-center mt-4 font-bebas'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} className={`px-3 py-1 rounded-lg mx-1 ${currentPage === index + 1 ? "bg-hijau text-dark-purple " : "bg-white/20"}`} onClick={() => handlePageClick(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
