for (item of document.querySelectorAll("button.can-adventure")) {
    item.click()
}


function zhubi(times){
    for (let i = 0; i < times; i++) {
        for (let item of document.querySelectorAll("button.mx-auto.mx-auto")) {
            item.click()
        }
    }
}

zhubi(50)
