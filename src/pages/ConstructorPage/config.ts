import imageMarkup1Src from '~/shared/images/markup/markup_1.jpg';
import imageMarkup2Src from '~/shared/images/markup/markup_2.jpg';
import imageMarkup3Src from '~/shared/images/markup/markup_3.jpg';
import imageMarkup4Src from '~/shared/images/markup/markup_4.jpg';
import imageMarkup5Src from '~/shared/images/markup/markup_5.jpg';

export const markups = [
  {
    id: 1,
    src: imageMarkup1Src,
    title: 'Макет #1',
    alt: 'Макет 1',
    disabled: false,
    selected: true,
  },
  {
    id: 2,
    src: imageMarkup2Src,
    title: 'Макет #2',
    alt: 'Макет 2',
    disabled: false,
    selected: false,
  },
  {
    id: 3,
    src: imageMarkup3Src,
    title: 'Макет #3',
    alt: 'Макет 3',
    disabled: false,
    selected: false,
  },
  {
    id: 4,
    src: imageMarkup4Src,
    title: 'Макет #4',
    alt: 'Макет 4',
    disabled: false,
    selected: false,
  },
  {
    id: 5,
    src: imageMarkup5Src,
    title: 'Макет #5',
    alt: 'Макет 5',
    disabled: true,
    selected: false,
  },
] as const;
