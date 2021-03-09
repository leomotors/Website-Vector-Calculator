/**
 * * program.(js/ts)
 * * Core Program to run this website
 */

// TODO Add feature to set this value, if possible, support cookie
var decimalPlaces = 2

class Vector {
    i: number
    j: number
    k: number

    constructor(i: number, j: number, k: number) {
        this.i = i
        this.j = j
        this.k = k
    }

    // * Class Method (Vector Calculation)
    size(): number {
        let result = this.i * this.i + this.j * this.j + this.k * this.k
        return Math.sqrt(result)
    }
    multiply(multiplicand: number): Vector {
        let i = this.i * multiplicand
        let j = this.j * multiplicand
        let k = this.k * multiplicand
        return new Vector(i, j, k)
    }
    add(operand: Vector): Vector {
        let i = this.i + operand.i
        let j = this.j + operand.j
        let k = this.k + operand.k
        return new Vector(i, j, k)
    }
    subtract(operand: Vector): Vector {
        let i = this.i - operand.i
        let j = this.j - operand.j
        let k = this.k - operand.k
        return new Vector(i, j, k)
    }
    dotProduct(operand: Vector): number {
        let i = this.i * operand.i
        let j = this.j * operand.j
        let k = this.k * operand.k
        return i + j + k
    }
    crossProduct(operand: Vector): Vector {
        let i = this.j * operand.k - this.k * operand.j
        let j = this.k * operand.i - this.i * operand.k
        let k = this.i * operand.j - this.j * operand.i
        return new Vector(i, j, k)
    }

    // * Class Method that call other Method
    projectOn(operand: Vector): Vector {
        let projectedVectorRelSize = this.dotProduct(operand) / (operand.size() * operand.size())
        let w = operand.multiply(projectedVectorRelSize)
        return w
    }
    parallelogramArea(operand: Vector): number {
        return this.crossProduct(operand).size()
    }

    // * Method for formatted printing
    formattedPrint(): String {
        let i = this.i.toFixed(decimalPlaces)
        let j = this.j.toFixed(decimalPlaces)
        let k = this.k.toFixed(decimalPlaces)
        return `( ${i} , ${j} , ${k} )`
    }
}

// * Function that input Vector from <input>
function inputVector(VectorID: number = 1): Vector {
    let i: any, j: any, k: any

    if (VectorID == 1) {
        i = (<HTMLInputElement>document.getElementById("vector-i")).value
        j = (<HTMLInputElement>document.getElementById("vector-j")).value
        k = (<HTMLInputElement>document.getElementById("vector-k")).value
    }
    else {
        i = (<HTMLInputElement>document.getElementById("operand-i")).value
        j = (<HTMLInputElement>document.getElementById("operand-j")).value
        k = (<HTMLInputElement>document.getElementById("operand-k")).value
    }

    i = parseInt(i)
    j = parseInt(j)
    k = parseInt(k)
    return new Vector(i, j, k)
}

// * Operation when <button> have been clicked
function Operation(choice: number): void {
    let ResultTxt: string = ""
    let ResultVector: Vector = null
    switch (choice) {
        // * One Vector Operation
        case 1: ResultTxt = `Result is ${inputVector(1).size().toFixed(decimalPlaces)} unit(s).`
            break
        // TODO Case 2 : Multiply

        // * Two Vector Operation
        case 3:
            ResultVector = inputVector(1).add(inputVector(2))
            ResultTxt = `Result is ${ResultVector.formattedPrint()}`
            break
        case 4:
            ResultVector = inputVector(1).subtract(inputVector(2))
            ResultTxt = `Result is ${ResultVector.formattedPrint()}`
            break
        case 5:
            ResultTxt = `Result is ${inputVector(1).dotProduct(inputVector(2)).toFixed(decimalPlaces)}`
            break
        case 6:
            ResultVector = inputVector(1).crossProduct(inputVector(2))
            ResultTxt = `Result is ${ResultVector.formattedPrint()}`
            break
        case 7:
            ResultVector = inputVector(1).projectOn(inputVector(2))
            ResultTxt = `Result is ${ResultVector.formattedPrint()}`
            break
        case 8:
            ResultTxt = `Result is ${inputVector(1).parallelogramArea(inputVector(2)).toFixed(decimalPlaces)} sq.unit.`
            break
        default:
            ResultTxt = "Unknown Choice, is invalid or not implemented."
    }

    // * Clean Output
    let ResultClass: any = document.getElementsByClassName("ResultTxt")
    for (let element of ResultClass) {
        element.innerHTML = ""
    }

    // * Show Output
    if (choice <= 2)
        document.getElementById("ResultTxt01").innerHTML = ResultTxt
    else
        document.getElementById("ResultTxt02").innerHTML = ResultTxt
}

// * Set Display Decimal Places
function SetDecimalPlaces() {
    let inputNum: string = (<HTMLInputElement>document.getElementById("DecimalPlacesInput")).value
    decimalPlaces = parseInt(inputNum)
}

// * Temporary, to be changed.
function TurnOnWeeb() {
    let abrvString: string = "url(\"./assets/イレイナとชานมไข่มุก.jpg\")"
    document.getElementById("Body").style.backgroundImage = abrvString
}

function GoHuaHin() {
    let abrvString: string = "url(\"./assets/HuaHin Luxury Resort View.jpg\")"
    document.getElementById("Body").style.backgroundImage = abrvString
}