/**
 * Created by Heya on 2016-04-03.
 */
"use strict"

function  MazeSpace() {
    this.north = false;
    this.east = false;
    this.south = false;
    this.west = false;
}

MazeSpace.prototype.setWall = function (direction) {
    this[direction] = true;
}