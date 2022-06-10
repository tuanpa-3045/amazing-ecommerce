import React from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";

function Pagination({
  pagination = {
    _totalProducts: 100,
    _limit: 16,
  },
  handleChangePagination,
}) {
  const totalPage = Math.ceil(pagination._totalProducts / pagination._limit);

  const handlePagination = (e) => {
    handleChangePagination(e.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={totalPage}
      marginPagesDisplayed={3}
      pageRangeDisplayed={4}
      onPageChange={handlePagination}
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      forcePage={pagination._page && pagination._page - 1}
    />
  );
}

export default Pagination;
