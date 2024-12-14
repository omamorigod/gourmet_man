
function CreateGourmet_man(count){
    const imagecontents = document.getElementById('imagecontents');
    for(i=1;i<=count;i++){
    let img_element = document.createElement('img');
    img_element.src = `../image/${i}.jpg`; 
    img_element.className  = ('imagecontents');
    imagecontents.appendChild(img_element);
    };
};

function CreateBorder(){
    let imagecontent = document.getElementsByClassName('imagecontents');
    for(imageNum=0;imageNum<imagecontent.length;imageNum++){
        let border = document.createElement('p');
        border.className  = ('border');
        imagecontent[imageNum].after(border);
    };
};


CreateGourmet_man(30);
CreateBorder();


