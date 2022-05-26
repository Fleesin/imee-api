const mongoose = require('mongoose');

/**
 * Se crea un esquema para un usuario. Este usuario tendra las propiedades name, email, password.
 * Todas obligatorias, y todas aceptan un string.
 */
const studentSchema = new mongoose.Schema({
    fName,
    lName,
    tId,
    id,
    nationality,
    address,
    barrio,
    locality,
    phone,
    EPS,
    t_blood,
    rh,
    Gender,
    fNameP,
    lNameP,
    idP,
    emailM,
    fNameM,
    lNameM,
    idM,
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

module.exports = mongoose.model('Student', studentSchema);