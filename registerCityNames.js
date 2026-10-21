"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Malian_1 = require("./Malian");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
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
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Malian_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map