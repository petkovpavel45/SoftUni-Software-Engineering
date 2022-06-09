function rotateArray(array){
    let rotation = array.pop();
    
    for(let i = 0; i < rotation; i++){
        let last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])