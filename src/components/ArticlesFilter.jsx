const ArticlesFilter = (params) => {
  const printEvent = (event) => {
    const newSearchParams = new URLSearchParams(params.searchParams);
    newSearchParams.set(`topic`, event.target.value);
    params.setSearchParams(newSearchParams);
  };

  return (
    <div className="custom-select">
      {/* <h2>Filters</h2> */}
      <select id="select_topic" onChange={printEvent}>
        <option value="">select topic</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </div>
  );
};

export default ArticlesFilter;
