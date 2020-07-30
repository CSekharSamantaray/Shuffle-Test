function createTiles(order) {
    iArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    document.querySelector('.tile_holder').innerHTML = '';
    
    if(order =="shuffle"){
        iArray = shuffle(iArray);
    }
    
    iArray.forEach(createString);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function createString(item){
    document.querySelector('.tile_holder').innerHTML += '<div class="tile tile_' + item + '">' + item + '</div>';
}