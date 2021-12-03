import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { getNames } from "../helpers/getNames";

export const useFetchNames = (page) => {
    
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getNames(page)
      .then( names => {
        setState(names)
        setLoading(false)
      })

  }, [page]);

  return [state, loading];

};

useFetchNames.propTypes= {
  page: PropTypes.number.isRequired
}