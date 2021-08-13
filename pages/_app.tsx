import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import UserContext from '../context/user';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }: AppProps) {
  const [defaultUser, setDefaultUser] = useState({
    username: null,
    userId: null,
    phoneNumber: null,
  });

  useEffect(() => {
    // use local storage utils here
    // TODO: extract data from local/session storage and update user accordingly
    return () => {};
  }, []);

  return (
    <UserContext.Provider value={{ user: defaultUser, updateUser: setDefaultUser }}>
      <Component {...pageProps} />;
    </UserContext.Provider>
  );
}

export default App;
