import {Family} from "./family";

export class Town { // <=> FamilyManager
    listFamily: Family[] = [];

    add(family: Family) {
        this.listFamily.push(family);
    }

    remove(id: number) {
        let index = this.findById(id);
        if(index === -1){
            return 'Hong thay'
        } else {
            this.listFamily.splice(index, 1);
        }
    }

    findById(id: number) {
        for (let i = 0; i < this.listFamily.length; i++) {
            if(this.listFamily[i].id === id){
                return i;
            }
        }
        return -1;
    }

    show() {
        let str = ''
        for (const family of this.listFamily) {
            for (const person of family.listPerson) {
                str += person.id + person.fullName + '\n'
            }
        }
        return str;
    }
}