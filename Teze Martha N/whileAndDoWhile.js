//while loop
let i=5; 
while (i>0){
console.log(i);
i--;
}

let sum=0;
i=1;

while(i<=100){
sum= sum+i;
i++;
}
console.log(sum);

let str="madam";  
let check= true;
i=0; 
j= str.length-1; //m 0, a 1, d 2, a 3, m 4

while(i<j){
  if(str[i]!==str[j]){
    check=false;
    break;
  }
  i++;
  j--;
}