function reverseWord(value) {
       var splitString = value.split("");
       var reverseArray = splitString.reverse("");
       var joinArray = reverseArray.join("");
    return joinArray;
     }
    console.log(reverseWord("RIYO"));