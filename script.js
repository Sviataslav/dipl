function firstPic() {
    // var btn1 = document.getElementById();
    var screen1 = document.getElementById("screen-1");
    var screen2 = document.getElementById("screen-2");
    var screen3 = document.getElementById("screen-3");
    var screen4 = document.getElementById("screen-4");
    screen1.style.display="block";
    screen2.style.display="none";
    screen3.style.display="none";
    screen4.style.display="none";
}
function secondPic() {
    // var btn1 = document.getElementById();
    var screen1 = document.getElementById("screen-1");
    var screen2 = document.getElementById("screen-2");
    var screen3 = document.getElementById("screen-3");
    var screen4 = document.getElementById("screen-4");
    screen1.style.display="none";
    screen2.style.display="block";
    screen3.style.display="none";
    screen4.style.display="none";
}
function middle(){
    var screen1 = document.getElementById("screen-1");
    var screen2 = document.getElementById("screen-2");
    var screen3 = document.getElementById("screen-3");
    var screen4 = document.getElementById("screen-4");
    screen1.style.display="none";
    screen2.style.display="none";
    screen3.style.display="none";
    screen4.style.display="none";
}
function thirdPic() {
    // var btn1 = document.getElementById();
    var screen1 = document.getElementById("screen-1");
    var screen2 = document.getElementById("screen-2");
    var screen3 = document.getElementById("screen-3");
    var screen4 = document.getElementById("screen-4");
    screen1.style.display="none";
    screen2.style.display="none";
    screen3.style.display="block";
    screen4.style.display="none";
}
function fourthPic() {
    // var btn1 = document.getElementById();
    var screen1 = document.getElementById("screen-1");
    var screen2 = document.getElementById("screen-2");
    var screen3 = document.getElementById("screen-3");
    var screen4 = document.getElementById("screen-4");
    screen1.style.display="none";
    screen2.style.display="none";
    screen3.style.display="none";
    screen4.style.display="block";
}
function leftArrow() {
    var leftImg = document.getElementById("galery-left-photo");
    var middleImg = document.getElementById("galery-middle-photo");
    var rightImg = document.getElementById("galery-right-photo");
    if (rightImg.style.width === "130px") {
        rightImg.style.width = "90px";
        middleImg.style.width = "130px";
        leftImg.style.width = "90px";
    }   else {
        rightImg.style.width = "90px";
        middleImg.style.width = "90px";
        leftImg.style.width = "130px";
    }
    
}
function rightArrow() {
    var leftImg = document.getElementById("galery-left-photo");
    var middleImg = document.getElementById("galery-middle-photo");
    var rightImg = document.getElementById("galery-right-photo");
    if (leftImg.style.width === "130px") {
        rightImg.style.width = "90px";
        middleImg.style.width = "130px";
        leftImg.style.width = "90px";
    }   else {
        rightImg.style.width = "130px";
        middleImg.style.width = "90px";
        leftImg.style.width = "90px";
        middleImg.style.paddingBottom = "23px";
    }
    
}
function leftSwich() {
    var VarLeftSwich = document.getElementById("eight-page__container__left-coloan__cont-swich__left");
    var VarRightSwich = document.getElementById("eight-page__container__left-coloan__cont-swich__right");
    VarLeftSwich.style.backgroundColor="#ffffff";
    VarRightSwich.style.backgroundColor="none";
    VarLeftSwich.style.opacity="1";
    VarRightSwich.style.opacity="0.4";
    VarLeftSwich.style.border="1px solid gray";
    VarRightSwich.style.border="none";
}
function rightSwich() {
    var VarLeftSwich = document.getElementById("eight-page__container__left-coloan__cont-swich__left");
    var VarRightSwich = document.getElementById("eight-page__container__left-coloan__cont-swich__right");
    VarRightSwich.style.backgroundColor="#ffffff";
    VarLeftSwich.style.backgroundColor="none";
    VarRightSwich.style.opacity="1";
    VarLeftSwich.style.opacity="0.4";
    VarRightSwich.style.border="1px solid gray";
    VarLeftSwich.style.border="none";
}
function leftChosePlan() {
    var leftChose = document.getElementById("leftPlan");
    var rightChose = document.getElementById("rightPlan");
    var rightButton = document.getElementById("rightPlanButton");
    var leftButton = document.getElementById("leftPlanButton");
    leftChose.style.width="320px";
    rightChose.style.width="300px";
    leftChose.style.height="510px";
    rightChose.style.height="480px";
    leftChose.style.backgroundColor="white";
    rightChose.style.backgroundColor="#ebebed";
    leftChose.style.marginTop="0px";
    rightChose.style.marginTop="20px";
    rightButton.style.border="1.0px solid #267df4";
    leftButton.style.border="none";
    rightButton.style.color="#267df4";
    leftButton.style.color="white";
    leftButton.style.backgroundColor="#267df4";
    rightButton.style.backgroundColor="#ebebed";
}
function rightChosePlan() {
    var leftChose = document.getElementById("leftPlan");
    var rightChose = document.getElementById("rightPlan");
    var rightButton = document.getElementById("rightPlanButton");
    var leftButton = document.getElementById("leftPlanButton");
    rightChose.style.width="320px";
    leftChose.style.width="300px";
    rightChose.style.height="510px";
    leftChose.style.height="480px";
    rightChose.style.backgroundColor="white";
    leftChose.style.backgroundColor="#ebebed";
    rightChose.style.marginTop="0px";
    leftChose.style.marginTop="20px";
    leftButton.style.border="1.0px solid #267df4";
    rightButton.style.border="none";
    leftButton.style.color="#267df4";
    rightButton.style.color="white";
    rightButton.style.backgroundColor="#267df4";
    leftButton.style.backgroundColor="#ebebed";
}