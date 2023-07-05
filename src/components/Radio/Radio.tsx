import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Radio.module.css';

type RadioProps = ComponentPropsWithoutRef<'input'> & {
  wrapped?: boolean;
};

export function Radio({
  className,
  checked,
  wrapped = false,
  children,
  ...props
}: RadioProps) {
  const classNames = cn(classes.radio, className, {
    [classes.checked]: checked,
    [classes.wrapper]: wrapped,
  });

  return (
    <label className={classNames}>
      <input
        type="radio"
        className={classes.input}
        checked={checked}
        {...props}
      />
      <span className={classes.box}></span>
      {children && <span className={classes.text}>{children}</span>}
    </label>
  );
}

export { classes as radioClasses };
