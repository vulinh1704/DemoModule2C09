import {Room} from "./room";

export class Person {
    private _cccd! : number;
    private _name !: string;
    private _room !: Room;

    constructor(cccd: number, name: string, room: Room) {
        this._cccd = cccd;
        this._name = name;
        this._room = room;
    }

    get cccd(): number {
        return this._cccd;
    }

    set cccd(value: number) {
        this._cccd = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get room(): Room {
        return this._room;
    }

    set room(value: Room) {
        this._room = value;
    }
}