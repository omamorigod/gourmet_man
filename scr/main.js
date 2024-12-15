const num = 30;

function createGourmet_man( count ){
    const imagecontents = document.getElementById('imagecontents');
    for(i=1;i<=count;i++){
    let img_element = document.createElement('img');
    img_element.src = `image/${i}.jpg`; 
    img_element.className  = ('imagecontents');
    imagecontents.appendChild(img_element);
    };
};

function createBorder(){
    let imagecontent = document.getElementsByClassName('imagecontents');
    for(imageNum=0;imageNum<imagecontent.length;imageNum++){
        let borderType = document.createElement('p');
        borderType.style.border = "1px solid red";
        imagecontent[imageNum].after(borderType);
    };
};


const getImageContents = async () => {
    let result = await createGourmet_man(num);
    return result;
}

getImageContents().then(createBorder());
