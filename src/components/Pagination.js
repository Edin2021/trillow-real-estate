import { useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useGlobalContext } from "../context";

function Pagination() {
  const { pages, currPage, nextPage, prevPage, setCurrPage } =
    useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currPage]);

  const pagination = [];
  const pageIndeces = pages.map((page, i) => i);

  while (pageIndeces.length) {
    pagination.push(pageIndeces.splice(0, 5));
  }
  const currPages = pagination.filter((arr) => arr.includes(currPage))[0];

  if (pages.length === 1) {
    return <></>;
  }

  return (
    <aside className="pagination">
      <button
        onClick={prevPage}
        className={`prev-btn ${currPage === 0 ? "hide" : ""}`}
      >
        <span className="visually-hidden">previous page</span>
        <span className="icon" aria-hidden="true">
          <MdKeyboardArrowLeft />
        </span>
      </button>

      <div className="pages">
        {pages.map((page, i) => {
          const pageCount = i + 1;
          if (currPages.includes(i))
            return (
              <button
                onClick={() => setCurrPage(i)}
                key={i}
                className={currPage === i ? "active" : ""}
              >
                {pageCount}
              </button>
            );
          else return <></>;
        })}
      </div>

      <button
        onClick={nextPage}
        className={`next-btn ${!(currPage < pages.length - 1) ? "hide" : ""}`}
      >
        <span className="visually-hidden">previous page</span>
        <span className="icon" aria-hidden="true">
          <MdKeyboardArrowRight />
        </span>
      </button>
    </aside>
  );
}

export default Pagination;
