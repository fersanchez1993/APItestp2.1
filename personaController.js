const PersonaRepository = require("./personaRepository");

const personaRepository = new PersonaRepository();

class PersonaController {
    async crearPersona(req, res) {
        try {
            const personaData = req.body;
            const nuevaPersona = await personaRepository.crearPersona(personaData);
            res.status(201).json(nuevaPersona);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerTodasLasPersonas(req, res) {
        try {
            const personas = await personaRepository.obtenerTodasLasPersonas();
            res.json(personas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Implementar otros métodos para actualizar, eliminar y buscar personas según sea necesario
}

module.exports = PersonaController;
