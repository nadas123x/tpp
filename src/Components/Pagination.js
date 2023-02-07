import React from "react";

const Pagination = (props) => {
  const { currentPage, perPage, totalModules, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalModules / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
