import { Login, User } from './interfaces'

interface Address {
    city: string
    street: string
    state: string
}

class Employe implements Login{
    
    #id: number
    name: string
    address: Address

    static getEmployeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.#id = id
        this.name = name
        this.address = address
    }

    getId(): number {
        return this.#id
    }

    setId(id: number): void {
        this.#id = id
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`
    }

    login(): User {
        return {name: "Jhon", id: 1, email: "jhonofgirls@g.com"} 
    }
}


let ramon = new Employe(1, "Ramon", {city: "Cacimbs City", street: "You know where", state: "States"})

let nameWithAddress = ramon.getNameWithAddress()

ramon.setId(2)

console.log(ramon)
console.log(ramon.getId())
console.log(nameWithAddress)
console.log(Employe.getEmployeCount())
