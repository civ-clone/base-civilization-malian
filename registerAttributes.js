"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Malian_1 = require("./Malian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Malian',
    nation: 'Mali',
    colors: ['#4E342E', '#FCD116'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Malian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map