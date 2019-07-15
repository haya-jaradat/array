console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]
*/
var arr=[ 1,7,9,45 ];
var array =["Str" "alex","moh" ,"the","fox" "over", "lazy", "dog"  ];
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"];
fruits.indexof(Banana);
fruits.indexof(Tomato);
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var food = ["mansaf","maklobah","burger","shawrma","mjdrah"];
var sport = ["football","basketball","boxing"];
var movie = ["frozen","onward","aladdin","yanayakhalti"];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr){
return (arr[0]);
}
var num=[1,4,5];
console.log (firstOfArray(num));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr){
return arr[arr.length-1];

}
var num=[1,4,5];
console.log (lastOfArray(num));


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
console.log(array);

array.pop();
console.log(array);
array.pop();
console.log(array);
array.pop();
console.log(array);
array.push(9,10);
console.log(array);
array.shift();
console.log(array);
array.unshift(1,3,4,6,8);
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
var array2=[5,9,-7,3.5];
console.log(array2);
array2.push(2,7); //[5, 9, -7, 3.5, 2, 7]
console.log(array2);
array2.unshift(7,6); //[7, 6, 5, 9, -7, 3.5, 2, 7]
console.log(array2);
array2.pop(); //[7, 6, 5, 9, -7, 3.5, 2]
console.log(array2);
array2.shift(); //[6, 5, 9, -7, 3.5, 2]
console.log(array2);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
	var x= arr.length;
	if (x % 2 == 0){
       return  arr[ x/2 -1] +","+ arr[ x/2 ] ;
	}
	else {
       return arr[(x-1)/2];

	}
}
var num =["t","u","g","x"];
console.log(middleOfArray(num));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals[0]='zebra';
animals[3]='elephant';
console.log(animals);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(arr,i){
   
      return arr[i];
  }
  var nums= [1,2,3,8,9];
  console.log(indexOfArray(nums,2));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/
function arrayExceptLast(arr){
	
	return arr.slice();
}
var nums= [1,2,3,8,9]
console.log(arrayExceptLast(nums.slice(0,nums.length-1)));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(arr,x){
	arr.splice(nums.length-1, 1,x);
	return arr;
}
var nums= [1,2,3,8,9];
console.log(addToEnd(nums,55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr){
  var sum=0 ;
  for(i=0 ; i<arr.length ; i++){
       sum += arr[i];
  } return sum;
}
var nums= [1,2,3,8,9];
console.log(sumArray(nums));


function sumArray(arr){
	var sum=0;
	var i=0;
	while(i<arr.length){
		sum+=arr[i];
		i++
	}return sum
}
var nums= [1,2,3,8,9];
console.log(sumArray(nums));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr){
      var min = arr[0];
      for (i=0 ; i <arr.length ; i++){
          if(min > arr[i] ){
          	min = arr[i]
          }
      }return min;
}
var nums= [1,2,3,8,9];
console.log(minInArray(nums));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr,x){
	for (i=0 ; i<arr.length;i++){
		if(arr[i] == x){
		arr.splice(i,1);
		i = i-1;
		} 
	}
	return arr;
}
var nums= [1,8,2,3,8,9,8,8,8];
console.log(removeFromArray(nums,8));
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr){
   for(i=0 ; i<arr.length; i++){
   	if (arr[i] % 2 == 0){
        arr.splice(i,1);
   	}
   }		return arr;
}
var nums= [1,2,3,8,9];
console.log(oddArray(nums));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr){
	var sum1=0;
	var avg=0;
 for(i=0 ; i<arr.length ; i++){
      sum1 += arr[i];
      avg= sum1/arr.length;
 }return avg;
}
var nums2= [1,2,3,8,9,77];
console.log(aveArray(nums2));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr){
	var short= arr[0].length;
  for (i=0 ; i<arr.length ; i++){
       if (short > arr[i].length){
       	short=arr[i];
       }
  }return short;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray(strings));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str,x){
	var n=0;
 for(i=0 ; i<str.length ; i++){
  if (str.charAt(i) == x){
  	n = n+1;
  }
  }return n;
 }

var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a"));


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(str){
   newArray=[];
   newIndex=0;
   for (i = 0; i< str.length ; i++){
     if (str[i].length %2 != 0 && i%2 ==0){
        newArray[newIndex]=str[i];
        newIndex ++;
     }
} return newArray;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr){
   newArray=[];
  
 for (i=0 ; i<arr.length ; i++){
 	newArray[i] = arr[i]**i;
 }return newArray;
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr){
    newArray=[];
    j=0;
    for (i=0 ; i<arr.length ; i++){
   		if (arr[i]%2 == 0 && i %2 == 0){
   	 	 	newArray[j]=arr[i];
         	j++;
   	 	} 
   	}
   	 return newArray;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums));