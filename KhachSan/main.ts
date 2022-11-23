// import {Hotel} from "./hotel";
// import {Room} from "./Room";
// import {Person} from "./person";
//
// // tạo khách sạn
// let codeGym = new Hotel(1,'CodeGym');
//
// //tạo phòng
// let bob = new Room(1,'C',codeGym);
// let ada = new Room(2,'C', codeGym);
//
// //người
// let hieu = new Person(1, bob, 3);
//
// function rent(person: Person) {
//     let total;
//     if(person.room.type === 'C'){
//         total = person.rentDay * 100;
//     }
//     return total;
// }

import {Hotel} from "./hotel";
import {Room} from "./Room";
import {RoomManager} from "./roomManager";

let input = require('readline-sync');
let codeGym = new Hotel(1, 'CodeGym');
let roomManager = new RoomManager();

function main() {
    let choice = -1;
    let mainMenu = `
        1.Quản Lý Phòng
        2.Hiển thị người đang thuê
        3.Tính tiền
        0.Thoát
    `
    do {
        console.log(mainMenu)
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                showMenuRoom()
                break;
            case 2:
                break;
            case 3:
                break;
        }
    } while (choice != 0)

}

function showMenuRoom() {

    let choice = -1;
    do {
        console.log(`
    1.Thêm phòng
    2.Hiển thị phòng
    0.Thoát
    `)
        choice = +input.question('Enter Choice: ')
        switch (choice) {
            case 1:
                addRoom();
                break;
            case 2:
                showRooms()
                break;
            case 0:
                break;
        }
    } while (choice != 0)

}

function addRoom() {
    let id = +input.question('Enter id Room : ')
    let type = input.question('Enter type: ')
    let room = new Room(id, type, codeGym);
    roomManager.add(room);
    showMenuRoom();
}


function showRooms() {
    let choice = -1;
    do{
        for (let i = 0; i < roomManager.show().length; i++) {
            console.log((i + 1) + ' - Id phòng là : ' + roomManager.show()[i].id);
        }
        console.log(`0.Thoát`)
        let choice = +input.question('Enter Choice: ')
        if (choice != 0) {
            showDetailRoom(choice - 1);
        } else {
            break;
        }
    } while (choice != 0);

}

function showDetailRoom(index: number) {
    let room = roomManager.findByIndex(index);
    console.log('Đây là phòng có Id ' + room.id + 'của khách sạn ' + room.hotel.name)
}

main();
