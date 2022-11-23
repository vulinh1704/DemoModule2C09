import {Hotel} from "./hotel";

export class Room {
    private _id !: number;
    private _type !: string;
    private _hotel !: Hotel;

    constructor(id: number, type: string, hotel: Hotel) {
        this._id = id;
        this._type = type;
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

    get hotel(): Hotel {
        return this._hotel;
    }

    set hotel(value: Hotel) {
        this._hotel = value;
    }
}