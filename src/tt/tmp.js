function zhubi(times){
    for (let i = 0; i < times; i++) {
        for (let item of document.querySelectorAll("button.zhubi")) {
            item.click()
        }
    }
}

zhubi(50)

function levelUp(){
    for (let item of document.querySelectorAll("button.level-up")) {
        item.click()
    }
}

levelUp()

function claim(){
    for (let item of document.querySelectorAll("button.claim")) {
        item.click()
    }
}

claim()

