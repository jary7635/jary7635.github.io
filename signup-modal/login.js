function openModal() {
    /* Note that you do NOT have to do a document.getElementById anywhere in this exercise. Use the elements below */        
    var myInput = document.getElementById("psw");
    var confirmMyInput = document.getElementById("cpsw");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");    
    var match = document.getElementById("match");


    // When the user starts to type something inside the password field
	myInput.onkeyup = function() {
       console.log('helllooo'); // Idk why this is here? It came with the zip folder download
        
        /* TODO: Question 1.1: Starts here */
        var lowerCaseLetters = myInput.value.match(/[a-z]/g); // : Fill in the regular experssion for lowerCaseLetters - /\p{Ll}/gu /[a-z]/g
        var upperCaseLetters = myInput.value.match(/[A-Z]/g); // : Fill in the regular experssion for upperCaseLetters - /\p{Lu}/gu
        var numbers = myInput.value.match(/[0-9]/g); // : Fill in the regular experssion for digits - /\p{Number}/gu
        var minLength = 8; // : Change the minimum length to what what it needs to be in the question 
        /* TODO: Question 1.1: Ends here */
        

        /* TODO: Question 1.2:  Starts here */
         /*
         - So first read up on classList.  
         - Perform a console.log(letter.classList) and check the array that you see. By default the first time, there should be just 1 element and it should be
         "invalid". "invalid" is a class that is present in login.css. 
         - Below, there are a bunch of if blocks and else blocks.
         - Each if block means that some successful condition is satisfied for our password conditon. So the red cross need to be converted to a check mark.
         - Each else block stands for a failed condition, so the green check mark needs to be a red cross again.
         - All that you need to do is, in each of the blocks, fill in the correct classNames for the remove and the add methods.
         */

        // Validate lowercase letters
        console.log(letter.classList);
        if(myInput.value.match(/[a-z]/g)) {     
            letter.classList.remove("invalid"); 
            letter.classList.add("valid");
        } else{
            letter.classList.remove("valid"); 
            letter.classList.add("invalid");
        }

        // Validate capital letters
        console.log(capital.classList);
        if(myInput.value.match(/[A-Z]/g)) { 
            capital.classList.remove("invalid"); 
            capital.classList.add("valid");
        } else{
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        console.log(number.classList);
        if(myInput.value.match(/[0-9]/g)) { 
            number.classList.remove("invalid"); 
            number.classList.add("valid");
        } else{ 
            number.classList.remove("valid"); 
            number.classList.add("invalid");
        }

        // Validate length
        console.log(length.classList);
        if(myInput.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else { 
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

        /* TODO: Question 1.2:  Ends here */
    }
    /* TODO Question 1.3: Starts here */
    confirmMyInput.onkeyup = function() {
        // Validate password and confirmPassword
            var passEqualsConfPass = (myInput.value == confirmMyInput.value); // TODO: Change this to the condition that needs to be checked so that the text entered in password equals the text in confirm password
            if(passEqualsConfPass) { 
                match.classList.remove("invalid"); 
                match.classList.add("valid"); 
            } else {
                match.classList.remove("valid"); 
                match.classList.add("invalid"); 
            }        
    /* TODO Question 1.3: Starts here */

            // Disable or Enable the button based on the elements in classList
            enableButton(letter, capital, number, length, match);
    }
}


function enableButton(letter, capital, number, length, match) {
    // TODO: Clear this function for students to implement    
    var button = document.getElementById('my_submit_button');
    var condition = (letter.classList == "valid") && (capital.classList == "valid") && (number.classList == "valid") && (length.classList == "valid") && (match.classList == "valid"); // TODO: Replace false with the correct condition

    if(condition) {       
        button.disabled = false;
    }
    else{
        button.disabled = true;
    }   
}    


function onClickFunction() {
    alert("Hey! I'm all green! Well done.")
}