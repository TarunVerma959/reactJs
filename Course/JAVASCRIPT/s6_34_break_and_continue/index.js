// Break and Continue

// break stops the loop at particular index
for (let index = 1; index <= 10; index++) {
    console.log(index);
    if(index === 5){
        break;
    }
    
}

// continue skips the value at particular index
for (let index = 1; index <= 10; index++) {
    if(index === 5){
        continue;
    }
    console.log(index);
}