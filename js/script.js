const questionItem = document.querySelectorAll(".list-questions__item");
const questionText = document.querySelectorAll(".list-questions__text");

function animationVisible(animObj){
    animObj.style.display = "block";
}
function animationHidden(animObj){
    animObj.style.display = "none";
}
function animationMove(animElem, animText){
    animElem.addEventListener('click', function (event) {
        if(animElem.classList.contains("animationSizeItem")){
            animElem.style.flexBasis="100px";
            animElem.classList.toggle("animationSizeItem");
            animElem.classList.toggle("animationSizeItemInverse");
            
            setTimeout(animationHidden(animText), 200);
        }
        else{
            if(animElem.classList.contains("animationSizeItemInverse")){
                animElem.style.flexBasis="10%";
                animElem.classList.toggle("animationSizeItemInverse");
            }
            animElem.classList.toggle("animationSizeItem");

            setTimeout(animationVisible(animText), 800);
        }
    });
}

console.log(questionText);

for(a = 0; a < 5; a++){
    animationMove(questionItem[a], questionText[a]);
}