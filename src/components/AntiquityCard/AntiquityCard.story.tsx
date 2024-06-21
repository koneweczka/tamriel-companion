import { AntiquityCard } from './AntiquityCard';

export default {
  title: 'Components/Antiquities',
  component: AntiquityCard,
  tags: ['autodocs'],
};

const exampleAntiquity = {
  item: 'Nirn Antiquity',
  rarity: 'Green',
  location: 'Mundus',
  type: 'Motif',
  difficulty: 'Simple',
  drop_area: 'Aurbis',
  image_path: 'src/public/images/antiquities-icons/ON-icon-quest-Letter_02.png',
};

export function Example() {
  return <AntiquityCard antiquity={exampleAntiquity} />;
}
