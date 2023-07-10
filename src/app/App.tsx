import './styles/index.css';

import { Header } from '~/components/Header';
import { ConstructorPage } from '~/pages/ConstructorPage';
import { PayMethodsPage } from '~/pages/PayMathodsPage';
import { SettingsPage } from '~/pages/SettingsPage';

import classes from './App.module.css';

export function App(): JSX.Element {
  return (
    <div className={classes.container}>
      <Header />
      {/* <ConstructorPage /> */}
      {/* <SettingsPage /> */}
      <PayMethodsPage />
    </div>
  );
}
