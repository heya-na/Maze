/**
 * Created by Heya on 2016-04-03.
 */
"use strict"
function Robot() {
    this.x = null;
    this.y = null;
    this.orientation = null;
    this.maze = null;
}

Robot.prototype.setMaze = function (maze) {
    this.maze = maze;
    this.x = maze.startX;
    this.y = maze.startY;
    this.orientation = maze.startOrientation;
}

Robot.prototype.turnRight = function(){
    if(!this.maze || !this.maze.isValidDirection(this.orientation)){
        return false;
    }
    var right = {
        north : "east",
        east : "south",
        south : "west",
        west: "north"
    }
    this.orientation = rights[this.orientation];
    return true;
}

Robot.prototype.turnLeft = function(){
    if(!this.maze || !this.maze.isValidDirection(this.orientation)){
        return false;
    }
    var left = {
        north : "west",
        east : "north",
        south : "east",
        west: "south"
    }
    this.orientation = left[this.orientation];
    return true;
}

Robot.prototype.moveForward = function () {

    if(!this.canMoveForward()){
        return false;
    }

    switch(this.orientation){
        case "north":
            this.y += 1;
            break;
        case "east":
            this.x += 1;
            break;
        case "south":
            this.y -= 1;
            break;
        case "west":
            this.x -= 1;
            break;
    }

    return true;
}

Robot.prototype.canMoveForward = function () {
    if(!this.maze){
        return false;
    }
    return this.maze.canMove(this.x, this.y, this.orientation);

}