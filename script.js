//20.Grouping array elements
let arr=[10,20,30,40,50,60];
let a=arr.slice(0,3)//returns [10,20,30];
let b=arr.slice(3)//returns [40,50,60];
console.log(a+ ","+b);


//23.Implementing a queue with array
let queue=[];
queue.push(10);
queue.push(20);
queue.push(30);
console.log(queue);



//24.Implementing stack with array
let stack=[];
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);



//26.Creating an array of arrays
let arr1=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr1);



//30.Inserting array items at a specific position
let arr2=[1,2,3,4,5,8,9,10];
arr2.splice(5,0,6,7);
console.log(arr2);



//31.Sorting arrays with complex object
let arr3=[
    {name:"John",age:35},
    {name:"Alice",age:30},
    {name:"Thomas",age:20},
    {name:"Nick",age:33},
];
arr3.sort((a,b)=>a.age-b.age);
console.log(arr3);


//32.Finding the longest string in an array
let arr4=["apple","banana","cherry","date","blackberry"];
let max=0;
let str;
for(let i=0;i<arr4.length;i++)
{
    if(arr4[i].length>max)
    {
        str=arr4[i];
    }
}
console.log(str);


//33.Rotate an array
let arr5=[1,2,3,4,5,6,7];
let n=3;
let arr6=[];
for(let i=n;i<arr5.length;i++)
{
    arr6.push(arr5[i]);
}  
for(let i=0;i<n;i++)
{
    arr6.push(arr5[i]);
}  
console.log(arr6)



  