

function faktoriyel(sayi){
 var n =1;

 for(var i=2; i<=sayi; i++){
  n*=i;
 }
 return n;
}

console.log(faktoriyel(5));