import {IManager} from "./IManager";
import {Hotel} from "../model/hotel";

export class HotelManager implements IManager<Hotel> {
    listHotel: Hotel[] = []
    add(t: Hotel): void {
        this.listHotel.push(t);
    }

    edit(id: number, t: Hotel): void {

    }

    findAll(): Hotel[] {
        return [];
    }

    findById(id: number): number {
        return 0;
    }

    remove(id: number): void {
    }

}