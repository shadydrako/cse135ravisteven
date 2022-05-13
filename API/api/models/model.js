'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//task collection will have a string and the date it was created, and the task status

var TaskSchema = new Schema({
    name: { 
        type: String,
        required: ' GIMME TASK PLEASE'
    },
    Created_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

//that is what is in the table

module.exports = mongoose.model('Tasks', TaskSchema);