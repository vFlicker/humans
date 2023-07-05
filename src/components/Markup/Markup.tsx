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
  selected = false,
  children,
}: MarkupProps): JSX.Element {
  const classNames = cn(classes.markup, radioClasses.radio, className, {
    [radioClasses.checked]: selected,
  });

  return (
    <label className={classNames}>
      <img src={src} alt={alt} className={classes.image} />

      <span className={classes.footer}>
        <span className={classes.title}>{children}</span>

        <input type="radio" className={radioClasses.input} checked={selected} />
        <span className={radioClasses.box}></span>
      </span>
    </label>
  );
}
