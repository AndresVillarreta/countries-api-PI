import styleH from "./Home.module.css";
import search from "../../assets/search.svg";
import options from "../../assets/options.svg";
import filter from "../../assets/filter.svg";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

export default function Home() {
  const [option, setOptions] = useState(true);
  const [showCountries, setShowCountries] = useState([]);
  const [thisPage, setThisPage] = useState(1);

  const dispatch = useDispatch();
  const { countries, pagination } = useSelector((state) => state);
  const openOptions = (event) => {
    setOptions(!option);
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCountries());
    };
    fetchData();
  }, []);
  useEffect(() => {
    setShowCountries(countries.slice(0, 10));
  }, [countries]);
  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setShowCountries(countries.slice(operationA, operationB));
  }, [thisPage]);

  const changePage = (e) => {
    const newPage = Number(e.target.value);
    setThisPage(newPage);
  };
  return (
    <div className={styleH.container}>
      <div className={option ? styleH.options : styleH.noOptions}>
        <div
          className={
            option ? styleH.option_container : styleH.no_option_container
          }
        >
          <img
            srcSet={options}
            alt="options"
            width={"40px"}
            onClick={openOptions}
          />
          <div className={styleH.filters}>
            <div className={styleH.filters_space}>
              <img srcSet={filter} alt="filter" width={"40px"} />
              <div className={styleH.space_filter}>
                <p>Filter by Region</p>
                <select>
                  <option value="all">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="Oceania">Oceania</option>
                  <option value="South America">South America</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styleH.filters}>
            <div className={styleH.filters_space}>
              <img srcSet={filter} alt="filter" width={"40px"} />
              <div className={styleH.space_filter}>
                <p>Filter by Activities</p>
                <select>
                  <option value="all">All</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Culture">Culture</option>
                  <option value="History">History</option>
                  <option value="Nature">Nature</option>
                  <option value="Relaxation">Relaxation</option>
                  <option value="Sports">Sports</option>
                  <option value="Wildlife">Wildlife</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styleH.filters}>
            <div className={styleH.filters_space}>
              <img srcSet={filter} alt="filter" width={"40px"} />
              <div className={styleH.space_filter}>
                <p>Order by</p>
                <select>
                  <option value="all">All</option>
                  <option value="Ascendent">Ascendent</option>
                  <option value="Descendent">Descendent</option>
                  <option value="Alphabetic">Alphabetic</option>
                  <option value="Poblation">Poblation</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styleH.main}>
        <div className={styleH.main_container}>
          <div className={styleH.search_bar}>
            <input type="text" placeholder="Search" />
            <img src={search} alt="search" />
          </div>
          <div className={styleH.card_container}>
            {showCountries.map((country) => (
              <Card
                key={country.id}
                img={country.flag}
                name={country.name}
                region={country.region}
              />
            ))}
          </div>
          <div className={styleH.pagination}>
            {thisPage > 1 ? (
              <button value={thisPage - 1} onClick={changePage}>
                &lt;
              </button>
            ) : (
              ""
            )}
            {thisPage === pagination && pagination > 1 ? (
              <button value={1} onClick={changePage}>
                1
              </button>
            ) : (
              ""
            )}
            {/* {thisPage > 1 ? <button>{thisPage - 1}</button> : ""} */}
            <button className={styleH.thispage}>{thisPage}</button>
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
              <button className={styleH.more_page}>...</button>
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
    </div>
  );
}
