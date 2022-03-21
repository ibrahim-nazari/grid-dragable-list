import React, {forwardRef} from 'react';
import classNames from 'classnames';

import styles from './List.module.css';



export const List = forwardRef(
  ({children, columns = 1, horizontal, style}, ref) => {
    return (
      <ul
        ref={ref}
        style={
          {
            ...style,
            
          } 
        }
        className={classNames(styles.List, horizontal && styles.horizontal)}
      >
        {children}
      </ul>
    );
  }
);
