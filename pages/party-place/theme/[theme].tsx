import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Container from 'react-bootstrap/Container';
import PartyPlace from '../../../components/PartyPlace';

const DATA = [
  {
    url: 'https://images.unsplash.com/photo-1614704031287-7037f236a3f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    themeName: 'hello',
    aboutTheme: 'just random theme',
    ritems: 'juice',
    nritems: 'dj',
    aboutservice: 'good service',
    place: 'random',
    occasion: 'random occasion',
    setupDuration: '2 days',
    cost: '100',
  },
  {
    url: 'https://images.unsplash.com/photo-1614704031287-7037f236a3f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    themeName: 'hello',
    aboutTheme: 'just random theme',
    ritems: 'juice',
    nritems: 'dj',
    aboutservice: 'good service',
    place: 'random',
    occasion: 'random occasion',
    setupDuration: '2 days',
    cost: '100',
  },
  {
    url: 'https://images.unsplash.com/photo-1614704031287-7037f236a3f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    themeName: 'hello',
    aboutTheme: 'just random theme',
    ritems: 'juice',
    nritems: 'dj',
    aboutservice: 'good service',
    place: 'random',
    occasion: 'random occasion',
    setupDuration: '2 days',
    cost: '100',
  },
  {
    url: 'https://images.unsplash.com/photo-1614704031287-7037f236a3f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    themeName: 'hello',
    aboutTheme: 'just random theme',
    ritems: 'juice',
    nritems: 'dj',
    aboutservice: 'good service',
    place: 'random',
    occasion: 'random occasion',
    setupDuration: '2 days',
    cost: '100',
  },
  {
    url: 'https://images.unsplash.com/photo-1614704031287-7037f236a3f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    themeName: 'hello',
    aboutTheme: 'just random theme',
    ritems: 'juice',
    nritems: 'dj',
    aboutservice: 'good service',
    place: 'random',
    occasion: 'random occasion',
    setupDuration: '2 days',
    cost: '100',
  },
  {
    url: 'https://images.unsplash.com/photo-1614704031287-7037f236a3f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    themeName: 'hello',
    aboutTheme: 'just random theme',
    ritems: 'juice',
    nritems: 'dj',
    aboutservice: 'good service',
    place: 'random',
    occasion: 'random occasion',
    setupDuration: '2 days',
    cost: '100',
  },
];

const PartyPlaceTheme = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
    }
  }, [router]);
  return (
    <Fragment>
      <Header />
      <Container fluid>
        <PartyPlace heading="new" partyData={DATA} />
      </Container>
    </Fragment>
  );
};

export default PartyPlaceTheme;
