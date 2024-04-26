const PersonaModel = require("./personaModel");

class PersonaRepository {
    async crearPersona(personaData) {
        try {
            const nuevaPersona = await PersonaModel.create(personaData);
            return nuevaPersona;
        } catch (error) {
            throw new Error("No se pudo crear la persona en la base de datos");
        }
    }

    async obtenerTodasLasPersonas() {
        try {
            const personas = await PersonaModel.find({});
            return personas;
        } catch (error) {
            throw new Error("No se pudieron obtener las personas de la base de datos");
        }
    }

    // Implementar otros métodos para actualizar, eliminar y buscar personas según sea necesario
}

module.exports = PersonaRepository;
