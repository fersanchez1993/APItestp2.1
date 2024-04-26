const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/PersonaDB");
        console.log("Conexión a la base de datos establecida");
    } catch (err) {
        console.error("Error de conexión con la base de datos:", err);
    }
}

module.exports = dbconnect;
