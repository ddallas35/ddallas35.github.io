var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:500,y:groundY - 100},
                {type: 'sawblade',x:1100,y:groundY - 120},
                {type: 'sawblade',x:1900,y:groundY - 110},
                {type: 'dragon',x:465,y: groundY - 100},
                {type: 'dragon',x:1000,y: 100},
                {type: 'dragon',x:2750,y: groundY - 200},
                {type: 'enemy',x:650, y:425},
                {type: 'enemy',x:750, y:425},
                {type: 'enemy',x:950, y:425},
                {type: 'enemy',x:1250, y:425},
                {type: 'enemy',x:1650, y:425},
                {type: 'enemy',x:2150, y:425},
                {type: 'enemy',x:2750, y:425},
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        function createSawBlade(x,y){

        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        
        createSawBlade(500, groundY - 100);
        createSawBlade(1100, groundY - 120);
        createSawBlade(1900, groundY - 110);
        
        function createDragon(x,y) {
            
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        myObstacle.scaleX = 0.2;
        myObstacle.scaleY = 0.2;
        
        game.addGameItem(myObstacle);
        
        var obstacleImage = draw.bitmap('img/Dragon.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        myObstacle.onProjectileCollision = function (){
            game.increaseScore(200);
            myObstacle.fadeOut();
            };
        }

        createDragon(635, 400);
        createDragon(1300, 350);
        createDragon(1999,400);
        createDragon(2750, groundY - 50);
        
        function createEnemy (x,y){
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'black');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1;
        enemy.rotationalVelocity = 20;
        enemy.onPlayerCollision = function (){
            game.changeIntegrity(100);
            };
        enemy.onProjectileCollision = function (){
            game.increaseScore(200);
            enemy.fadeOut();
            };
        }
        
        createEnemy(650, 425);
        createEnemy(750, 425);
        createEnemy(950, 425);
        createEnemy(1250, 425);
        createEnemy(1650, 425);
        createEnemy(2150, 425);
        createEnemy(2750, 425);
        
    function createReward(x,y){
        var reward = game.createGameItem('reward',17);
        var whiteCircle = draw.circle(16, 'white','black');
        reward.addChild(whiteCircle);
        reward.x = x;
        reward.y = y;
        reward.velocityX = -2;
        game.addGameItem(reward);
        
        reward.onPlayerCollision = function (){
            game.changeIntegrity(30);
            game.increaseScore(100);
            reward.fadeOut();
        };
    }
    
    createReward(150,400);
    createReward(420,420);
    createReward(750,430);
    createReward(1000,400);
    createReward(1200,400);
    createReward(1350,400);
    createReward(1470,400);
    createReward(1900,400);
    createReward(1000,400);
     
     
};
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}