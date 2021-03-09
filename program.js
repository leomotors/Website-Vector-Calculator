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
    Vector.prototype.add = function (operand) {
        var i = this.i + operand.i;
        var j = this.j + operand.j;
        var k = this.k + operand.k;
        return new Vector(i, j, k);
    };
    Vector.prototype.subtract = function (operand) {
        var i = this.i - operand.i;
        var j = this.j - operand.j;
        var k = this.k - operand.k;
        return new Vector(i, j, k);
    };
    Vector.prototype.dotProduct = function (operand) {
        var i = this.i * operand.i;
        var j = this.j * operand.j;
        var k = this.k * operand.k;
        return i + j + k;
    };
    Vector.prototype.crossProduct = function (operand) {
        var i = this.j * operand.k - this.k * operand.j;
        var j = this.k * operand.i - this.i * operand.k;
        var k = this.i * operand.j - this.j * operand.i;
        return new Vector(i, j, k);
    };
    // * Class Method that call other Method
    Vector.prototype.projectOn = function (operand) {
        var projectedVectorRelSize = this.dotProduct(operand) / (operand.size() * operand.size());
        var w = operand.multiply(projectedVectorRelSize);
        return w;
    };
    Vector.prototype.parallelogramArea = function (operand) {
        return this.crossProduct(operand).size();
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
// * operation when <button> have been clicked
function operation(choice) {
    var ResultTxt = "";
    var ResultVector = null;
    switch (choice) {
        // * One Vector operation
        case 1:
            ResultTxt = "Result is " + inputVector(1).size().toFixed(decimalPlaces) + " unit(s).";
            break;
        // TODO Case 2 : Multiply
        // * Two Vector operation
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
            ResultTxt = "Unknown Choice, is invalid or not implemented.";
    }
    // * Clean Output
    var ResultClass = document.getElementsByClassName("ResultTxt");
    for (var _i = 0, ResultClass_1 = ResultClass; _i < ResultClass_1.length; _i++) {
        var element = ResultClass_1[_i];
        element.innerHTML = "";
    }
    // * Show Output
    if (choice <= 2)
        document.getElementById("ResultTxt01").innerHTML = ResultTxt;
    else
        document.getElementById("ResultTxt02").innerHTML = ResultTxt;
}
// * Set Display Decimal Places
function SetDecimalPlaces() {
    alert(parseInt(document.getElementById("DecimalPlacesInput").value));
}
// * Temporary, to be changed.
function TurnOnWeeb() {
    var abrvString = "url(\"./assets/イレイナとชานมไข่มุก.jpg\")";
    document.getElementById("Body").style.backgroundImage = abrvString;
}
function GoHuaHin() {
    var abrvString = "url(\"./assets/HuaHin Luxury Resort View.jpg\")";
    document.getElementById("Body").style.backgroundImage = abrvString;
}
