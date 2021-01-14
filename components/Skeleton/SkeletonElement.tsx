import React from 'react';

import styles from './Skeleton.module.css';

interface Props {
  type: string;
}

const SkeletonElement: React.FC<Props> = ({ type }) => {
  const classes = `${styles.skeleton} ${styles[type]}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
