import React from 'react';
import ListedDesign from '../../components/Admin/Listed-Design';
import ListedServices from '../../components/Admin/Listed-Services';

import LayoutAdmin from '../../layouts/admin';

const index = () => {
  return (
    <LayoutAdmin>
      <ListedServices />
    </LayoutAdmin>
  );
};

export default index;
