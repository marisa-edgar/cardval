//tests wether the element in the array is odd

function isOdd(num){
  if (num % 2 ===1){
    return true;
  } else {
    return false;
  }  
}

// if element is odd double it and move elements to the modified array

function validator(numbers) {
  let numArr = numbers.split("")
  let modified = [];
  console.log(numArr + "numArr")
  for (let i = 0; i < numArr.length; i++) {
      if (isOdd([i]) === false)
          modified.push(parseInt(numArr[i]));
      else
          modified.push(parseInt(numArr[i] * 2));
  }

//takes element in modified array and if its length is greater than one add both and push the sum to the array

  console.log(modified + "modified")
  let modifiedArr = []
  modified.forEach(function(element){
    let stringElement = element.toString()
    if (stringElement.length > 1){
    modifiedArr.push(parseInt(stringElement[0])+parseInt(stringElement[1]))
    }else {
    modifiedArr.push(element)
    }
  });

// total sum  of all the elements in the array pushed to sumString and if it is divisible by 10 return true
  let sumOfArray = 0
  modifiedArr.forEach(function(element){
    sumOfArray += element;
  })
  console.log(modifiedArr +"modifiedArr")
  let sumString = sumOfArray.toString()
  console.log(sumString[-1])
  if (parseInt(sumString[-1]) === 0) {
    return "This Number is Valid"
  } else {
    return "This Number is not Valid"
  }
}


//uses a function to validate the card length + the first number or first and second number to identify the card type
//let aa2 = "370000000000000" 
//typeOfCard(aa2)


function cardType(numbers) {
  if (numbers[0] === 4 && numbers.length === 16) {
    return "This card is a Visa"
  } else if (numbers[0] === 5 && numbers.length === 16) {
    return "This card is a Mastercard"
  } else if (numbers[0] === 6 && numbers.length === 16) {
    return "This card is a Discover"
  } else if (numbers[0, 1] === "3", "4" || numbers[0, 1] === "3", "7" && numbers.length === 15){
    return "This card is an American Express"
} else {
    return "This isnt a debit/credit card"
}
}