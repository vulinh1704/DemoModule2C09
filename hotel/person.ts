export class Person {
    private _id!: number;
    private _fullName!: string;
    private _age!: number;
    private _job !: string;

    constructor(id: number, fullName: string, age: number, job: string) {
        this._id = id;
        this._fullName = fullName;
        this._age = age;
        this._job = job;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}