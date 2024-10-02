
// let inputarr = +(prompt("enter your array") || "0" );


// let arr:number[] = [inputarr];


// //  arr = inputarr[]


// // let arr: string[] = ["Aman", "zain", "abubakar", "fareed", "sabir"];
// // let arr: number[] = [32,45,76];


// let newArr = arr.map((name) => name ** 2);

// console.log(arr);
// console.log(newArr);


// function getArrayFromUser(): string[] {
//     const userInput: string | null = prompt("Enter elements separated by commas:");
  
//     if (userInput) {
//       // User input ko split karke array mein convert karna
//       const userArray: string[] = userInput.split(',').map(item => item.trim());
//       return userArray;
//     } else {
//       return [];
//     }
//   }
  
//   const userArray = getArrayFromUser();
//   console.log(userArray);
  


let arr:number[] = [1,2,2,2,3,4,65,3,4,6,5,4];

let newArr = arr.filter((num,index) =>arr.indexOf(num) === index   )

console.log(newArr);

