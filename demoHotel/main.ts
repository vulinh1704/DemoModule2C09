import {Hotel} from "./model/hotel";
import {RoomManager} from "./service/roomManager";
import {Room} from "./model/room";
import {PersonManager} from "./service/personManger";
import {Person} from "./model/person";

const input = require('readline-sync')
let hotel: Hotel = new Hotel(1, 'Mường thanh');
let roomManager = new RoomManager();
let personManger = new PersonManager();
main()

function main() {
    let choice = -1;
    do {
        console.log(`
        1.Quản lý phòng
        0.Thoát
        `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                showMenuRoom();
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}

function showMenuRoom() {
    let choice = -1;
    do {
        console.log(`
   1.Thêm phòng
   2.Sửa phòng
   3.Hiển thị phòng
   4.Hiển thị người đang thuê
   0.Thoát
   `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                showFormAddRoom();
                break;
            case 2:
                break;
            case 3:
                showRooms()
                break;
            case 4:
                break;
            case 0:
                break;
        }

    } while (choice !== 0);
}

function showFormAddRoom() {
    let id = input.question('Enter id room : ');
    let type = input.question('Enter type: ');
    let dateRent = 0;
    let status = false;
    let room = new Room(id, type, dateRent, status, hotel);
    roomManager.add(room);
    showMenuRoom();
}

function showRooms() {
    let rooms = roomManager.findAll();
    let menuRooms = ''
    for (let i = 0; i < rooms.length; i++) {
        menuRooms += `
        ${i + 1} - Số phòng : ${rooms[i].id}`
    }
    menuRooms += `\n\t0.Thoát`
    let choice = -1;
    do {
        console.log(menuRooms)
        choice = +input.question('Enter choice : ')
        if (choice === 0) {
            break;
        } else {
            let room = roomManager.findByIndex(choice - 1);
            showMenuPerson(room);
        }
    } while (choice !== 0);

    console.log(menuRooms)
}

function showMenuPerson(room: Room) {
    let choice = -1;
    do {
        console.log(`
   ---- Đây là phòng ${room.id}------
   1.Thêm người
   2.Tính tiền
   3.Hiển thị người trong phòng
   0.Thoát
   `)
        choice = +input.question('Enter choice : ')
        switch (choice) {
            case 1:
                addPerson(room);
                break;
            case 2:
                rent(room);
                break;
            case 3:
                showPersonInRoom(room);
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}

function addPerson(room: Room) {
    let cccd = input.question('Enter CCCD: ');
    let name = input.question('Enter name: ');
    if (room.dateRent == 0) {
        let dateRent = input.question('Enter date rent: ');
        room.dateRent = dateRent;
    }
    room.status = true;
    let person = new Person(cccd, name, room);
    personManger.add(person);
    showMenuPerson(room);
}

function showPersonInRoom(room: Room) {
    let listPersonInRoom = personManger.findByRoom(room);
    for (let i = 0; i < listPersonInRoom.length; i++) {
        console.log(listPersonInRoom[i]);
    }
    showMenuPerson(room);
}

function rent(room: Room){
    let total = 0;
    if(room.type == 'C'){
        total = 100 * room.dateRent;
    }
    room.status = false;
    room.dateRent = 0;
    console.log('Tổng thiệt hại của phòng ' + room.id + ' là : '+ total);
    showMenuPerson(room);
}





