const listItem = document.querySelectorAll(".list-questions__item");
const listText = document.querySelectorAll(".list-questions__container-text");
const listIcon = document.querySelectorAll(".list-questions__icon");
const listTitle = document.querySelectorAll(".list-questions__tittle");

class CheckItem{
    constructor() { this.lastItem = -1; }
    getLastItem() { return this.lastItem; };
    setLastItem(lastItem) { this.lastItem = lastItem; };
};

let checkOut = new CheckItem();

function addAnimation(objText, objIcon, objTittle) {
    objText.classList.toggle("list-questions__container-text--show");
    objIcon.classList.toggle("list-questions__icon--rotate");
    objTittle.classList.toggle("list-questions__tittle--click-down");
}

function animation(objEvent, objText, objIcon, objTittle, objCheckOut, index){
    objEvent.addEventListener('click', function (event) {
        if(objCheckOut.getLastItem() != -1){
            if(objCheckOut.getLastItem() != index){
                addAnimation(objText,objIcon,objTittle);
                
                let elemText = document.querySelectorAll(".list-questions__container-text");
                let elemIcon = document.querySelectorAll(".list-questions__icon");
                let elemTittle = document.querySelectorAll(".list-questions__tittle");

                addAnimation(elemText[objCheckOut.getLastItem()],elemIcon[objCheckOut.getLastItem()],elemTittle[objCheckOut.getLastItem()]);
                objCheckOut.setLastItem(index);
            }
            else{
                addAnimation(objText,objIcon,objTittle);
                objCheckOut.setLastItem(-1);
            }
        }
        else{
            addAnimation(objText,objIcon,objTittle);
            objCheckOut.setLastItem(index);
        }
    });
}

for(a = 0; a < listItem.length; a++){
    animation(listItem[a], listText[a], listIcon[a], listTitle[a], checkOut, a);
}

