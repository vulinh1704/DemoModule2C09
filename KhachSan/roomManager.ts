import {Room} from "./Room";

export class RoomManager {
    rooms: Room[] = [];

    add(room: Room) {
        this.rooms.push(room);
    }

    show() {
        return this.rooms;
    }

    findByIndex(index: number) {
        return this.rooms[index];
    }
}