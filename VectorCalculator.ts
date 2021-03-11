/**
 * * VectorCalculator.(js/ts)
 * * Program that take care of Vector Input,
 * * and do calculation, as well as display!
 * * Can be called Core of this website?
 */

// TODO If possible add cookie.
var decimalPlaces: number = 2

// * Vector's Class containing i,j,k field and Method
class Vector {
    readonly i: number
    readonly j: number
    readonly k: number

    constructor(i: number, j: number, k: number) {
        this.i = i
        this.j = j
        this.k = k
    }

    // * Class Method (Vector Calculation)
    size(): number {
        let result: number = this.i * this.i + this.j * this.j + this.k * this.k
        return Math.sqrt(result)
    }
    multiply(multiplicand: number): Vector {
        let i: number = this.i * multiplicand
        let j: number = this.j * multiplicand
        let k: number = this.k * multiplicand
        return new Vector(i, j, k)
    }
    add(operand: Vector): Vector {
        let i: number = this.i + operand.i
        let j: number = this.j + operand.j
        let k: number = this.k + operand.k
        return new Vector(i, j, k)
    }
    subtract(operand: Vector): Vector {
        let i: number = this.i - operand.i
        let j: number = this.j - operand.j
        let k: number = this.k - operand.k
        return new Vector(i, j, k)
    }
    dotProduct(operand: Vector): number {
        let i: number = this.i * operand.i
        let j: number = this.j * operand.j
        let k: number = this.k * operand.k
        return i + j + k
    }
    crossProduct(operand: Vector): Vector {
        let i: number = this.j * operand.k - this.k * operand.j
        let j: number = this.k * operand.i - this.i * operand.k
        let k: number = this.i * operand.j - this.j * operand.i
        return new Vector(i, j, k)
    }

    // * Class Method that call other Method (Derived Math)
    projectOn(operand: Vector): Vector {
        let projectedVectorRelSize: number = this.dotProduct(operand) / (operand.size() * operand.size())
        let w: Vector = operand.multiply(projectedVectorRelSize)
        return w
    }
    parallelogramArea(operand: Vector): number {
        return this.crossProduct(operand).size()
    }

    // * Method for formatted printing
    formattedPrint(): String {
        let i: string = this.i.toFixed(decimalPlaces)
        let j: string = this.j.toFixed(decimalPlaces)
        let k: string = this.k.toFixed(decimalPlaces)
        return `( ${i} , ${j} , ${k} )`
    }
}

// * Function that input Vector from <input>
function inputVector(VectorID: number = 1): Vector {
    let i: string, j: string, k: string

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

    return new Vector(parseFloat(i), parseFloat(j), parseFloat(k))
}

// * Operation when <button> have been clicked
function Operation(choice: number): void {
    let ResultVector: Vector = null // * Store Result Vector
    let ResultTxt: string = "" // * Store Text to display

    switch (choice) {
        // * One Vector Operation
        case 1: ResultTxt = `Result is ${inputVector(1).size().toFixed(decimalPlaces)} unit(s).`
            break
        case 2:
            let multiplicand: number = parseInt(prompt("Please enter Multiplicand"))
            ResultTxt = `Result is ${inputVector(1).multiply(multiplicand).formattedPrint()}`
            break

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
    clearOutput()

    // * Show Output
    let targetNode: HTMLElement
    if (choice <= 2)
        // * One Vector Operation (Display Above)
        targetNode = document.getElementById("ResultTxt01")
    else
        // * Two Vector Operation (Display Below)
        targetNode = document.getElementById("ResultTxt02")
    targetNode.innerHTML = ResultTxt

    // * Add Clear Output Button
    targetNode.appendChild(document.createElement("br"))
    let clearButton: HTMLButtonElement = document.createElement("button")
    clearButton.addEventListener("click", clearOutput)
    clearButton.id = "ClearResultButton"
    targetNode.appendChild(clearButton)

    let clearText: Text = document.createTextNode("Clear Output")
    clearButton.appendChild(clearText)
}

function clearOutput() {
    // * Clean Output
    let ResultClass: HTMLCollectionOf<Element> = document.getElementsByClassName("ResultTxt")
    for (let element of <any>ResultClass) {
        element.innerHTML = ""
    }
    // * Remove Clear Button if it exists
    let clearButton: HTMLElement = document.getElementById("ClearButton")
    if (clearButton != null)
        clearButton.parentNode.removeChild(clearButton)
}

// * Set Display Decimal Places
function SetDecimalPlaces() {
    let inputNum: number = parseInt((<HTMLInputElement>document.getElementById("DecimalPlacesInput")).value)
    if (inputNum >= 0 && inputNum <= 50) {
        decimalPlaces = inputNum
        console.log(`Changed Decimal Places to ${inputNum}`)
    }
    else
        alert("Decimal Places must be between 0-50!")
}
