/**
 * * program.(js/ts)
 * TODO integrate with website
 */
var Vector = /** @class */ (function () {
    function Vector(i, j, k) {
        this.i = i;
        this.j = j;
        this.k = k;
    }
    Vector.prototype.size = function () {
        var result = this.i * this.i + this.j * this.j + this.k * this.k;
        return Math.sqrt(result);
    };
    Vector.prototype.add = function (op) {
        var i = this.i + op.i;
        var j = this.j + op.j;
        var k = this.k + op.k;
        return new Vector(i, j, k);
    };
    Vector.prototype.subtract = function (op) {
        var i = this.i - op.i;
        var j = this.j - op.j;
        var k = this.k - op.k;
        return new Vector(i, j, k);
    };
    Vector.prototype.multiply = function (multiplicand) {
        var i = this.i * multiplicand;
        var j = this.j * multiplicand;
        var k = this.k * multiplicand;
        return new Vector(i, j, k);
    };
    Vector.prototype.dotProduct = function (op) {
        var i = this.i * op.i;
        var j = this.j * op.j;
        var k = this.k * op.k;
        return i + j + k;
    };
    Vector.prototype.crossProduct = function (op) {
        var i = this.j * op.k - this.k * op.j;
        var j = this.k * op.i - this.i * op.k;
        var k = this.i * op.j - this.j * op.i;
        return new Vector(i, j, k);
    };
    Vector.prototype.projectOn = function (op) {
        var OneUnitVector = this.dotProduct(op) / (op.size() * op.size());
        var w = op.multiply(OneUnitVector);
        return w;
    };
    Vector.prototype.parrallelogramArea = function (op) {
        return this.crossProduct(op).size();
    };
    return Vector;
}());
// ! Below is not program feature, test purpose only!
var a = parseInt(prompt("Gimme i"));
var b = parseInt(prompt("Gimme j"));
var c = parseInt(prompt("Gimme k"));
var u = new Vector(a, b, c);
alert(u.size());
