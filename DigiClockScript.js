let digiClock = document.querySelector("#DigiClock");    

let one_one = document.querySelector("#DigiClock .Number_1 .one-one");
let one_two = document.querySelector("#DigiClock .Number_1 .one-two");
let one_three = document.querySelector("#DigiClock .Number_1 .one-three");
let one_four = document.querySelector("#DigiClock .Number_1 .one-four");
let one_five = document.querySelector("#DigiClock .Number_1 .one-five");
let one_six = document.querySelector("#DigiClock .Number_1 .one-six");
let one_seven = document.querySelector("#DigiClock .Number_1 .one-seven");
    
let two_one = document.querySelector("#DigiClock .Number_2 .two-one");
let two_two = document.querySelector("#DigiClock .Number_2 .two-two");
let two_three = document.querySelector("#DigiClock .Number_2 .two-three");
let two_four = document.querySelector("#DigiClock .Number_2 .two-four");
let two_five = document.querySelector("#DigiClock .Number_2 .two-five");
let two_six = document.querySelector("#DigiClock .Number_2 .two-six");
let two_seven = document.querySelector("#DigiClock .Number_2 .two-seven");
    
let three_one = document.querySelector("#DigiClock .Number_3 .three-one");
let three_two = document.querySelector("#DigiClock .Number_3 .three-two");
let three_three = document.querySelector("#DigiClock .Number_3 .three-three");
let three_four = document.querySelector("#DigiClock .Number_3 .three-four");
let three_five = document.querySelector("#DigiClock .Number_3 .three-five");
let three_six = document.querySelector("#DigiClock .Number_3 .three-six");
let three_seven = document.querySelector("#DigiClock .Number_3 .three-seven");
    
let four_one = document.querySelector("#DigiClock .Number_4 .four-one");
let four_two = document.querySelector("#DigiClock .Number_4 .four-two");
let four_three = document.querySelector("#DigiClock .Number_4 .four-three");
let four_four = document.querySelector("#DigiClock .Number_4 .four-four");
let four_five = document.querySelector("#DigiClock .Number_4 .four-five");
let four_six = document.querySelector("#DigiClock .Number_4 .four-six");
let four_seven = document.querySelector("#DigiClock .Number_4 .four-seven");
    
let five_one = document.querySelector("#DigiClock .Number_5 .five-one");
let five_two = document.querySelector("#DigiClock .Number_5 .five-two");
let five_three = document.querySelector("#DigiClock .Number_5 .five-three");
let five_four = document.querySelector("#DigiClock .Number_5 .five-four");
let five_five = document.querySelector("#DigiClock .Number_5 .five-five");
let five_six = document.querySelector("#DigiClock .Number_5 .five-six");
let five_seven = document.querySelector("#DigiClock .Number_5 .five-seven");
    
let six_one = document.querySelector("#DigiClock .Number_6 .six-one");
let six_two = document.querySelector("#DigiClock .Number_6 .six-two");
let six_three = document.querySelector("#DigiClock .Number_6 .six-three");
let six_four = document.querySelector("#DigiClock .Number_6 .six-four");
let six_five = document.querySelector("#DigiClock .Number_6 .six-five");
let six_six = document.querySelector("#DigiClock .Number_6 .six-six");
let six_seven = document.querySelector("#DigiClock .Number_6 .six-seven");

let segColour = "#000000";

