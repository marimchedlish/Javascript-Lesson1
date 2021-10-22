//1.
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
   studentstatus: 'active'
  };

  console.log(user.studentstatus);

//2.

  let numbers = [14, 15, 19, 4, 10]

  for (let x = 0; x < numbers.length; x++)
  {
      console.log(numbers[x]);
  }
//3.
  let numbers1 = [14, 15, 19, 4, 10]
  
  let y = 0;
  while (y < numbers1.length) {
      console.log(numbers1[y]);
      y++;
  }
//3.

  let cifrebi = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]
  for (let index = 0; index < cifrebi.length; index++) {
      if (cifrebi[index] > 5)
      console.log(cifrebi[index]);
  }

//4.
  let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];
   for (let id = 0; id < users.length; id++)
   {
       if(users[id].status === true) {
           console.log(users[id].username);
       }
   }
 
//5.

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
for (let arrid = 0; arrid < arr.length; arrid++) {
    for (let secId = 0; secId < arr.length; secId++) {
        if (arr[arrid][secId] > 0)
        console.log(arr[arrid][secId]);
    }

}

//6. false-s გამოიტანს რადგან '6' - არის სტრინგი და === -ს შემთხვევაში კონვერტაციას არ გააკეთებს.

//7.


let array = ["html", "css", "bootstrap", "javascript", "python"];

for (let lang = 0; lang < array.length; lang++) {
    if (array[lang].length > 5 && array[lang].includes("ava")) 
    {
        console.log(array[lang]);
    }

}


//8.
let user2 = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (user2.age > 18 && user2.studentstatus === 'active') {
    console.log('hello');
}

if(user2.name === 'giorgi') {
    console.log('hello gio');
}

if(user2.studentstatus === 'active' || user2.age < 25) {
    console.log('hello world');
}

else {
    console.log('error');
}

//9. 
let array2 = [watermelon, pear, 10, 45, 50, 'apple', 'ananas'];

for (let word = 0; word < array2.length; word++) {
    if (typeof array2[word] === 'string') {
        console.log(array2[word]);
    }
}

