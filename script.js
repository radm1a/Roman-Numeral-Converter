const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const num = document.getElementById("number");

convertBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  const number = parseInt(num.value);
  
  if (isNaN(number)) {
    output.textContent = "Please enter a valid number!";
    output.classList.remove("hidden");
    output.classList.add("alert");
  } else if (number < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.classList.remove("hidden");
    output.classList.add("alert");
  } else if (number > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.classList.remove("hidden");
    output.classList.add("alert");
  } else {
    output.textContent =  convertToRoman(number);
    output.classList.remove("hidden");
    output.classList.remove("alert");
  }
});

function convertToRoman(num) {
    const arr=[
        [1000,'M'],
        [900,"CM"],
        [500,'D'],
        [400,'CD'],
        [100,'C'],
        [90,'XC'],
        [50,'L'],
        [40,'XL'],
        [10,'X'],
        [9,'IX'],
        [5,'V'],
        [4,'IV'],
        [1,'I']
    ]

    let str = '';
    for(let i =0; i < arr.length; i++){
        while(num >= arr[i][0]){
            num-=arr[i][0];
            str+= arr[i][1];
        }
    }

    return str;
    
}
