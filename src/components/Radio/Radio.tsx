import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Radio.module.css';

type RadioProps = ComponentPropsWithoutRef<'input'>;

export function Radio({ className, children, ...props }: RadioProps) {
  const classNames = cn(classes.radio, className);

  return (
    <label className={classNames}>
      <input type="radio" className={classes.input} {...props} />
      <span className={classes.box}></span>
      {children && <span className={classes.text}>{children}</span>}
    </label>
  );
}
