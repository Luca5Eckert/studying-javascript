let text = "*";

for(let i = 1; i <= 5; i++){
    let miniText = "";

    for(let j = 0; j < i; j++){
        miniText += text;    
    }
    console.log(miniText);
}