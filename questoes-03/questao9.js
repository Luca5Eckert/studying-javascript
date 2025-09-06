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

let array = [1,5,4,312,0,-1];

sortArray(array);

console.log(array);