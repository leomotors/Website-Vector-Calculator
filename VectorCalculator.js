/**
 * * VectorCalculator.(js/ts)
 * * Program that take care of Vector Input,
 * * and do calculation, as well as display!
 * * Can be called Core of this website?
 */
// TODO If possible add cookie.
var decimalPlaces = 2;
// * Vector's Class containing i,j,k field and Method
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
    // * Class Method that call other Method (Derived Math)
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
    return new Vector(parseFloat(i), parseFloat(j), parseFloat(k));
}
// * Operation when <button> have been clicked
function Operation(choice) {
    var ResultVector = null; // * Store Result Vector
    var ResultTxt = ""; // * Store Text to display
    switch (choice) {
        // * One Vector Operation
        case 1:
            ResultTxt = "Result is " + inputVector(1).size().toFixed(decimalPlaces) + " unit(s).";
            break;
        case 2:
            var multiplicand = parseFloat(prompt("Please enter Multiplicand"));
            ResultTxt = "Result is " + inputVector(1).multiply(multiplicand).formattedPrint();
            break;
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
            ResultTxt = "Unknown Choice, is invalid or not implemented.";
    }
    // * Clean Output
    clearOutput();
    // * Show Output
    var targetNode;
    if (choice <= 2)
        // * One Vector Operation (Display Above)
        targetNode = document.getElementById("ResultTxt01");
    else
        // * Two Vector Operation (Display Below)
        targetNode = document.getElementById("ResultTxt02");
    targetNode.innerHTML = ResultTxt;
    // * Add Clear Output Button
    targetNode.appendChild(document.createElement("br"));
    var clearButton = document.createElement("button");
    clearButton.addEventListener("click", clearOutput);
    clearButton.id = "ClearResultButton";
    targetNode.appendChild(clearButton);
    var clearText = document.createTextNode("Clear Output");
    clearButton.appendChild(clearText);
}
function clearOutput() {
    // * Clean Output
    var ResultClass = document.getElementsByClassName("ResultTxt");
    for (var _i = 0, _a = ResultClass; _i < _a.length; _i++) {
        var element = _a[_i];
        element.innerHTML = "";
    }
    // * Remove Clear Button if it exists
    var clearButton = document.getElementById("ClearButton");
    if (clearButton != null)
        clearButton.parentNode.removeChild(clearButton);
}
// * Set Display Decimal Places
function SetDecimalPlaces() {
    var inputNum = parseInt(document.getElementById("DecimalPlacesInput").value);
    if (inputNum >= 0 && inputNum <= 50) {
        decimalPlaces = inputNum;
        console.log("Changed Decimal Places to " + inputNum);
    }
    else
        alert("Decimal Places must be between 0-50!");
}
