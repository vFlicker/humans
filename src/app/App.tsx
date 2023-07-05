import './styles/index.css';

import { Button } from '~/components/Button';
import { Radio } from '~/components/Radio';

export function App(): JSX.Element {
  return (
    <div>
      <Button iconName="arrows">Продолжить</Button>
      <Radio name="payment method">Картой</Radio>
      <Radio name="payment method"></Radio>
    </div>
  );
}
