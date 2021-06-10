var state = 0
var backImg
var start, chatBot, startImg, chatBotImg
var bgMusic, music,musicPlay,muiscStop,whiteBg
var button,game, gameImg, undo, undoImg
var gameX
var canvas, backgroundImage;
var gameState = 0
var finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passedFinish;
var obstacles;
var s,i;
var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;


function preload ()
{
    backImg = loadImage("images/background_image.jpg")
    startImg = loadImage("images/start button.png")
    chatBotImg = loadImage("images/chatbot.png")
    whiteBg = loadImage("images/whitebg.png")
    gameImg = loadImage("images/gameImg.png")
    undoImg = loadImage("images/undo.png")

    bgMusic = loadSound("sounds/bgmusic.mp3")

}

function setup()
{
    createCanvas(1200,600);

    start = createSprite(300,200)
    start.addImage(startImg)
    start.scale = 0.075

    chatBot = createSprite(950,200)
    chatBot.addImage(chatBotImg)
    chatBot.scale = 0.08

    button = createButton("play")
    button.position(100,100,50,50)
    button.mousePressed(musicX)

    gameX = createSprite(600,250)
    gameX.addImage(gameImg)
    gameX.visible = false
    gameX.scale = 0.25

    undo = createSprite(100,500)
    undo.addImage(undoImg)
    undo.scale = 0.1

    var a = createA('https://console.dialogflow.com/api-client/demo/embedded/c8fc065a-b6ad-486c-b0b1-8c230d25da3b', 'click here to access the chatbot','_blank');
    a.position(850,200);
    a.style('font-size','24px')
}

function draw()
{
    background(backImg)
    

    if(state == 0){
        textSize(32)
        fill("red")
        textFont("Berlin Sans FB Demi")
        text("Legendary Game",500,100)
        fill("blue")
        text("Press on the Game button to enter the gaming phase.",250,400)
        text("Press on the chatbot to access the chatbot.",300,500)
        fill("skyblue")
        text("Game",250,325)
        text("Chatbot",900,325)
        
        if(mousePressedOver(chatBot)){}

        if(mousePressedOver(undo)){
            text("This is the first page",475,50)
        }
        if(mousePressedOver(start)){
            state = 1
        }

    }

    if(state == 1){
        gameX.visible = true
        background(whiteBg)
        textSize(28)
        fill("red")
        textFont("Bradley Hand ITC")
        text("This is an multiplayer Game, where four players can together play it.",250,100)
        text("Press on the game button below to start it.",500,150)
        start.visible = false
        chatBot.visible = false

        if(mousePressedOver(undo)){
            state = 0
            chatBot.visible = true
            start.visible = true
            gameX.visible = false
        }

        if(mousePressedOver(gameX)){
            var b = createA('https://krish2580-pro.github.io/part2/', 'click here to play the game','_blank');
            b.position(450,200);
            b.style('font-size','24px')
        }
      }
    drawSprites()
}

function musicX(){
    if(!bgMusic.isPlaying()){
                bgMusic.play()
                bgMusic.setVolume(0.5)
                button.html("pause")
            }else{
                bgMusic.pause()
                button.html("play")
            }
}