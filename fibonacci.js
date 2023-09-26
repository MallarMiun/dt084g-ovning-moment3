/* I Fibonaccis talföljd är de två första elementet 1 och 1. Varje nästkommande element kommer därefter vara summan av de två föregående. */
"use strict";

//inledande nummer
let numberOne = 1;
let numberTwo = 1;

for(let i = 0; i < 10; i++) {
    let next = numberOne + numberTwo; //nästa nummer i talföljen

    console.log(`${numberOne} + ${numberTwo} = ${next}`); //utskrift

    // byter plats på nummer
    numberOne = numberTwo;
    numberTwo = next;
}