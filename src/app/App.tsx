import './styles/index.css';

import { Button } from '~/components/Button';
import { Checkbox } from '~/components/Checkbox';
import { Markup } from '~/components/Markup';
import { Radio } from '~/components/Radio';

import imageMarkup1Src from '../shared/images/markup/markup_1.jpg';
import imageMarkup2Src from '../shared/images/markup/markup_2.jpg';

export function App(): JSX.Element {
  return (
    <div>
      <Button iconName="arrows">Продолжить</Button>

      <section>
        <Checkbox>Частями</Checkbox>
        <Checkbox>Счет на ИП / ООО</Checkbox>
      </section>

      <section>
        <Radio name="payment method" value="card" wrapped checked>
          Картой
        </Radio>

        <Radio name="payment method" value="parts" wrapped>
          Частями
        </Radio>
      </section>

      <section>
        <Markup src={imageMarkup1Src} alt="Макет 1" selected>
          Макет #1
        </Markup>

        <Markup src={imageMarkup2Src} alt="Макет 2">
          Макет #2
        </Markup>
      </section>
    </div>
  );
}
