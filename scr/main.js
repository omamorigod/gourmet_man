
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
        let border = document.createElement('p');
        border.className  = ('border');
        imagecontent[imageNum].after(border);
    };
};


const getImageContents = async () => {
    let result = await createGourmet_man(num);
    return result;
}

getImageContents().then(createBorder());

createGourmet_man(num);

