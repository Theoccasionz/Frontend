import React, { Fragment, useState } from 'react';
import DesignForm from './form';

const PortalComp = () => {
  const [id, setId] = useState('');
  const [active, setActive] = useState(false);

  return (
    <Fragment>
      <h2 className="text-center">Vendor Portal -{id || 'yo'} </h2>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={() => setActive(true)}>
          Add design
        </button>
        <button className="btn btn-primary" onClick={() => setActive(false)}>
          Saved designs
        </button>
      </div>
      {active ? <DesignForm /> : <div>Shows saved desgins</div>}
    </Fragment>
  );
};

export default PortalComp;
