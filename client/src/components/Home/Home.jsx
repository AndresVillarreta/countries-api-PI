import styleH from "./Home.module.css";
import search from "../../assets/search.svg";
import options from "../../assets/options.svg";
import filter from "../../assets/filter.svg";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterRegion,
  sortCountries,
  onSearch,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Cards from "../Cards/Cards";

export default function Home() {
  const [option, setOptions] = useState(true);
  const [thisPage, setThisPage] = useState(1);
  const [sorted, setSorted] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [countriesList, setCountriesList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, pages } = useSelector((state) => state);

  const openOptions = () => {
    setOptions(!option);
  };

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
  const orderByRegion = (e) => {
    dispatch(filterRegion(e.target.value));
    setPagination(Math.ceil(pages.length / 10));
    setThisPage(1);
  };
  const orderCountries = (e) => {
    setThisPage(1);
    dispatch(sortCountries(e.target.value));
    setPagination(Math.ceil(pages.length / 10));
    setSorted(!sorted);
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
                <select onChange={orderByRegion}>
                  <option value="all">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Americas">America</option>
                  <option value="South America">South America</option>
                  <option value="Oceania">Oceania</option>
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
                <select onChange={orderCountries}>
                  <option value="every">Filter</option>
                  <option value="asc">Ascendent</option>
                  <option value="desc">Descendent</option>
                  <option value="Poblation">Poblation</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styleH.create_activity}>
            <button
              className={option ? styleH.option_button : styleH.no_option}
              onClick={() => navigate("/create")}
            >
              Create Activity
            </button>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
}
