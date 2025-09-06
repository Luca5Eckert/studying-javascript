function sortArray(array){
    for(let i = 1; i < array.length; i++){
        key = array[i];
        j = i - 1;

        while( j >= 0 && array[j] > key){
            array[j+1] = array[j];
            j = j - 1;
        }

        array[j+1] = key;

    }

}

let array = [12,2,2112,423,23];

console.log(array);

sortArray(array);

console.log(array);
