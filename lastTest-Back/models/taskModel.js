const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const taskSchema = new Schema({

   idenTask:{
    type: Number,
    required: false
   },

   titleTask:{
    type: String,
    required: true
   },
   statsTask:{
    type: Boolean,
   }
}, 
{
    timestamps: true
}
)

module.exports= mongoose.model("tasks", taskSchema)