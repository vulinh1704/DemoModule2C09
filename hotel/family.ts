import {Person} from "./person";

export class Family { // <=> PersonManager
    private _id!: number;
    member!: number;
    listPerson: Person[] = [];

    constructor(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    add(person: Person): void {
        this.listPerson.push(person)
    }

    show() {
        return this.listPerson;
    }

    remove(idPerson: number) {
        for (let i = 0; i < this.listPerson.length; i++) {
            if(this.listPerson[i].id === idPerson){
                this.listPerson.splice(i , 1);
            }
        }
    }
}