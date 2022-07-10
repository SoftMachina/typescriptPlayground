"use strict";
exports.__esModule = true;
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(name, age) {
        var _this = this;
        this.getInfo = function () { return "this is a human called ".concat(_this.name, ", age ").concat(_this.age); };
        this.name = name;
        this.age = age;
    }
    return Human;
}());
exports.Human = Human;
