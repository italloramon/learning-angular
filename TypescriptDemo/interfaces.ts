export interface User {
    name: string
    age?: number
    id: number
    email: string
}

let user: User = {name: "Jhon", id: 1, email: "jhonofgirls@g.com"}

interface Employee extends User {

}

let employee: Employee = {name: "Peter", id: 2, email: "peterofgirls@g.com"}

export interface Login {
    login(): User;
}