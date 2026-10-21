import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Malian from '../Malian';

export class MansaMusa extends Leader {
  static civilization(): typeof Civilization {
    return Malian;
  }

  name(): string {
    return 'Mansa Musa';
  }
}

export default MansaMusa;