function clearSeconds(){
    five_one.style.stroke="gray";
    five_two.style.stroke="gray";
    five_three.style.stroke="gray";
    five_four.style.stroke="gray";
    five_five.style.stroke="gray";
    five_six.style.stroke="gray";
    five_seven.style.stroke="gray";
        
    six_one.style.stroke="gray";
    six_two.style.stroke="gray";
    six_three.style.stroke="gray";
    six_four.style.stroke="gray";
    six_five.style.stroke="gray";
    six_six.style.stroke="gray";
    six_seven.style.stroke="gray";
}
function clearMinutes(){
    three_one.style.stroke="gray";
    three_two.style.stroke="gray";
    three_three.style.stroke="gray";
    three_four.style.stroke="gray";
    three_five.style.stroke="gray";
    three_six.style.stroke="gray";
    three_seven.style.stroke="gray";
        
    four_one.style.stroke="gray";
    four_two.style.stroke="gray";
    four_three.style.stroke="gray";
    four_four.style.stroke="gray";
    four_five.style.stroke="gray";
    four_six.style.stroke="gray";
    four_seven.style.stroke="gray";
}
function clearHours(){
    one_one.style.stroke="gray";
    one_two.style.stroke="gray";
    one_three.style.stroke="gray";
    one_four.style.stroke="gray";
    one_five.style.stroke="gray";
    one_six.style.stroke="gray";
    one_seven.style.stroke="gray";
        
    two_one.style.stroke="gray";
    two_two.style.stroke="gray";
    two_three.style.stroke="gray";
    two_four.style.stroke="gray";
    two_five.style.stroke="gray";
    two_six.style.stroke="gray";
    two_seven.style.stroke="gray";
}
/*==============================================*/
/*==============================================*/
function second01(){
    six_four.style.stroke=segColour;
    six_five.style.stroke=segColour;
}
function second02(){
    six_three.style.stroke=segColour;
    six_four.style.stroke=segColour;
    six_seven.style.stroke=segColour;
    six_one.style.stroke=segColour;
    six_six.style.stroke=segColour;
}
function second03(){
    six_three.style.stroke=segColour;
    six_four.style.stroke=segColour;
    six_five.style.stroke=segColour;
    six_six.style.stroke=segColour;
    six_seven.style.stroke=segColour;
}
function second04(){
    six_four.style.stroke=segColour;
    six_five.style.stroke=segColour;
    six_seven.style.stroke=segColour;
    six_two.style.stroke=segColour;
}
function second05(){
    six_three.style.stroke=segColour;
    six_two.style.stroke=segColour;
    six_seven.style.stroke=segColour;
    six_five.style.stroke=segColour;
    six_six.style.stroke=segColour;
}
function second06(){
    six_three.style.stroke=segColour;
    six_two.style.stroke=segColour;
    six_one.style.stroke=segColour;
    six_six.style.stroke=segColour;
    six_seven.style.stroke=segColour;
    six_five.style.stroke=segColour;
}
function second07(){
    six_three.style.stroke=segColour;
    six_four.style.stroke=segColour;
    six_five.style.stroke=segColour;
}
function second08(){
    six_one.style.stroke=segColour;
    six_two.style.stroke=segColour;
    six_three.style.stroke=segColour;
    six_four.style.stroke=segColour;
    six_five.style.stroke=segColour;
    six_six.style.stroke=segColour;
    six_seven.style.stroke=segColour;
}
function second09(){
    six_two.style.stroke=segColour;
    six_three.style.stroke=segColour;
    six_four.style.stroke=segColour;
    six_seven.style.stroke=segColour;
    six_five.style.stroke=segColour;
}
function second00(){
    six_one.style.stroke=segColour;
    six_two.style.stroke=segColour;
    six_three.style.stroke=segColour;
    six_four.style.stroke=segColour;
    six_five.style.stroke=segColour;
    six_six.style.stroke=segColour;
}
/*==============================================*/
function second10(){
    five_four.style.stroke=segColour;
    five_five.style.stroke=segColour;
}
function second20(){
    five_three.style.stroke=segColour;
    five_four.style.stroke=segColour;
    five_seven.style.stroke=segColour;
    five_one.style.stroke=segColour;
    five_six.style.stroke=segColour;
}
function second30(){
    five_three.style.stroke=segColour;
    five_four.style.stroke=segColour;
    five_five.style.stroke=segColour;
    five_six.style.stroke=segColour;
    five_seven.style.stroke=segColour;
}
function second40(){
    five_four.style.stroke=segColour;
    five_five.style.stroke=segColour;
    five_seven.style.stroke=segColour;
    five_two.style.stroke=segColour;
}
function second50(){
    five_three.style.stroke=segColour;
    five_two.style.stroke=segColour;
    five_seven.style.stroke=segColour;
    five_five.style.stroke=segColour;
    five_six.style.stroke=segColour;
}
function second60(){
    five_three.style.stroke=segColour;
    five_two.style.stroke=segColour;
    five_one.style.stroke=segColour;
    five_six.style.stroke=segColour;
    five_seven.style.stroke=segColour;
    five_five.style.stroke=segColour;
}
function second70(){
    five_three.style.stroke=segColour;
    five_four.style.stroke=segColour;
    five_five.style.stroke=segColour;
}
function second80(){
    five_one.style.stroke=segColour;
    five_two.style.stroke=segColour;
    five_three.style.stroke=segColour;
    five_four.style.stroke=segColour;
    five_five.style.stroke=segColour;
    five_six.style.stroke=segColour;
    five_seven.style.stroke=segColour;
}
function second90(){
    five_two.style.stroke=segColour;
    five_three.style.stroke=segColour;
    five_four.style.stroke=segColour;
    five_seven.style.stroke=segColour;
    five_five.style.stroke=segColour;
}
/*==============================================*/
/*==============================================*/
function min01(){
    four_four.style.stroke=segColour;
    four_five.style.stroke=segColour;
}
function min02(){
    four_three.style.stroke=segColour;
    four_four.style.stroke=segColour;
    four_seven.style.stroke=segColour;
    four_one.style.stroke=segColour;
    four_six.style.stroke=segColour;
}
function min03(){
    four_three.style.stroke=segColour;
    four_four.style.stroke=segColour;
    four_five.style.stroke=segColour;
    four_six.style.stroke=segColour;
    four_seven.style.stroke=segColour;
}
function min04(){
    four_four.style.stroke=segColour;
    four_five.style.stroke=segColour;
    four_seven.style.stroke=segColour;
    four_two.style.stroke=segColour;
}
function min05(){
    four_three.style.stroke=segColour;
    four_two.style.stroke=segColour;
    four_seven.style.stroke=segColour;
    four_five.style.stroke=segColour;
    four_six.style.stroke=segColour;
}
function min06(){
    four_three.style.stroke=segColour;
    four_two.style.stroke=segColour;
    four_one.style.stroke=segColour;
    four_six.style.stroke=segColour;
    four_seven.style.stroke=segColour;
    four_five.style.stroke=segColour;
}
function min07(){
    four_three.style.stroke=segColour;
    four_four.style.stroke=segColour;
    four_five.style.stroke=segColour;
}
function min08(){
    four_one.style.stroke=segColour;
    four_two.style.stroke=segColour;
    four_three.style.stroke=segColour;
    four_four.style.stroke=segColour;
    four_five.style.stroke=segColour;
    four_six.style.stroke=segColour;
    four_seven.style.stroke=segColour;
}
function min09(){
    four_two.style.stroke=segColour;
    four_three.style.stroke=segColour;
    four_four.style.stroke=segColour;
    four_seven.style.stroke=segColour;
    four_five.style.stroke=segColour;
}
function min00(){
    four_one.style.stroke=segColour;
    four_two.style.stroke=segColour;
    four_three.style.stroke=segColour;
    four_four.style.stroke=segColour;
    four_five.style.stroke=segColour;
    four_six.style.stroke=segColour;
}
/*==============================================*/
function min10(){
    three_four.style.stroke=segColour;
    three_five.style.stroke=segColour;
}
function min20(){
    three_three.style.stroke=segColour;
    three_four.style.stroke=segColour;
    three_seven.style.stroke=segColour;
    three_one.style.stroke=segColour;
    three_six.style.stroke=segColour;
}
function min30(){
    three_three.style.stroke=segColour;
    three_four.style.stroke=segColour;
    three_five.style.stroke=segColour;
    three_six.style.stroke=segColour;
    three_seven.style.stroke=segColour;
}
function min40(){
    three_four.style.stroke=segColour;
    three_five.style.stroke=segColour;
    three_seven.style.stroke=segColour;
    three_two.style.stroke=segColour;
}
function min50(){
    three_three.style.stroke=segColour;
    three_two.style.stroke=segColour;
    three_seven.style.stroke=segColour;
    three_five.style.stroke=segColour;
    three_six.style.stroke=segColour;
}
function min60(){
    three_three.style.stroke=segColour;
    three_two.style.stroke=segColour;
    three_one.style.stroke=segColour;
    three_six.style.stroke=segColour;
    three_seven.style.stroke=segColour;
    three_five.style.stroke=segColour;
}
function min70(){
    three_three.style.stroke=segColour;
    three_four.style.stroke=segColour;
    three_five.style.stroke=segColour;
}
function min80(){
    three_one.style.stroke=segColour;
    three_two.style.stroke=segColour;
    three_three.style.stroke=segColour;
    three_four.style.stroke=segColour;
    three_five.style.stroke=segColour;
    three_six.style.stroke=segColour;
    three_seven.style.stroke=segColour;
}
function min90(){
    three_two.style.stroke=segColour;
    three_three.style.stroke=segColour;
    three_four.style.stroke=segColour;
    three_seven.style.stroke=segColour;
    three_five.style.stroke=segColour;
}
/*==============================================*/
/*==============================================*/
function hour01(){
    two_four.style.stroke=segColour;
    two_five.style.stroke=segColour;
}
function hour02(){
    two_three.style.stroke=segColour;
    two_four.style.stroke=segColour;
    two_seven.style.stroke=segColour;
    two_one.style.stroke=segColour;
    two_six.style.stroke=segColour;
}
function hour03(){
    two_three.style.stroke=segColour;
    two_four.style.stroke=segColour;
    two_five.style.stroke=segColour;
    two_six.style.stroke=segColour;
    two_seven.style.stroke=segColour;
}
function hour04(){
    two_four.style.stroke=segColour;
    two_five.style.stroke=segColour;
    two_seven.style.stroke=segColour;
    two_two.style.stroke=segColour;
}
function hour05(){
    two_three.style.stroke=segColour;
    two_two.style.stroke=segColour;
    two_seven.style.stroke=segColour;
    two_five.style.stroke=segColour;
    two_six.style.stroke=segColour;
}
function hour06(){
    two_three.style.stroke=segColour;
    two_two.style.stroke=segColour;
    two_one.style.stroke=segColour;
    two_six.style.stroke=segColour;
    two_seven.style.stroke=segColour;
    two_five.style.stroke=segColour;
}
function hour07(){
    two_three.style.stroke=segColour;
    two_four.style.stroke=segColour;
    two_five.style.stroke=segColour;
}
function hour08(){
    two_one.style.stroke=segColour;
    two_two.style.stroke=segColour;
    two_three.style.stroke=segColour;
    two_four.style.stroke=segColour;
    two_five.style.stroke=segColour;
    two_six.style.stroke=segColour;
    two_seven.style.stroke=segColour;
}
function hour09(){
    two_two.style.stroke=segColour;
    two_three.style.stroke=segColour;
    two_four.style.stroke=segColour;
    two_seven.style.stroke=segColour;
    two_five.style.stroke=segColour;
}
function hour00(){
    two_one.style.stroke=segColour;
    two_two.style.stroke=segColour;
    two_three.style.stroke=segColour;
    two_four.style.stroke=segColour;
    two_five.style.stroke=segColour;
    two_six.style.stroke=segColour;
}
/*==============================================*/
function hour10(){
    one_four.style.stroke=segColour;
    one_five.style.stroke=segColour;
}
function hour20(){
    one_three.style.stroke=segColour;
    one_four.style.stroke=segColour;
    one_seven.style.stroke=segColour;
    one_one.style.stroke=segColour;
    one_six.style.stroke=segColour;
}
function hour30(){
    one_three.style.stroke=segColour;
    one_four.style.stroke=segColour;
    one_five.style.stroke=segColour;
    one_six.style.stroke=segColour;
    one_seven.style.stroke=segColour;
}
function hour40(){
    one_four.style.stroke=segColour;
    one_five.style.stroke=segColour;
    one_seven.style.stroke=segColour;
    one_two.style.stroke=segColour;
}
function hour50(){
    one_three.style.stroke=segColour;
    one_two.style.stroke=segColour;
    one_seven.style.stroke=segColour;
    one_five.style.stroke=segColour;
    one_six.style.stroke=segColour;
}
function hour60(){
    one_three.style.stroke=segColour;
    one_two.style.stroke=segColour;
    one_one.style.stroke=segColour;
    one_six.style.stroke=segColour;
    one_seven.style.stroke=segColour;
    one_five.style.stroke=segColour;
}
function hour70(){
    one_three.style.stroke=segColour;
    one_four.style.stroke=segColour;
    one_five.style.stroke=segColour;
}
function hour80(){
    one_one.style.stroke=segColour;
    one_two.style.stroke=segColour;
    one_three.style.stroke=segColour;
    one_four.style.stroke=segColour;
    one_five.style.stroke=segColour;
    one_six.style.stroke=segColour;
    one_seven.style.stroke=segColour;
}
function hour90(){
    one_two.style.stroke=segColour;
    one_three.style.stroke=segColour;
    one_four.style.stroke=segColour;
    one_seven.style.stroke=segColour;
    one_five.style.stroke=segColour;
}
/*==============================================*/
/*==============================================*/
function updateSeconds() {  
    
    let now = new Date();
    let sec = now.getSeconds();

    switch (sec) {
        case 0:
            clearSeconds();
            second00();
            
            clearMinutes();
            updateMinutes();
            break;
        case 1:
            clearSeconds();
            second01();
            break;
        case 2:
            clearSeconds();
            second02();
            break;
        case 3:
            clearSeconds();
            second03();
            break;
        case 4:
            clearSeconds();
            second04();
            break;
        case 5:
            clearSeconds();
            second05();
            break;
        case 6:
            clearSeconds();
            second06();
            break;
        case 7:
            clearSeconds();
            second07();
            break;
        case 8:
            clearSeconds();
            second08();
            break;
        case 9:
            clearSeconds();
            second09();
            break;
        case 10:
            clearSeconds();
            second10();
            second00();
            break;
        case 11:
            clearSeconds();
            second10();
            second01();
            break;
        case 12:
            clearSeconds();
            second10();
            second02();
            break;
        case 13:
            clearSeconds();
            second10();
            second03();
            break;
        case 14:
            clearSeconds();
            second10();
            second04();
            break;
        case 15:
            clearSeconds();
            second10();
            second05();
            break;
        case 16:
            clearSeconds();
            second10();
            second06();
            break;
        case 17:
            clearSeconds();
            second10();
            second07();
            break;
        case 18:
            clearSeconds();
            second10();
            second08();
            break;
        case 19:
            clearSeconds();
            second10();
            second09();
            break;
        case 20:
            clearSeconds();
            second20();
            second00();
            break;
        case 21:
            clearSeconds();
            second20();
            second01();
            break;
        case 22:
            clearSeconds();
            second20();
            second02();
            break;
        case 23:
            clearSeconds();
            second20();
            second03();
            break;
        case 24:
            clearSeconds();
            second20();
            second04();
            break;
        case 25:
            clearSeconds();
            second20();
            second05();
            break;
        case 26:
            clearSeconds();
            second20();
            second06();
            break;
        case 27:
            clearSeconds();
            second20();
            second07();
            break;
        case 28:
            clearSeconds();
            second20();
            second08();
            break;
        case 29:
            clearSeconds();
            second20();
            second09();
            break;
        case 30:
            clearSeconds();
            second30();
            second00();
            break;
        case 31:
            clearSeconds();
            second30();
            second01();
            break;
        case 32:
            clearSeconds();
            second30();
            second02();
            break;
        case 33:
            clearSeconds();
            second30();
            second03();
            break;
        case 34:
            clearSeconds();
            second30();
            second04();
            break;
        case 35:
            clearSeconds();
            second30();
            second05();
            break;
        case 36:
            clearSeconds();
            second30();
            second06();
            break;
        case 37:
            clearSeconds();
            second30();
            second07();
            break;
        case 38:
            clearSeconds();
            second30();
            second08();
            break;
        case 39:
            clearSeconds();
            second30();
            second09();
            break;
        case 40:
            clearSeconds();
            second40();
            second00();
            break;
        case 41:
            clearSeconds();
            second40();
            second01();
            break;
        case 42:
            clearSeconds();
            second40();
            second02();
            break;
        case 43:
            clearSeconds();
            second40();
            second03();
            break;
        case 44:
            clearSeconds();
            second40();
            second04();
            break;
        case 45:
            clearSeconds();
            second40();
            second05();
            break;
        case 46:
            clearSeconds();
            second40();
            second06();
            break;
        case 47:
            clearSeconds();
            second40();
            second07();
            break;
        case 48:
            clearSeconds();
            second40();
            second08();
            break;
        case 49:
            clearSeconds();
            second40();
            second09();
            break;
        case 50:
            clearSeconds();
            second50();
            second00();
            break;
        case 51:
            clearSeconds();
            second50();
            second01();
            break;
        case 52:
            clearSeconds();
            second50();
            second02();
            break;
        case 53:
            clearSeconds();
            second50();
            second03();
            break;
        case 54:
            clearSeconds();
            second50();
            second04();
            break;
        case 55:
            clearSeconds();
            second50();
            second05();
            break;
        case 56:
            clearSeconds();
            second50();
            second06();
            break;
        case 57:
            clearSeconds();
            second50();
            second07();
            break;
        case 58:
            clearSeconds();
            second50();
            second08();
            break;
        case 59:
            clearSeconds();
            second50();
            second09();
            break;
        default:
            clearSeconds();
    }          
    console.log(sec);
}

