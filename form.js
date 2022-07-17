const clearAll = document.querySelectorAll('input')
const textAreaDOM = document.querySelector('textarea')
const tempMsg = document.getElementsByTagName('p')[0];
const requiredAction = Array.from(document.querySelectorAll('.required'));
console.log(requiredAction);
console.log(tempMsg);
function submitText() {
        if (requiredAction[0].value !== "" && requiredAction[1].value !== "" && requiredAction[2].value !== "" && requiredAction[3].value !== "" && requiredAction[4].value !== "" && requiredAction[5].value !== "") {
            tempMsg.innerHTML = "Thanks for submitting!";
        
            function submitDelete(){
                tempMsg.innerHTML = '';
            }
            setTimeout(submitDelete, 2000);

            for (let i = 0; i < clearAll.length; i++) {
                clearAll[i].value = '';
                textAreaDOM.value = '';
            }
        }
   }