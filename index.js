btnLeft = true;
btnMiddle = false;
btnRight = false;
left.addEventListener('click', () => {
    left.classList.toggle('active');
    img1.style.zIndex = "2";
    img2.style.zIndex = "1";
    img3.style.zIndex = "1";
    right.classList.remove('active');
    middle.classList.remove('active');
    btnLeft = true;
    btnMiddle = false;
    btnRight = false;
    clearInterval(leftInt);
})
middle.addEventListener('click', () => {
    middle.classList.toggle('active');
    img2.style.zIndex = "2";
    img1.style.zIndex = "1";
    img3.style.zIndex = "1";
    right.classList.remove("active");
    left.classList.remove("active");
    btnMiddle = true;
    btnLeft = false;
    btnRight = false;
    clearInterval(leftInt);
})
right.addEventListener('click', () => {
    right.classList.toggle('active');
    img3.style.zIndex = "2";
    img1.style.zIndex = "1";
    img2.style.zIndex = "1";
    left.classList.remove("active");
    middle.classList.remove("active");
    btnRight = true;
    btnLeft = false;
    btnMiddle = false;
    clearInterval(leftInt);
})

let leftInt = setInterval(() => {
    if (btnLeft) {
        left.classList.add('active');
        img1.style.zIndex = "2";
        img2.style.zIndex = "1";
        img3.style.zIndex = "1";
        right.classList.remove('active');
        middle.classList.remove('active');
        btnLeft = false;
        btnMiddle = true;
        btnRight = false;
    } 
    else if (btnMiddle)
    {
        middle.classList.toggle('active');
        img2.style.zIndex = "2";
        img1.style.zIndex = "1";
        img3.style.zIndex = "1";
        right.classList.remove("active");
        left.classList.remove("active");
        btnMiddle = false;
        btnLeft = false;
        btnRight = true;
    }
    else if (btnRight) {
        right.classList.toggle('active');
        img3.style.zIndex = "2";
        img1.style.zIndex = "1";
        img2.style.zIndex = "1";
        left.classList.remove("active");
        middle.classList.remove("active");
        btnRight = false;
        btnLeft = true;
        btnMiddle= false;
    }
    
},6000)
