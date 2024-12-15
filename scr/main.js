
const num = 30;

function createGourmet_man( count ){
    const imagecontents = document.getElementById('imagecontents');
    for(imageNum=0;imageNum<=count;imageNum++){
    let img_element = document.createElement('img');
    img_element.src = `image/${imageNum+1}.jpg`; 
    img_element.className  = ('imagecontents');
    imagecontents.appendChild(img_element);
    createBorder(imageNum)
    };
};

// function createBorder(){
//     let imagecontent = document.getElementsByClassName('imagecontents');
//     for(imageNum=0;imageNum<imagecontent.length;imageNum++){
//         let border = document.createElement('p');
//         border.className  = ('border');
//         imagecontent[imageNum].after(border);
//     };
// };


function createBorder(imageNum){
    let imagecontent = document.getElementsByClassName('imagecontents');
    // for(imageNum=0;imageNum<imagecontent.length;imageNum++){
        let border = document.createElement('p');
        border.className  = ('border');
        imagecontent[imageNum].after(border);
    // };
};



// const getImageContents = async () => {
//     createGourmet_man(num);
//     return true;
// }

// getImageContents().then(createBorder());

createGourmet_man(num);


