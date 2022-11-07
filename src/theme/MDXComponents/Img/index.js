import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
function transformImgClassName(className) {
  return clsx(className, styles.img);
}
export default function MDXImg(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <p align="center">
      <img loading="lazy" {...props} className={transformImgClassName(props.className)} />
      {!!props.source && (
        <div>
          <small>Source: </small>
          <a href={props.source} target="_blank">
            <small>{props.source}</small>
          </a>
        </div>
      )}
    </p>
  );
}
