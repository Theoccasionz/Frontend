import { FC } from 'react';

import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const LoginFooter: FC = () => {
  return (
    <Navbar variant="light" bg="light" fixed="bottom">
      <Nav.Item>&copy; 2021 The Occasionz, All rights reserved</Nav.Item>
      <Nav className="ml-auto align-items-center">
        <Nav.Link>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="/">
            <a>Terms and Usage</a>
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default LoginFooter;
