import { useState, useEffect } from "react";

export default function usePagination() {
  const [thisPage, setThisPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [countriesList, setCountriesList] = useState([]);
  const { countries, pages } = useSelector((state) => state);
}
