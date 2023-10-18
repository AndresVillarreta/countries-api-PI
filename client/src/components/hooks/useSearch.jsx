import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../../redux/actions";
import usePagination from "./usePagination";

export default function useSearch() {
  const dispatch = useDispatch();
  const { setPage1 } = usePagination();

  const handleSearch = (e) => {
    dispatch(onSearch(e.target.value));
    setPage1();
  };
  const clickSearch = (e) => {
    if (!e.target.value) {
      return;
    } else {
      dispatch(onSearch(e.target.value));
      setPage1();
    }
  };
  return {
    handleSearch,
    clickSearch,
  };
}
