function CreateGourmet_man(count){
    const imagecontents = document.getElementById('newimagecontent');
    for(i=1;i<=count;i++){
    let img_element = document.createElement('img');
    img_element.src = `../image/${i}.jpg`; 
    imagecontents.appendChild(img_element);
    };
};


CreateGourmet_man(1);