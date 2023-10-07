//Select element function
const selectElement = function (element) {
	return document.querySelector(element);
    };

    let box = selectElement('.box');
    let line1 = selectElement('.line1');
    let line2 = selectElement('.line2');
    let line3 = selectElement('.line3');

    box.addEventListener('mouseenter', function(){
        box.classList.add('box-hover');
        line1.classList.add('hover1');
        line2.classList.add('hover3');
        line3.classList.add('hover2');
    });
    box.addEventListener('mouseleave', function(){
        box.classList.remove('box-hover');
        line1.classList.remove('hover1');
        line2.classList.remove('hover3');
        line3.classList.remove('hover2');
    });

    let menuToggler = selectElement('.menu-toggle');
    let body = selectElement('body')

    box.addEventListener('click', function(){
        menuToggler.classList.toggle('open');
        line1.classList.toggle('openl1');
        line2.classList.toggle('openl2');
        line3.classList.toggle('openl3');
        line1.classList.remove('hover1');
        line2.classList.remove('hover3');
        line3.classList.remove('hover2');
        body.classList.toggle('open');
    });