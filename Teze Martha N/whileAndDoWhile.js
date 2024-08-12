//while loop
let i=5; 
while (i>0){
console.log(i);
i--;
}

let sum=0;
i=100;
while(i>0){
sum= sum+i;
i--;
}
console.log(sum)

let str="madam";
let check= true;
i=0; 
j= str.length-1;
while(i<j){
  if(str[i]!==str[j]){
    check=false;
    break;
  }
  i++;
  j--;
}