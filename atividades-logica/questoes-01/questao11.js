for(let i = 0; i <= 30; i++){
    
    console.log("-----");

    console.log(i);

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if ( i % 3 == 0){
        console.log("Fizz");
    } else if ( i % 5 == 0){
        console.log("Buzz");
    }
    console.log("-----");

}