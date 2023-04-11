


//task.1

var arr = [10, 20, 30, 50, 235, 3000]
for (var i=0; i<arr.length; i++){
    var firstNum = (arr[i][0]);
    if (firstNum==='1'|| firstNum==='2'||firstNum==='5'){
        console.log(arr[i]);
    }
}


//task.2

for (var i = 20;i>=0;i--){
    console.log(i);
}


//task.4


var arr = []
for(var i =0; i<=10; i++){
    arr.push(i)
console.log(arr);
}

//task.4


var colors = {
    red:'red',
    yellow:'yellow',
    green:'green' 
}

var getColor = prompt('введите цвет сфетофора ');
if (getColor === colors.red) {
    alert('STOP!')
}else if (getColor === colors.yellow){
    alert('GET READY!')
}else if (getColor === colors.green){
    alert('GO!')
}else if (typeof +colors !== 'object'){
    alert('введите цвет светофора!!!')
}else{
    alert('Извините , такого ответа не существует!!!')
 }





