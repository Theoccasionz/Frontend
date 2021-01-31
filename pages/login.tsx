import { FC, Fragment } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

import { LoginForm, LoginHeader } from '../components/Login';

const LoginPage: FC = () => {
  return (
    <Fragment>
      <LoginHeader />
      <p className="text-right pr-4 pt-4">
        <Link href="/">
          <a>
            <Button variant="dark">Register Here</Button>
          </a>
        </Link>
      </p>
      <LoginForm />
    </Fragment>
  );
};

export default LoginPage;
