const mongoose  = require('mongoose');

const BuilderSchema = mongoose.Schema({
    name:{
        type: String,
    },
    designation:{
        type: String,
    },
    phone:{
        type: String,
    },
    email:{
        type: String,
    },
    website:{
        type: String,
    },
    address:{
        type: String,
    },
    pinf:{
        type: String,
    },
    caption:{
        type: String,
    },
    university:{
        type: String,
    },
    uni_sub:{
        type: String,
    },
    detailed_qualification:{
        type: String,
    },
    uni_duration:{
        type: String,
    },
    universit:{
        type: String,
    },
    uni_su:{
        type: String,
    },
    detailed_qualificatio:{
        type: String,
    },
    uni_duratio:{
        type: String,
    },
    tech_heading:{
        type: String,
    },
    tech_detail:{
        type: String,
    }
    
});
const Builder= module.exports = mongoose.model('builder',BuilderSchema);



