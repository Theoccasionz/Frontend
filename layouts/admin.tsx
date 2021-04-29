import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import style from '../styles/admin/layout.module.css';

type Props = {
  children: React.ReactNode;
};

const LayoutAdmin: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    const mySidebar = document.getElementById('mySidebar')!;
    mySidebar.style.width = '0';
    const mainEl = document.getElementById('main')!;
    mainEl.style.marginLeft = '0';
  };

  const handleClick = () => {
    if (open) {
      setOpen(false);
      handleClose();
    } else {
      setOpen(true);
      const mySidebar = document.getElementById('mySidebar')!;
      mySidebar.style.width = '250px';
      const mainEl = document.getElementById('main')!;
      mainEl.style.marginLeft = '250px';
    }
  };

  const isActive = (value: string) => {
    if (router.pathname.indexOf(value) !== -1) {
      console.log(style.active);
      return style.active;
    }
    return '';
  };

  return (
    <main>
      <section className={style.navbar}>
        <div>
          <span>LOGO</span>
          <span className={style.navHeading}>The Occasionz-Admin Panel</span>
        </div>
        <div>
          <Form inline>
            <Form.Control as="select">
              <option>Jaipur</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form>
        </div>
      </section>
      <section className={style.panel}>
        <section className={style.sidebar}>
          <div id="mySidebar" className={style.sidebar}>
            <button className={style.closeBtn} onClick={handleClose}>
              ×
            </button>
            <Link href="/admin/booking-details">
              <a href="/admin/booking-details" className={isActive('/admin/booking-details')}>
                Booking Details
              </a>
            </Link>
            <Link href="/admin/add-design">
              <a href="/admin/add-design" className={isActive('/admin/add-design')}>
                Add Design
              </a>
            </Link>
            <Link href="/admin/listed-design">
              <a href="/admin/listed-design" className={isActive('/admin/listed-design')}>
                Listed Design
              </a>
            </Link>
            <Link href="/admin/posters">
              <a href="/admin/posters" className={isActive('admin/posters')}>
                Posters
              </a>
            </Link>
            <Link href="/admin/vendor-details">
              <a href="/admin/vendor-details" className={isActive('/admin/vendor-details')}>
                Vendor Details
              </a>
            </Link>
          </div>
        </section>
        <section className={style.main} id="main">
          <button className={style.toggleBtn} onClick={handleClick}>
            ☰
          </button>
          {children}
        </section>
      </section>
    </main>
  );
};

export default LayoutAdmin;
