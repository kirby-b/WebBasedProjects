var result = "";
var passwordParts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&?";
const partsArray = passwordParts.split("");
function passgen(){
    result = "";
    /*Make it generate a 12 character password that contains random letters, numbers, and characters
    call getparts()*/
    var i = 0;
    var numCount = 0;
    var letterCount = 0;
    var specialCount = 0;
    getparts()
    while (i < result.length){
        /*check to make sure there are no immediate repeats
        make sure it is at least 1/4 letters, 1/4 numbers, and 1/4 special characters */
        const letterPattern = /[a-z]/i;
        const numPattern = /[0-9]/i;
        if (letterPattern.test(result[i]) == true || numPattern.test(result[i]) == true){
            if(result[i] == result[i + 1]){
                passgen()
            }
            else{
                if (letterPattern.test(result[i]) == true){
                    letterCount += 1;
                } 
                if (numPattern.test(result[i]) == true){
                    numCount += 1;
                }
            }
        }
        else{
            specialCount += 1;
        }
        i += 1;
    }

    if(letterCount < 3 || numCount < 3 || specialCount < 3){
        passgen()
    }
    else{
        document.getElementById("result").innerHTML = result;
    }
}
function getparts(){
    var i = 0;
    var selected = "";
    while (i < 12){
        /*grab a character from a split string/list
        add it to a string*/
        selected = partsArray[Math.floor(Math.random() * passwordParts.length)];
        result += selected;
        i += 1;
    }
}