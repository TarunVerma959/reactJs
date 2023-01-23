// Problem : Our Grading System
// Take a Number
// If the mark is in between 80 - 100 , Print " A + "
// If the mark is in between 70 - 79 , Print " A "
// If the mark is in between 60 - 69 , Print " A- "
// If the mark is in between 50 - 59 , Print " B "
// If the mark is in between 40 - 49 , Print " C "
// If the mark is in between 33 - 39 , Print " D "
// If the mark is in between 0 - 32 , Print " F "
// also point out invalid mark

let mark = 50;

if (mark < 0 || mark > 100){
    console.log('Invalid Mark')
} else if (mark >= 80 && mark <= 100){
    console.log('A+')
} else if (mark >= 70 && mark <= 79){
    console.log('A')
} else if (mark >= 60 && mark <= 69){
    console.log('A-')
} else if (mark >= 50 && mark <= 59){
    console.log('B')
} else if (mark >= 40 && mark <= 49){
    console.log('C')
} else if (mark >= 33 && mark <= 39){
    console.log('D')
} else if (mark >= 0 && mark <= 32){
    console.log('F')
}

