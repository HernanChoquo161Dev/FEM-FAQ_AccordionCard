const listItem = document.querySelectorAll(".list-questions__item");
const listText = document.querySelectorAll(".list-questions__container-text");
const listIcon = document.querySelectorAll(".list-questions__icon");

class CheckItem{
    constructor() { this.lastItem = -1; }
    getLastItem() { return this.lastItem; };
    setLastItem(lastItem) { this.lastItem = lastItem; };
};

let checkOut = new CheckItem();

function addAnimation(objText, objIcon) {
    objText.classList.toggle("list-questions__container-text--show");
    objIcon.classList.toggle("list-questions__icon--rotate");
}

function animation(objEvent, objText, objIcon, objCheckOut, index){
    objEvent.addEventListener('click', function (event) {
        if(objCheckOut.getLastItem() != -1){
            if(objCheckOut.getLastItem() != index){
                addAnimation(objText,objIcon);
                
                let elemText = document.querySelectorAll(".list-questions__container-text");
                let elemIcon = document.querySelectorAll(".list-questions__icon");

                addAnimation(elemText[objCheckOut.getLastItem()],elemIcon[objCheckOut.getLastItem()]);
                objCheckOut.setLastItem(index);
            }
            else{
                addAnimation(objText,objIcon);
                objCheckOut.setLastItem(-1);
            }
        }
        else{
            addAnimation(objText,objIcon);
            objCheckOut.setLastItem(index);
        }
    });
}

for(a = 0; a < listItem.length; a++){
    animation(listItem[a], listText[a], listIcon[a], checkOut, a);
}

