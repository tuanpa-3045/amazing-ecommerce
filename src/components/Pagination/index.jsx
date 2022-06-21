import React from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/action";

function Pagination() {
  const { pagination } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const totalPage = Math.ceil(pagination._totalProducts / pagination._limit);

  const handlePagination = (e) => {
    dispatch(setCurrentPage(e.selected + 1));
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
    />
  );
}

export default Pagination;
