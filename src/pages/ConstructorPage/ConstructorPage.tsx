import { Button } from '~/components/Button';
import { Markup } from '~/components/Markup';

import { markups } from './config';
import classes from './ConstructorPage.module.css';

export function ConstructorPage(): JSX.Element {
  const markupList = markups.map(({ id, title, ...props }) => (
    <li key={id} className={classes.item}>
      <Markup {...props}>{title}</Markup>
    </li>
  ));

  return (
    <main>
      <h1 className={classes.h1}>Конструктор страницы оплаты</h1>

      <ul className={classes.list}>{markupList}</ul>

      <Button className={classes.button} iconName="arrow">
        Продолжить
      </Button>
    </main>
  );
}
