const mongoose = require('mongoose');

/**
 * Se crea un esquema para un usuario. Este usuario tendra las propiedades name, email, password.
 * Todas obligatorias, y todas aceptan un string.
 */
const userSchema = new mongoose.Schema({
    fName:{
        type: String,
        required: true
    },
    lName:{
        type: String,
        required: true
    },
    tId:{
        type: String,
        required: true
    },
    id:{
        type: String,
        required: true
    },
    nationality:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    barrio:{
        type: String,
        required: true
    },
    locality:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    eps:{
        type: String,
        required: true
    },
    t_blood:{
        type: String,
        required: true
    },
    rh:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },
    fNameP:{
        type: String,
        required: true
    },
    lNameP:{
        type: String,
        required: true
    },
    idP:{
        type: String,
        required: true
    },
    emailM:{
        type: String,
        required: true
    },
    fNameM:{
        type: String,
        required: true
    },
    lNameM:{
        type: String,
        required: true
    },
    idM:{
        type: String,
        required: true
    },
    emailM:{
        type: String,
        required: true
    },

    estrato:{
        type: Number,
        required: true
    },

    born:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);