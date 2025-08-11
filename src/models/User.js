const mongos = require('mongoose');

const paymentMethodSchema = new mongos.Schema(
    {
        cardHolderName:{
            type : String,
            required : true
        },
        cardHolderNumber : {
            type: String,
            required : true,
        },
        cvv : {
            type :String,
            required : true,
        },
        expiryDate:{
            type:String,
            required : true,
        },
    }
)

const userSchema = new mongos.Schema(
    {
        name : {
            type : String ,
        },
        email: {
            type: String,
            required : true,
            unique : true,
        }
        ,password: { 
            type: String ,
            required : true,
        }
        ,image: {
            type : String,
        }
        ,paymentMethod: {
            type : paymentMethodSchema
        }
    }
);


module.exports = mongos.model("User",userSchema);