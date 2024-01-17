window.onload = function(){
    var img = ['rock','scissors','paper']
    var buttons = document.querySelectorAll('button');
    var resultSection = document.getElementById('result');

    function changeBackgroundColor(i) {
        var Image = document.getElementById(img[i]);
        Image.style.border = "5px solid red";
    }

    function rechangeBackgroundColor(i) {
        var Image = document.getElementById(img[i]);
        Image.style.border = "5px solid black";
    }

    function enableButton(){
        buttons.forEach(function(button) {
            button.disabled=false;
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function buttonClick(event){
        resultSection.innerHTML='';
        for (var i=0; i<=2; i++){
            rechangeBackgroundColor(i);
        }
        buttons.forEach(function(button) {
            button.disabled = true; // 버튼 비활성화
        });
        var clickedButton = event.target;
        var mine = clickedButton.getAttribute('name');

        var min = 15;
        var max = 30;   
        var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        var com = img[randomInt%3]


        for (var i=0; i<=randomInt; i++){
            changeBackgroundColor(i%3);
            await sleep(500);
            if(i<randomInt){
            rechangeBackgroundColor(i%3);
            }
        }
        if(mine == com){
            //draw
            text = 'Draw :/'
        }
        else if(mine == 'rock'){
            if(com == 'paper'){
                //lose
                text = 'You Lose :('
            }
            else{
                //win
                text = 'You win :)'
            }
        }
        else if(mine == 'scissors'){
            if(com == 'rock'){
                //lose
                text = 'You Lose :('
            }
            else{
                //win
                text = 'You win :)'
            }
        }
        else{
            if(com == 'scissors'){
                //lose
                text = 'You Lose :('

            }
            else{
                //win
                text = 'You win :)'
            }
        }
        resultSection.innerHTML=text;

        enableButton();
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', buttonClick);
    });

}