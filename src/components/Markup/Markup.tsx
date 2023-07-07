import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { radioClasses } from '../Radio';
import classes from './Markup.module.css';

type MarkupProps = Omit<ComponentPropsWithoutRef<'input'>, 'checked'> & {
  src: string;
  alt: string;
  selected?: boolean;
};

export function Markup({
  src,
  alt,
  className,
  disabled,
  selected = false,
  children,
}: MarkupProps): JSX.Element {
  const classNames = cn(classes.markup, radioClasses.radio, className, {
    [radioClasses.checked]: selected,
    [classes.disabled]: disabled,
    [radioClasses.disabled]: disabled,
  });

  return (
    <label className={classNames}>
      <img src={src} alt={alt} className={classes.image} />

      <span className={classes.footer}>
        <span className={classes.title}>{children}</span>

        <input
          type="radio"
          className={radioClasses.input}
          checked={selected}
          disabled={disabled}
        />
        <span className={radioClasses.box}></span>
      </span>
    </label>
  );
}
