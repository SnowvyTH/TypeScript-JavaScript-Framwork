export const variabletype = () => {
    // ชนิดข้อมูล TypeScript
    // 1. Primitive Type
    // 2. Advanced Type
    // 3. Special Type

    // 1. Primitive Type
    // 1.1 Number
    const age: number = 30
    const pi: number = 3.14
    const price: number = 100.5
    const score: number = -35

    console.log(age)
    console.log(pi)
    console.log(price)
    console.log(score)

    // 1.2 string
    const fname: string = "John"
    const address: string = "Bangkok"
    const message: string = `hello, ${fname}`

    console.log(fname)
    console.log(address)
    console.log(message)

    // 1.3 boolean
    const isAdult: boolean = true
    const isStudent: boolean = false

    console.log(isAdult)
    console.log(isStudent)
}
