import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

import styles from './Skeleton.module.css';

const SkeletonParty = () => {
  return (
    <div className={`${styles.skeletonWrapper} ${styles.light}`}>
      <div className="d-flex">
        <div className="w-50">
          <SkeletonElement type="thumbnail" />
        </div>
        <div className="w-50 pl-3">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonParty;
