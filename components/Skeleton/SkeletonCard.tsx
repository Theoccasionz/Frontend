import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

import styles from './Skeleton.module.css';

type Props = {
  heading?: Boolean;
};

const SkeletonCard: React.FC<Props> = ({ heading }) => {
  return (
    <div className={`${styles.skeletonWrapper} ${styles.light}`}>
      <div>
        {heading && <SkeletonElement type="title" />}
        <SkeletonElement type="thumbnail" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonCard;
