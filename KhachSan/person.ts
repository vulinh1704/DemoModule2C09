import {Room} from "./Room";

export class Person {
    private _cmt!: number;
    private _room!: Room;
    private _rentDay!: number;


    constructor(cmt: number, room: Room, rentDay: number) {
        this._cmt = cmt;
        this._room = room;
        this._rentDay = rentDay;
    }

    get rentDay(): number {
        return this._rentDay;
    }

    set rentDay(value: number) {
        this._rentDay = value;
    }

    get cmt(): number {
        return this._cmt;
    }

    set cmt(value: number) {
        this._cmt = value;
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {
        this._room = value;
    }
}