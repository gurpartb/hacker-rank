function designerPdfViewer(h, word) {

    let height = 0, width = word.length, a = 'a'.charCodeAt(0);

    word.split('').forEach( chr =>{

        // converst chr to 'h' array index
        let i = chr.charCodeAt(0) - a;

        let chrHeight = h[i];

        if(chrHeight > height){

            height = chrHeight;
        }
    });

    let area = width * height;
    
    return area;
}