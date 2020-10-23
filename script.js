var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bots = []; //Массив травоядных
var age = 0; //Время существования мира. 1 - 10 милисекунд, 100 - 1 секунда
var height = canvas.height; //Максимальная высота
var width = canvas.width; //Максимальная ширина
var countLiveEnemy = 0; // количество существующих ботов
var breedingEnergy = 2000; //количество энергии для размноженияы
var season = 0; // время года 0 - лето, 1 - осень, 2 - зима, 3 - весна
var speed = 1;
var heightCar = 30;
var widthCar = 10;
var directions = "top";
var eyes = 100;
var  cof = 0.75;


let point = {  
    x: 0,
    y: 0
};

//Отрисовка машины
function drawCar() {
    //Рисуем зеленые шарики
    for (var i = 0; i < bots.length; i++) {
        
        //боты
        ctx.beginPath();
        ctx.fillStyle = "#ff0000";
        ctx.arc(bots[i].x,bots[i].y,10,0,Math.PI*2,true); 

        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x,bots[i].y+eyes);
        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x,bots[i].y-eyes);
        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x+eyes,bots[i].y);
        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x-eyes,bots[i].y);
        ctx.moveTo(bots[i].x,bots[i].y);

        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x+eyes*cof,bots[i].y+eyes*cof);
        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x-eyes*cof,bots[i].y-eyes*cof);
        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x+eyes*cof,bots[i].y-eyes*cof);
        ctx.moveTo(bots[i].x,bots[i].y);
        ctx.lineTo(bots[i].x-eyes*cof,bots[i].y+eyes*cof);
        ctx.moveTo(bots[i].x,bots[i].y);


        ctx.stroke();   


    }
}

//циклы мира
function world(){
    age++;

}


//Жизнь машины
function liveCar() {

    

    for (var i = 0; i < bots.length; i++) {

        console.log(bots[i].y + "    " + directions)
        if(bots[i].y + heightCar > height && directions == "top"){
            directions = "bottom";
        }

        if(bots[i].y - speed*2 < 0 && directions == "bottom"){
            directions = "top";
        }

        if(directions == "top"){
            bots[i].y += speed;
        }

        if(directions == "bottom"){
            bots[i].y -= speed;
        }


    }
   
}

//Начальные травоядные
function getCar() {

  createCar(100, 100);
}


function createCar(_x, _y){
    if( _x > 0 && _y > 0 &&  _x < width && _y < height){
    var newCar = {
        x: _x,
        y: _y,
    };
    bots.push(newCar);
}
}


//Получить рандомную точку холста
function getRandomPoint(){
    return newPoint = {
        x:getRandomInt(0, width),
        y:getRandomInt(0, height)
    }
}

//Создать рандомное целое число от и до включительно
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Создать рандомное дробное число от и до
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

//Обработка нажатий на элемент Canvas: животные, растения, кнопки
canvas.addEventListener('mouseup', function (e) {
        //здесь код нажатия 
    }
);


//Повторяющаяся функция для работы игрыы
function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    liveCar();
    world();
    drawCar();


}

getCar();
setInterval(draw, 1); //Повторяет функцию draw каждые 10 милисекунд