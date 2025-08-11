const mongos = require('mongoose');

const lessonPlanSchema =mongos.Schema(
    {
        begin : {
            type : Number,
            required : true,
        },
        end: {
            type: Number,
            required: true,
        },
        objective :{ 
            type: String,
            required : true,
        }
    }
)
const courseSchema = mongos.Schema(
    {
        name : {
            type : String,
            required : true,
        }
        ,price : {
            type : Number,
            required : true
        },
        image: {
            type: String ,
            required : true
        },
        tutor : {
            type: String,
            required : true,
        },
        category : {
            type : [String],
        },
        chapters: {
            type : Number,
        },
        courseLength:{
            type : String,
        },
        description:{
            type : String,
        },
        lessons:{
            type :Number
        },
        lessonPlan:{
            type : [lessonPlanSchema],
        },


    }
);

module.exports = mongos.model( "Courses" ,courseSchema);