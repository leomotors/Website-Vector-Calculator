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
    size() {
        let result = this.i * this.i + this.j * this.j + this.k * this.k
        return Math.sqrt(result)
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
    multiply(multiplicand: number) {
        let i = this.i * multiplicand
        let j = this.j * multiplicand
        let k = this.k * multiplicand
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
        let OneUnitVector = this.dotProduct(op) / (op.size() * op.size())
        let w = op.multiply(OneUnitVector)
        return w
    }
    parrallelogramArea(op: Vector)
    {
        return this.crossProduct(op).size()
    }
}

// ! Below is not program feature, test purpose only!
let a = new Vector(3, 4, 5)
console.log(a.size())
let b = new Vector(7, 8, 9)
console.log(a.parrallelogramArea(b))