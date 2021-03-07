/**
 * * program.js
 * TODO What to be here is calculation
 * TODO Vector Calculation
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
    add(v: Vector) {
        let i = this.i + v.i
        let j = this.j + v.j
        let k = this.k + v.k
        return new Vector(i, j, k)
    }
    subtract(v: Vector) {
        let i = this.i - v.i
        let j = this.j - v.j
        let k = this.k - v.k
        return new Vector(i, j, k)
    }
    multiple(x: number) {
        let i = this.i * x
        let j = this.j * x
        let k = this.k * x
        return new Vector(i,j,k)
    }
    dotProduct(v: Vector) {
        let i = this.i * v.i
        let j = this.j * v.j
        let k = this.k * v.k
        return i + j + k
    }
    crossProduct(v: Vector) {
        let i = this.j * v.k - this.k * v.j
        let j = this.k * v.i - this.i * v.k
        let k = this.i * v.j - this.j * v.i
        return new Vector(i, j, k)
    }
}

let a = new Vector(3, 4, 5)
console.log(a.size())
let b = new Vector(7, 8, 9)
let c = a.add(b)
console.log(c.size())
console.log(a.dotProduct(b))
console.log(a.crossProduct(b))
console.log(a.multiple(5))