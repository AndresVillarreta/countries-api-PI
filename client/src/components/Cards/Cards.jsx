import styleC from "./Cards.module.css";
import { getCountries, onSearch } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import search from "../../assets/search.svg";
import { useEffect, useState } from "react";

export default function Cards() {
  const [thisPage, setThisPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [countriesList, setCountriesList] = useState([]);
  const dispatch = useDispatch();
  const { countries, pages } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setCountriesList(pages.slice(operationA, operationB));
    setPagination(Math.ceil(pages.length / 10));
  }, [countries]);
  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setPagination(Math.ceil(pages.length / 10));
    setCountriesList(pages.slice(operationA, operationB));
  }, [pages]);
  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setCountriesList(pages.slice(operationA, operationB));
  }, [thisPage]);
  const changePage = (e) => {
    const newPage = Number(e.target.value);
    setThisPage(newPage);
  };
  const handleSearch = (e) => {
    dispatch(onSearch(e.target.value));
    setThisPage(1);
  };
  const clickSearch = (e) => {
    console.log(e.target.value);
    if (!e.target.value) {
      return;
    } else {
      dispatch(onSearch(e.target.value));
      setThisPage(1);
    }
  };

  return (
    <div className={styleC.main}>
      <div className={styleC.main_container}>
        <div className={styleC.search_bar}>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <img src={search} alt="search" onClick={clickSearch} />
        </div>
        <div className={styleC.card_container}>
          {!pages ? (
            <>LOADING</>
          ) : (
            countriesList?.map((country) => (
              <Card
                key={country.id}
                id={country.id}
                img={country.flag}
                name={country.name}
                region={country.region}
              />
            ))
          )}
        </div>
        <div className={styleC.pagination}>
          {thisPage > 1 ? (
            <button value={thisPage - 1} onClick={changePage}>
              &lt;
            </button>
          ) : (
            ""
          )}
          {thisPage > 3 && thisPage <= pagination ? (
            <button value={1} onClick={changePage}>
              1
            </button>
          ) : (
            ""
          )}
          {/* {thisPage > 1 ? <button>{thisPage - 1}</button> : ""} */}
          <button className={styleC.thispage}>{thisPage}</button>
          {thisPage + 1 <= pagination ? (
            <button value={thisPage + 1} onClick={changePage}>
              {thisPage + 1}
            </button>
          ) : (
            ""
          )}
          {thisPage + 2 < pagination ? (
            <button value={thisPage + 2} onClick={changePage}>
              {thisPage + 2}
            </button>
          ) : (
            ""
          )}
          {thisPage + 3 < pagination ? (
            <button className={styleC.more_page}>...</button>
          ) : (
            ""
          )}
          {thisPage + 1 < pagination ? (
            <button value={pagination} onClick={changePage}>
              {pagination}
            </button>
          ) : (
            ""
          )}
          {thisPage < pagination ? (
            <button value={thisPage + 1} onClick={changePage}>
              &gt;
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
