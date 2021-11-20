import { useGlobalContext } from "../context";

function Sort() {
  const { getSortParam, pages } = useGlobalContext();

  const totalResults = pages.reduce((total, page) => {
    total += page.length;
    return total;
  }, 0);

  return (
    <label className="sort-label">
      <span>Sort by:</span>
      <select onChange={(e) => getSortParam(e.target.value)}>
        <option value="newest">newest</option>
        <option value="highToLow">price (High to Low)</option>
        <option value="lowToHigh">price (Low to High)</option>
      </select>
      <span>
        Total results <b>{totalResults}</b>
      </span>
    </label>
  );
}

export default Sort;
