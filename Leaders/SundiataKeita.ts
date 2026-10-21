import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Malian from '../Malian';

export class SundiataKeita extends Leader {
  static civilization(): typeof Civilization {
    return Malian;
  }

  name(): string {
    return 'Sundiata Keita';
  }
}

export default SundiataKeita;
