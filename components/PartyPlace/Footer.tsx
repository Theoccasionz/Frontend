import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import style from '../../styles/party-place/footer.module.css';

const Footer = () => {
  return (
    <Container fluid className={`px-4 py-5 mt-4 ${style.footer}`}>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <h4>The Occasionz</h4>
          <p>
            Follow us on : <br />
            icons here
          </p>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div
          //   className={`${style.companyArea}`}
          >
            <h5>Company</h5>
            <Link href="/about">
              <a href="/about" className={style.link}>
                About us
              </a>
            </Link>
            <Link href="/blogs">
              <a href="/blogs" className={style.link}>
                Blogs
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a href="/privacy-policy" className={style.link}>
                Privacy Policy
              </a>
            </Link>
            <Link href="/tandc">
              <a href="/tandc" className={style.link}>
                Terms and Conditions
              </a>
            </Link>
            <Link href="/faqs">
              <a href="/faqs" className={style.link}>
                FAQs
              </a>
            </Link>
          </div>
        </Col>
        <Col
          lg={4}
          md={6}
          sm={12}
          // className={`${style.contactArea}`}
        >
          <h5>Contact</h5>
          wahtsapp here
          <a href="mailto:info@theoccasionz.com">info@theoccasionz.com</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