function updateMinutes(){
    
    let now = new Date();
    let min = now.getMinutes();
    
    switch (min) {
        case 0:
            clearMinutes();
            min00();
            
            clearHours();
            updateHours();
            break;
        case 1:
            clearMinutes();
            min01();
            break;
        case 2:
            clearMinutes();
            min02();
            break;
        case 3:
            clearMinutes();
            min03();
            break;
        case 4:
            clearMinutes();
            min04();
            break;
        case 5:
            clearMinutes();
            min05();
            break;
        case 6:
            clearMinutes();
            min06();
            break;
        case 7:
            clearMinutes();
            min07();
            break;
        case 8:
            clearMinutes();
            min08();
            break;
        case 9:
            clearMinutes();
            min09();
            break;
        case 10:
            clearMinutes();
            min10();
            min00();
            break;
        case 11:
            clearMinutes();
            min10();
            min01();
            break;
        case 12:
            clearMinutes();
            min10();
            min02();
            break;
        case 13:
            clearMinutes();
            min10();
            min03();
            break;
        case 14:
            clearMinutes();
            min10();
            min04();
            break;
        case 15:
            clearMinutes();
            min10();
            min05();
            break;
        case 16:
            clearMinutes();
            min10();
            min06();
            break;
        case 17:
            clearMinutes();
            min10();
            min07();
            break;
        case 18:
            clearMinutes();
            min10();
            min08();
            break;
        case 19:
            clearMinutes();
            min10();
            min09();
            break;
        case 20:
            clearMinutes();
            min20();
            min00();
            break;
        case 21:
            clearMinutes();
            min20();
            min01();
            break;
        case 22:
            clearMinutes();
            min20();
            min02();
            break;
        case 23:
            clearMinutes();
            min20();
            min03();
            break;
        case 24:
            clearMinutes();
            min20();
            min04();
            break;
        case 25:
            clearMinutes();
            min20();
            min05();
            break;
        case 26:
            clearMinutes();
            min20();
            min06();
            break;
        case 27:
            clearMinutes();
            min20();
            min07();
            break;
        case 28:
            clearMinutes();
            min20();
            min08();
            break;
        case 29:
            clearMinutes();
            min20();
            min09();
            break;
        case 30:
            clearMinutes();
            min30();
            min00();
            break;
        case 31:
            clearMinutes();
            min30();
            min01();
            break;
        case 32:
            clearMinutes();
            min30();
            min02();
            break;
        case 33:
            clearMinutes();
            min30();
            min03();
            break;
        case 34:
            clearMinutes();
            min30();
            min04();
            break;
        case 35:
            clearMinutes();
            min30();
            min05();
            break;
        case 36:
            clearMinutes();
            min30();
            min06();
            break;
        case 37:
            clearMinutes();
            min30();
            min07();
            break;
        case 38:
            clearMinutes();
            min30();
            min08();
            break;
        case 39:
            clearMinutes();
            min30();
            min09();
            break;
        case 40:
            clearMinutes();
            min40();
            min00();
            break;
        case 41:
            clearMinutes();
            min40();
            min01();
            break;
        case 42:
            clearMinutes();
            min40();
            min02();
            break;
        case 43:
            clearMinutes();
            min40();
            min03();
            break;
        case 44:
            clearMinutes();
            min40();
            min04();
            break;
        case 45:
            clearMinutes();
            min40();
            min05();
            break;
        case 46:
            clearMinutes();
            min40();
            min06();
            break;
        case 47:
            clearMinutes();
            min40();
            min07();
            break;
        case 48:
            clearMinutes();
            min40();
            min08();
            break;
        case 49:
            clearMinutes();
            min40();
            min09();
            break;
        case 50:
            clearMinutes();
            min50();
            min00();
            break;
        case 51:
            clearMinutes();
            min50();
            min01();
            break;
        case 52:
            clearMinutes();
            min50();
            min02();
            break;
        case 53:
            clearMinutes();
            min50();
            min03();
            break;
        case 54:
            clearMinutes();
            min50();
            min04();
            break;
        case 55:
            clearMinutes();
            min50();
            min05();
            break;
        case 56:
            clearMinutes();
            min50();
            min06();
            break;
        case 57:
            clearMinutes();
            min50();
            min07();
            break;
        case 58:
            clearMinutes();
            min50();
            min08();
            break;
        case 59:
            clearMinutes();
            min50();
            min09();
            break;
    } 
    
    
    console.log(min);
}

