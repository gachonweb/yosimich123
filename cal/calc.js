
window.onload = function(){
   var complete = false;
   var number =''
   var historyDiv = document.querySelector('.history');

   function buttonClick(event) {
      var operators = ['+', '-', '÷', 'X', '%'];

      var currentText = document.getElementById("result").innerHTML;

      var clickedButton = event.target;
      var buttonName = clickedButton.getAttribute('name');
      
      if (complete){
         currentText = ''
         document.getElementById("result").innerHTML = currentText;
         complete = false
      }

      switch(buttonName){
         case '+':
         case '-':
         case '÷':
         case 'X':
         case '%':
            var containsOperator = false;
            number =''
            if(currentText == '' | currentText.includes(buttonName)){
               break;
            }
            for (var i = 0; i < operators.length; i++) {
               // 만약 현재 텍스트에 연산자가 이미 존재한다면
               if (currentText.includes(operators[i])) {
                  // 해당 연산자를 새로 누른 연산자로 교체
                  containsOperator = true;
                  var op = operators[i];
                  break;
               }   
            }
            if(containsOperator){
               if(op==buttonName){
                  break;
               }
               else{
                  currentText = currentText.replace(op, buttonName);
                  document.getElementById("result").innerHTML = currentText;
               }
               break;
            }
            
            var newText = currentText + ' '+buttonName+' ';
            // HTML 요소에 새로운 텍스트 설정
            document.getElementById("result").innerHTML = newText;
            break;
         
         case '1':
         case '2':
         case '3':
         case '4':
         case '5':
         case '6':
         case '7':
         case '8':
         case '9':
            number +=buttonName;
            var newText = currentText + buttonName;
            document.getElementById("result").innerHTML = newText;
            break;
         case '±':
            if(!currentText.includes(' ')==true){
               if(currentText.includes('-')){
                  currentText = currentText.replace('-','')
               }
               else{
                  currentText = '-' + currentText

               }
               document.getElementById("result").innerHTML = currentText;
               break;
            }

            break;
         case '.':
            if(number.includes('.')==false){
               currentText = currentText+'.'
               number = number+'.'
               document.getElementById("result").innerHTML = currentText;

            }

            break;
         case 'C':
            currentText =''
            document.getElementById("result").innerHTML = currentText;
            break;
         case '=':
            currentText = currentText.replace('X','*')
            currentText = currentText.replace('÷','/')
            var res = eval(currentText);
            document.getElementById("result").innerHTML = res;
            complete=true;
            number=''
            text = currentText+' = '+ res +'<br>'
            historyDiv.insertAdjacentHTML('beforeend', '<p>' + text + '</p><hr />');
            break;
      }

   }
   var myButtons = document.getElementsByClassName('btn')
   for (var i = 0; i < myButtons.length; i++) {
      myButtons[i].addEventListener('click', buttonClick);
   }

}
