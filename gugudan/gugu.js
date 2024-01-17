var leftin = document.querySelectorAll('.leftin');


for (let i=0; i< leftin.length; i++){
    var extractedNumber = parseInt(leftin[i].innerText, 10);
    result =''
    for(let k=1; k<10; k++){
        result+= '&nbsp; &nbsp; &nbsp;'+extractedNumber+'x'+k +'=' + extractedNumber*k +"<br>"
    }
    leftin[i].insertAdjacentHTML('beforeend', '<p>' + result + '</p>');

}

var rightin = document.querySelectorAll('.rightin');


for (let i=0; i< leftin.length; i++){
    var extractedNumber = parseInt(rightin[i].innerText, 10);
    result =''
    for(let k=1; k<10; k++){
        result+= '&nbsp; &nbsp; &nbsp;'+extractedNumber+'x'+k +'=' + extractedNumber*k +"<br>"
    }
    rightin[i].insertAdjacentHTML('beforeend', '<p>' + result + '</p>');

}