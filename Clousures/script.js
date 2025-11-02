
function counter(){
    let count = 0;
    return function() {
        count ++;
        console.log(count);
        
    }
}

const updateCounter = counter();
updateCounter()
updateCounter()
updateCounter()
updateCounter()
updateCounter()
updateCounter()
updateCounter()
