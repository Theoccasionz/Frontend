import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

import styles from './Skeleton.module.css';

const SkeletonFeatured: React.FC = () => {
  return (
    <div className={`${styles.skeletonWrapper} ${styles.light}`}>
      <div>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonFeatured;
