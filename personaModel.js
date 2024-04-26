const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
    nombre: String,
    dni: String,
    fechaNacimiento: Date
},	
{
    timestamps: true,
    versionKey: false
});

const PersonaModel = mongoose.model("Persona", personaSchema);

module.exports = PersonaModel;
