import classes from './DowlandPage.module.css';

export function DowlandPage(): JSX.Element {
  return (
    <>
      <h1 className={classes.h1}>Ваш код готов</h1>

      <p className={classes.subtitle}>
        Скачайте архив с кодом и следуйте инструкциям из урока
      </p>

      <div className={classes.image}></div>

      <button className={classes.button}>Скачать</button>
    </>
  );
}
