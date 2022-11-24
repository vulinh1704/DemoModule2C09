import {Hotel} from "./hotel";

export class Room {
    private _id !: number;
    private _type !: string;
    private _dateRent !: number;
    private _status !: boolean;
    private _hotel!: Hotel;

    constructor(id: number, type: string, dateRent: number, status: boolean, hotel: Hotel) {
        this._id = id;
        this._type = type;
        this._dateRent = dateRent;
        this._status = status;
        this._hotel = hotel;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get dateRent(): number {
        return this._dateRent;
    }

    set dateRent(value: number) {
        this._dateRent = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }

    get hotel(): Hotel {
        return this._hotel;
    }

    set hotel(value: Hotel) {
        this._hotel = value;
    }
}