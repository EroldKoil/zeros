var answear;
var solution;
var counter;

module.exports = function zeros(expression) {

  var array = expression.split("*");
  solution = [];
  solution[0] = 1;
  answear = 0;
  counter = 0;

  for(let i=0; i<array.length; i++){
    let element = array[i];
    if(element.charAt(element.length-1)=="!"){
      if(element.charAt(element.length-2)=="!"){
        faktorial(element.split("!")[0] , 2);
      }
      else{
        faktorial(element.split("!")[0] , 1);
      }
    }
  }

  lastSimplification();
  return answear;
}



function faktorial(number, k) {
  let n =solution[counter];
  let i=1;
  if(k==2){
    if(number%2==0){
      i=2;
    }
  }
  for(; i<=number; i+=k){
    solution[counter]*=i;
    simplification( );
  }
}

function simplification() {
  let n =solution[counter];
  if(solution[counter]>10000000000000){
    solution[counter+1]=1;
    counter++;
  }
  else{
    while (solution[counter]%10 == 0) {
      solution[counter] /= 10;
      answear++;
    }
  }
}

function lastSimplification(){
  var flag_2 = true;
  var flag_5 = true;

  while(flag_2 && flag_5){
    flag_2 = false;
    flag_5 = false;
    for(let i=0; i<solution.length; i++){
      if(solution[i]%2==0){
        flag_2 = true;
        for(let j=0; j<solution.length; j++){
          if(solution[j]%5==0){
            flag_5 = true;
            solution[i]/=2;
            solution[j]/=5;
            answear++;
          }
        }
      }
    }

  }

}