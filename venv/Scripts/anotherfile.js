////console.log('This is another one man');
////This  example will show you how to use switch statement:
////
//loop:
//var grad
//grad = prompt('Please enter the grade you got','A');
//var grade = grad.toUpperCase();
//
//switch(grade){
//    case 'A':
//    console.log('You have done a excellent job. Keep it up');
//    break;
//    case 'B':
//    console.log('Good. Keep learning');
//    break;
//    case 'C':
//    console.log('You have to work hard man!');
//    break;
//    default:
//    console.log('That grade is not present in our system.')}
//goto loop;
////var x =0;
////while (x<5){
////++x;
////console.log(x);
////}
//
////
////for(var x = 0;x<10  ;x++){
////console.log(`I won\'t stop ${x}`)
////}

//var fruits =['apple','banana','mango'];
//console.log(fruits.join('*'));
//console.log(fruits.toString());

//var mixArray = [{ename : 'Smith'},
//false,function () {console.log('Hello world')},
//'Mango'
//]
//
//console.log(mixArray[0].ename);
//console.log(mixArray[2]());
//
//var matrix_array = [[1,2,3],[4,5,6],[7,8,9]];
//for(var i =0;i<3;i++){
//    for(var j = 0;j<3;j++){
//    console.log(matrix_array[i][j]);
//    }
//
//}
//
//function reverse(str){
//var stack = [];
//for (var i = 0;i < str.length;i++){
//stack.push(str[i]);
//}
//var reversed = '';
//while(stack.length > 0){
//reversed = reversed + stack.pop();
////console.log(reversed);
//}
//alert(`Your name in reverse is: ${reversed}`);
//
//if(reversed === str){
//alert('Oh fuck your name is some serious shit');
//}
//}
//name = prompt('Enter your name','Yashas');
//reverse(name);

//var numb = '12345678';
//var queue = [];
//
//for(var i = 0;i<numb.length;i++){
//console.log(queue.unshift(numb[i]));
//console.log(queue.toString());
//}
//console.log(queue.toString());
//
//
////Removing an element from the queue
//while(queue.length>1){
//console.log(queue.shift());
//}
//console.log(queue.toString());


//Shallow and Deep copy
//var teamA = [5,6,7,8];
//var teamB = [];
//teamB = teamA;
//console.log('teamA:'+teamA);
//console.log('teamB:'+teamB);
//teamB[0]= 9;
//console.log('teamA:'+teamA);

//Deep copy

//var teamA = [1,2,3,4];
//var teamB = new Array(4);
//
//for(var i = 0;i<teamA.length;i++){
//teamB[i] = teamA[i];
//
//}
//console.log(teamB)
//teamB[0] = 9;
//console.log(teamB);
//console.log(teamA);

//splice method

//var months =['jan','feb','march','april','may','june','july','august'];
//console.log(months.splice(2,2));
//console.log(months);


//var months = ['jan','feb','march','april','may'];
//console.log(months.splice(2, 2,'december','december'));
//console.log(months);

//Slice method

//var numbers = [1,2,3,4,5,6,7,8,9];
//var new_numbers = numbers.slice(0,4);
////console.log(numbers);
//console.log(new_numbers);

//function convertToArray(){
//return Array.prototype.slice.call(arguments);
//
//
//
//}
//var conversion = convertToArray(1,2,4,5,6);
//console.log(conversion);
//
//
//var depts = ['yashas','akash','praveen','gagan','niranjan'];
//console.log(depts.indexOf('praveen',-2));

//Function to search index of repeated elements in an array

//function searchrepeatedItems(element,array){
//var indexes = [];
//var idx = array.indexOf(element);
//while(idx !=-1){
//indexes.push(idx);
//idx =array.indexOf(element,idx+1);
//}
//return indexes;
//}
//
//var numberss = [1,2,3,1,1,2,3,4,1,43,1];
//console.log(searchrepeatedItems(1,numberss));
//
//
//function locateAll(element,arra){
//var results = [];
//var idx = arra.indexOf(element);
//
//while(idx != -1){
//results.push(idx);
//idx = arra.indexOf(element,idx + 1);
//}
//return results;}
//
//var depts = [1,2,4,3,6,7,3,2];
//console.log(locateAll(2,depts));























































































































