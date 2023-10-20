import styleH from "./Home.module.css";
import options from "../../assets/options.svg";
import filter from "../../assets/filter.svg";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterRegion, sortCountries } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Cards from "../Cards/Cards";
import usePagination from "../hooks/usePagination";

export default function Home() {
  const { thisPage, setPage1 } = usePagination();
  const [option, setOptions] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [countriesList, setCountriesList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries, pages } = useSelector((state) => state);

  const openOptions = () => {
    setOptions(!option);
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("qlqqq");
      if (window.innerWidth > 500) {
        setOptions(false);
      } else {
        setOptions(option);
      }

      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setCountriesList(pages.slice(operationA, operationB));
  }, [countries]);

  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setCountriesList(pages.slice(operationA, operationB));
  }, [pages]);

  useEffect(() => {
    const operationA = thisPage * 10 - 10;
    const operationB = thisPage * 10;
    setCountriesList(pages.slice(operationA, operationB));
  }, [thisPage]);

  const orderByRegion = (e) => {
    dispatch(filterRegion(e.target.value));
    setPage1();
  };
  const orderCountries = (e) => {
    setPage1();
    dispatch(sortCountries(e.target.value));
    setSorted(!sorted);
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
          {/*           <div className={styleH.filters}>
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
          </div> */}
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
