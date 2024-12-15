const num = 30;
const num = 30;

function createGourmet_man( count ){
    const imagecontents = document.getElementById('imagecontents');
    for(i=1;i<=count;i++){
    let borderType = document.createElement('p');
    borderType.style.borderBottom = "1px solid red";
    let img_element = document.createElement('img');
    img_element.src = `image/${i}.jpg`; 
    img_element.className  = ('imagecontents');
    borderType.appendChild(img_element);

    imagecontents.appendChild(borderType);
    };
};

createGourmet_man(num)
