import { Scanner } from '~/components/Scanner';
import { Toggler } from '~/components/Toggler';

import classes from './PayMethodsPage.module.css';

export function PayMethodsPage(): JSX.Element {
  return (
    <>
      <h1 className={classes.h1}>Методы оплаты</h1>

      <p className={classes.subtitle}>
        Выберите способ генерации способов оплаты
      </p>

      <Toggler className={classes.toggler} />
      <Scanner className={classes.scanner} />

      <p className={classes.notification}>
        Вставьте ссылку на страницу оплаты на GetCourse. Для успешного
        автоматического переноса способов оплаты все стили на странице должны
        быть удалены.
      </p>
    </>
  );
}
