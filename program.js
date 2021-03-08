/**
 * * program.(js/ts)
 * * Core Program to run this website
 */
// TODO Add feature to set this value, if possible, support cookie
var decimalPlaces = 2;
var Vector = /** @class */ (function () {
    function Vector(i, j, k) {
        this.i = i;
        this.j = j;
        this.k = k;
    }
    // * Class Method (Vector Calculation)
    Vector.prototype.size = function () {
        var result = this.i * this.i + this.j * this.j + this.k * this.k;
        return Math.sqrt(result);
    };
    Vector.prototype.multiply = function (multiplicand) {
        var i = this.i * multiplicand;
        var j = this.j * multiplicand;
        var k = this.k * multiplicand;
        return new Vector(i, j, k);
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
        var projectedVectorRelSize = this.dotProduct(op) / (op.size() * op.size());
        var w = op.multiply(projectedVectorRelSize);
        return w;
    };
    Vector.prototype.parallelogramArea = function (op) {
        return this.crossProduct(op).size();
    };
    // * Method for formatted printing
    Vector.prototype.formattedPrint = function () {
        var i = this.i.toFixed(decimalPlaces);
        var j = this.j.toFixed(decimalPlaces);
        var k = this.k.toFixed(decimalPlaces);
        return "( " + i + " , " + j + " , " + k + " )";
    };
    return Vector;
}());
// * Function that input Vector from <input>
function inputVector(VectorID) {
    if (VectorID === void 0) { VectorID = 1; }
    var i, j, k;
    if (VectorID == 1) {
        i = document.getElementById("vector-i").value;
        j = document.getElementById("vector-j").value;
        k = document.getElementById("vector-k").value;
    }
    else {
        i = document.getElementById("operand-i").value;
        j = document.getElementById("operand-j").value;
        k = document.getElementById("operand-k").value;
    }
    i = parseInt(i);
    j = parseInt(j);
    k = parseInt(k);
    return new Vector(i, j, k);
}
// * Operation when <button> have been clicked
function Operation(choice) {
    var ResultTxt = "";
    var ResultVector = null;
    switch (choice) {
        // * One Vector Operation
        case 1:
            ResultTxt = "Result is " + inputVector(1).size().toFixed(decimalPlaces) + " unit(s).";
            break;
        // TODO Case 2 : Multiply
        // * Two Vector Operation
        case 3:
            ResultVector = inputVector(1).add(inputVector(2));
            ResultTxt = "Result is " + ResultVector.formattedPrint();
            break;
        case 4:
            ResultVector = inputVector(1).subtract(inputVector(2));
            ResultTxt = "Result is " + ResultVector.formattedPrint();
            break;
        case 5:
            ResultTxt = "Result is " + inputVector(1).dotProduct(inputVector(2)).toFixed(decimalPlaces);
            break;
        case 6:
            ResultVector = inputVector(1).crossProduct(inputVector(2));
            ResultTxt = "Result is " + ResultVector.formattedPrint();
            break;
        case 7:
            ResultVector = inputVector(1).projectOn(inputVector(2));
            ResultTxt = "Result is " + ResultVector.formattedPrint();
            break;
        case 8:
            ResultTxt = "Result is " + inputVector(1).parallelogramArea(inputVector(2)).toFixed(decimalPlaces) + " sq.unit.";
            break;
        default:
            ResultTxt = "Unknown Choice, not implemented yet.";
    }
    document.getElementById("ResultTxt").innerHTML = ResultTxt;
}
