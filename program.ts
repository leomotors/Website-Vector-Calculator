/**
 * * program.(js/ts)
 * TODO integrate with website
 */

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
    size() {
        let result = this.i * this.i + this.j * this.j + this.k * this.k
        return Math.sqrt(result)
    }
    multiply(multiplicand: number) {
        let i = this.i * multiplicand
        let j = this.j * multiplicand
        let k = this.k * multiplicand
        return new Vector(i, j, k)
    }
    add(op: Vector) {
        let i = this.i + op.i
        let j = this.j + op.j
        let k = this.k + op.k
        return new Vector(i, j, k)
    }
    subtract(op: Vector) {
        let i = this.i - op.i
        let j = this.j - op.j
        let k = this.k - op.k
        return new Vector(i, j, k)
    }
    dotProduct(op: Vector) {
        let i = this.i * op.i
        let j = this.j * op.j
        let k = this.k * op.k
        return i + j + k
    }
    crossProduct(op: Vector) {
        let i = this.j * op.k - this.k * op.j
        let j = this.k * op.i - this.i * op.k
        let k = this.i * op.j - this.j * op.i
        return new Vector(i, j, k)
    }
    projectOn(op: Vector) {
        let projectedVectorRelSize = this.dotProduct(op) / (op.size() * op.size())
        let w = op.multiply(projectedVectorRelSize)
        return w
    }
    parallelogramArea(op: Vector) {
        return this.crossProduct(op).size()
    }
    formattedPrint(decimalPlaces: number = 2): String {
        let i = this.i.toFixed(decimalPlaces)
        let j = this.j.toFixed(decimalPlaces)
        let k = this.k.toFixed(decimalPlaces)
        return `( ${i} , ${j} , ${k} )`
    }
}

function inputVector(VectorID: number = 1): Vector {
    let i:any, j:any, k:any

    if (VectorID == 1) {
        i = (<HTMLInputElement>document.getElementById("vectori")).value
        j = (<HTMLInputElement>document.getElementById("vectorj")).value
        k = (<HTMLInputElement>document.getElementById("vectork")).value
    }
    else {
        i = (<HTMLInputElement>document.getElementById("operandi")).value
        j = (<HTMLInputElement>document.getElementById("operandj")).value
        k = (<HTMLInputElement>document.getElementById("operandk")).value
    }

    i = parseInt(i)
    j = parseInt(j)
    k = parseInt(k)
    return new Vector(i, j, k)
}

function Operation(choice: number) {
    let ResultTxt = ""
    switch (choice) {
        case 1: ResultTxt = `Result is ${inputVector(1).size()} unit(s).`
            break
        // TODO Case 2 : Multiply
        // TODO Case 3 : Add
        // TODO Case 4 : Subtract
        // TODO Case 5 : Dot Product
        case 6:
            let ResultVector = inputVector(1).crossProduct(inputVector(2))
            ResultTxt = `Result is ${ResultVector.formattedPrint()}`
        // TODO Case 7 : Project Vector on another
        // TODO Case 8 : Parallelogram Area
        default:
            ResultTxt = "Unknown Choice, not implemented yet."
    }
    document.getElementById("ResultTxt").innerHTML = ResultTxt
}
// ! Below is not program feature, test purpose only!
