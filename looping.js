/*
1. print the numbers from 1 to 100 with the interval of 10
2. print the number from 10 to 1
3. print the multiple of 2 until 10
4. print the number from 100 to 1 with the difference of 10.
5. write a function to print the eligble, Not eligble voters separately from the list
of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.5. write a function to print the eligble, Not eligble voters separately from the list
*/
// 1. print the numbers from 1 to 100 with the interval of 10
console.log("print the numbers from 1 to 100 with the interval of 10:");
for (let i=0; i<=100;i+=10){
    console.log(i);
}

console.log("2.print the number from 10 to 1:");
for(let i=10;i>=1;i--){
    console.log(i);
}

console.log("3. print the multiple of 2 until 10:");
for(let i=0 ; i<10; i+=2){
    console.log(i);
}

console.log("4. print the number from 100 to 1 with the difference of 10:");
for(let i=100 ; i>=1;i-=10){
    console.log(i);
}
console.log("5. write a function to print the eligble, Not eligble voters separately from the list of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.");
var eligible =[]
var noteligible = []
var invalid = []

function voters(arr){
    for(i=0;i<arr.length ;i++){
        if (arr[i]<= 18){
        eligible.push(arr[i]);
    }   else if (arr[i]> 18){
        noteligible.push(arr[i]);
    }
    else{
        invalid.push(arr[i]);
    }
    }
    return{
        eligibleforvoting : eligible,
        noteligibleforvoting : noteligible,
        invalidarray: invalid
    }
    }
console.log(voters([18,17,16,15,10,8,7,9,35,40,86,75,0]));






