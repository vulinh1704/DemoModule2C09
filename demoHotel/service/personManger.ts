import {IManager} from "./IManager";
import {Person} from "../model/person";
import {Room} from "../model/room";

export class PersonManager implements IManager<Person> {
    listPerson: Person[] = [];

    add(t: Person): void {
        this.listPerson.push(t);
    }

    edit(id: number, t: Person): void {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listPerson[index] = t;
        }
    }

    findAll(): Person[] {
        return this.listPerson;
    }

    findById(id: number): number {
        for (let i = 0; i < this.listPerson.length; i++) {
            if (id === this.listPerson[i].cccd) {
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
            this.listPerson.splice(index, 1);
        }
    }

    findByRoom(room: Room) {
        let listPersonInRoom = [];
        for (let i = 0; i < this.listPerson.length; i++) {
            if (room.id == this.listPerson[i].room.id) {
                listPersonInRoom.push(this.listPerson[i]);
            }
        }
        return listPersonInRoom;
    }

}