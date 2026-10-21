import Malian from './Malian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Malian',
  nation: 'Mali',
  colors: ['#4E342E', '#FCD116'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Malian, name, value))
);