function updateHours(){
    
    let now = new Date();
    let hour = now.getHours();
    
    switch (hour) {
        case 0:
            clearHours();
            hour00();
            break;
        case 1:
            clearHours();
            hour01();
            break;
        case 2:
            clearHours();
            hour02();
            break;
        case 3:
            clearHours();
            hour03();
            break;
        case 4:
            clearHours();
            hour04();
            break;
        case 5:
            clearHours();
            hour05();
            break;
        case 6:
            clearHours();
            hour06();
            break;
        case 7:
            clearHours();
            hour07();
            break;
        case 8:
            clearHours();
            hour08();
            break;
        case 9:
            clearHours();
            hour09();
            break;
        case 10:
            clearHours();
            hour10();
            hour00();
            break;
        case 11:
            clearHours();
            hour10();
            hour01();
            break;
        case 12:
            clearHours();
            hour10();
            hour02();
            break;
        case 13:
            clearHours();
            hour10();
            hour03();
            break;
        case 14:
            clearHours();
            hour10();
            hour04();
            break;
        case 15:
            clearHours();
            hour10();
            hour05();
            break;
        case 16:
            clearHours();
            hour10();
            hour06();
            break;
        case 17:
            clearHours();
            hour10();
            hour07();
            break;
        case 18:
            clearHours();
            min10();
            min08();
            break;
        case 19:
            clearHours();
            hour10();
            hour09();
            break;
        case 20:
            clearHours();
            hour20();
            hour00();
            break;
        case 21:
            clearHours();
            hour20();
            hour01();
            break;
        case 22:
            clearHours();
            hour20();
            hour02();
            break;
        case 23:
            clearHours();
            hour20();
            hour03();
            break;
        case 24:
            clearHours();
            hour20();
            hour04();
            break;
        case 25:
            clearHours();
            hour20();
            hour05();
            break;
        case 26:
            clearHours();
            hour20();
            hour06();
            break;
        case 27:
            clearHours();
            hour20();
            hour07();
            break;
        case 28:
            clearHours();
            hour20();
            hour08();
            break;
        case 29:
            clearHours();
            hour20();
            hour09();
            break;
        case 30:
            clearHours();
            hour30();
            hour00();
            break;
        case 31:
            clearHours();
            hour30();
            hour01();
            break;
        case 32:
            clearHours();
            hour30();
            hour02();
            break;
        case 33:
            clearHours();
            hour30();
            hour03();
            break;
        case 34:
            clearHours();
            hour30();
            hour04();
            break;
        case 35:
            clearHours();
            hour30();
            hour05();
            break;
        case 36:
            clearHours();
            hour30();
            hour06();
            break;
        case 37:
            clearHours();
            hour30();
            hour07();
            break;
        case 38:
            clearHours();
            hour30();
            hour08();
            break;
        case 39:
            clearHours();
            hour30();
            hour09();
            break;
        case 40:
            clearHours();
            hour40();
            hour00();
            break;
        case 41:
            clearHours();
            hour40();
            hour01();
            break;
        case 42:
            clearHours();
            hour40();
            hour02();
            break;
        case 43:
            clearHours();
            hour40();
            hour03();
            break;
        case 44:
            clearHours();
            hour40();
            hour04();
            break;
        case 45:
            clearHours();
            hour40();
            hour05();
            break;
        case 46:
            clearHours();
            hour40();
            hour06();
            break;
        case 47:
            clearHours();
            hour40();
            hour07();
            break;
        case 48:
            clearHours();
            hour40();
            hour08();
            break;
        case 49:
            clearHours();
            hour40();
            hour09();
            break;
        case 50:
            clearHours();
            hour50();
            hour00();
            break;
        case 51:
            clearHours();
            hour50();
            hour01();
            break;
        case 52:
            clearHours();
            hour50();
            hour02();
            break;
        case 53:
            clearHours();
            hour50();
            hour03();
            break;
        case 54:
            clearHours();
            hour50();
            hour04();
            break;
        case 55:
            clearHours();
            hour50();
            hour05();
            break;
        case 56:
            clearHours();
            hour50();
            hour06();
            break;
        case 57:
            clearHours();
            hour50();
            hour07();
            break;
        case 58:
            clearHours();
            hour50();
            hour08();
            break;
        case 59:
            clearHours();
            hour50();
            hour09();
            break;
    } 
    
    
    console.log(hour);
}

digiClock.onload = updateMinutes(), updateHours();
setInterval(updateSeconds, 1000);
/*setInterval(updateMinutes, 1000);  --- redundant - updates on every 0 sec*/
/*setInterval(updateHours, 1000);    --- redundant - updates on every 0 min*/