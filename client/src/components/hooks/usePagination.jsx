import { useState, useEffect } from "react";
import { getCountries, onSearch } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function usePagination() {
  const [thisPage, setThisPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const { countries, pages } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    setPagination(Math.ceil(pages.length / 10));
  }, [countries]);

  useEffect(() => {
    setPagination(Math.ceil(pages.length / 10));
  }, [pages]);

  const changePage = (e) => {
    setThisPage(() => {
      const newPage = Number(e.target.value);
      setPagination(Math.ceil(pages.length / 10));
      return newPage;
    });
  };
  const setPage1 = () => {
    setThisPage(1);
  };

  return {
    thisPage,
    pagination,
    changePage,
    setPage1,
  };
}
