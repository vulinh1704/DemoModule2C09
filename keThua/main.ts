import {Triangle} from "./triangle";

let triangle = new Triangle('tam giac', 'Tim', 3, 4, 5);
import readline from 'readline-sync';
let name = readline.question('May I have your name? ');
function main() {
    console.log(typeof triangle.getTriangle())
}
main()