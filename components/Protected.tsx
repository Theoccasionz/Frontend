import React, { Fragment, useState, useEffect } from 'react';
import Loading from './Loading/loading';

const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    //   extract data from local storage os user and store in state
  }, []);

  return <Fragment>{!isAuthenticated ? <Loading /> : <div></div>}</Fragment>;
};

export default Protected;
