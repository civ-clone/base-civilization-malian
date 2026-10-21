import Malian from './Malian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
  [
    'Niani',
    'Timbuktu',
    'Djenné',
    'Gao',
    'Walata',
    'Kangaba',
    'Ségou',
    'Mopti',
    'Kayes',
    'Koulikoro',
    'Sikasso',
    'Bamako',
    'Tadmekka',
    'Kumbi Saleh',
    'Kirina',
    'Kouroussa',
    'Kankan',
    'Siguiri',
    'Tichitt',
    'Awdaghust',
    'Takedda',
    'Bandiagara',
    'Hombori',
    'Kidal',
    'Nioro',
    'Kita',
    'Koutiala',
    'Bougouni',
    'Dia',
    'Teghaza',
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Malian, i === 0))
);
