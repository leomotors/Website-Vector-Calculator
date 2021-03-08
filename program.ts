/**
 * * program.(js/ts)
 * * Core Program to run this website
 */

// TODO Add feature to set this value, if possible, support cookie
var decimalPlaces = 2

function TurnOnWeeb() {
    let abrvString = "url(\"/assets/イレイナとชานมไข่มุก.jpg\")"
    document.getElementById("Body").style.backgroundImage = abrvString
}
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
    add(op: Vector): Vector {
        let i = this.i + op.i
        let j = this.j + op.j
        let k = this.k + op.k
        return new Vector(i, j, k)
    }
    subtract(op: Vector): Vector {
        let i = this.i - op.i
        let j = this.j - op.j
        let k = this.k - op.k
        return new Vector(i, j, k)
    }
    dotProduct(op: Vector): number {
        let i = this.i * op.i
        let j = this.j * op.j
        let k = this.k * op.k
        return i + j + k
    }
    crossProduct(op: Vector): Vector {
        let i = this.j * op.k - this.k * op.j
        let j = this.k * op.i - this.i * op.k
        let k = this.i * op.j - this.j * op.i
        return new Vector(i, j, k)
    }

    // * Class Method that call other Method
    projectOn(op: Vector): Vector {
        let projectedVectorRelSize = this.dotProduct(op) / (op.size() * op.size())
        let w = op.multiply(projectedVectorRelSize)
        return w
    }
    parallelogramArea(op: Vector): number {
        return this.crossProduct(op).size()
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
    let ResultTxt = ""
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
            ResultTxt = "Unknown Choice, not implemented yet."
    }
    document.getElementById("ResultTxt").innerHTML = ResultTxt
}
