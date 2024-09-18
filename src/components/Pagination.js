import React, { useState } from "react";

const Pagination = ({
  pages_count,
  default_page,
  sibling_count = 1,
  boundary_count = 1,
}) => {
  const total_pages = pages_count;
  const [currentPage, setCurrentPage] = useState(default_page);
  return (
    <div>
      <div className="text-lg">Current Page : {currentPage}</div>
      <div className="flex gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage((page) => page - 1);
          }}
        >
          Back
        </button>
        {Array.from({ length: total_pages }).map((_, index) => {
          return (index > boundary_count &&
            index < total_pages - boundary_count) ||
            (index >= currentPage - 1 - sibling_count &&
              index <= currentPage - 1 + sibling_count) ? (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          ) : (
            <span key={index}>...</span>
          );
        })}

        <button
          disabled={currentPage === pages_count}
          onClick={() => {
            setCurrentPage((page) => page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
