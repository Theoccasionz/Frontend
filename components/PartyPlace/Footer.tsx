import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

import style from '../../styles/party-place/footer.module.css';

const Footer = () => {
  return (
    <Container fluid className={`px-3 py-3 mt-4 ${style.footer}`}>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <h3>The Occasionz</h3>
          <p className={style.iconArea}>
            Follow us on : <br />
            <SocialIcon
              url="https://www.instagram.com/cherishexperiences/"
              style={{ width: '40px', height: '40px' }}
            />
            <SocialIcon
              url="https://www.facebook.com/cherishexperiences"
              style={{ width: '40px', height: '40px' }}
            />
            <SocialIcon url="https://www.linkedin.com/" style={{ width: '40px', height: '40px' }} />
          </p>
        </Col>
        <Col
          lg={{ span: 4, offset: 4 }}
          md={6}
          sm={12}
          className={`${style.combined}`}
        >
          <div
            className={`${style.companyArea}`}
          >
            <h3>Company</h3>
            <Link href="/about">
              <a href="/about" className={style.link}>
                About us
              </a>
            </Link>
            <Link href="https://shobhitjain19972.wixsite.com/my-site-8">
              <a href="https://shobhitjain19972.wixsite.com/my-site-8" className={style.link} target="_blank" rel="noopener noreferrer">
                Blogs
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a href="/privacy-policy" className={style.link}>
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-and-conditions">
              <a href="/terms-and-conditions" className={style.link}>
                Terms and Conditions
              </a>
            </Link>
            <Link href="/faqs">
              <a href="/faqs" className={style.link}>
                FAQs
              </a>
            </Link>
          </div>

          <div>
            <h3>Contact</h3>
            <SocialIcon
              url="https://wa.me/message/KEKUQE5X5GNND1"
              style={{ width: '40px', height: '40px' }}
            />
            <SocialIcon
              url="mailto:info@theoccasionz.com"
              style={{ width: '40px', height: '40px', marginLeft: '0.5rem' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
