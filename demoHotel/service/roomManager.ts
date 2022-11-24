import {Room} from "../model/room";
import {IManager} from "./IManager";

export class RoomManager implements IManager<Room> {
    listRoom: Room[] = [];

    add(t: Room): void {
        this.listRoom.push(t);
    }

    edit(id: number, t: Room): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listRoom[index] = t;
        }
    }

    findAll(): Room[] {
        return this.listRoom;
    }

    findById(id: number): number {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (id === this.listRoom[i].id) {
                return i;
            }
        }
        return -1;
    }

    remove(id: number): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listRoom.splice(index, 1);
        }
    }

    findByIndex(index: number): Room {
        return this.listRoom[index];
    }
}