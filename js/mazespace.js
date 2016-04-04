/**
 * Created by Heya on 2016-04-03.
 */
"use strict"

function  MazeSpace(disrections) {
    var i;
    for(i=0; i<disrections.length; i++){
        this[disrections[i]] = false;
    }
}

MazeSpace.prototype.setWall = function (direction) {
    this[direction] = true;
}