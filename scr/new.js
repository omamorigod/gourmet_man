const num = 30;
function CreateOneGourmet_man(count){
    const imagecontents = document.getElementById('newimagecontent');
    let img_element = document.createElement('img');
    img_element.src = `image/${count}.jpg`; 
    imagecontents.appendChild(img_element);
    };
};


CreateOneGourmet_man(num);
