function main (input) {
    /**
     * Write JavaScript code from here
     */
    const inputString = input;
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    if(inputString.length > vowels.length){
        for(let i = 0; i < inputString.length; i++){
            if(inputString.includes(vowels[i])){
                console.log("Vowel");
                return
            }
        }
        console.log("Consonant");
    }
    if(inputString.length < vowels.length){
        for(let i = 0; i < vowels.length; i++){
            if(inputString.includes(vowels[i])){
                console.log("Vowel");
                return
            }
        }
        console.log("Consonant");
    }
    


    // for (let i = 0; i < inputString.length; i++) {
    //     if (inputString.includes(vowels)) {
    //         console.log('The string contains a vowel.');
    //         return;
    //     }else{
    //         console.log('The string does not contain any vowel.');
    //         return;
    //     }
//   }
  


  }
  main("geh")