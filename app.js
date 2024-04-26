const express = require('express');
const dbconnect = require('./config');
const PersonaModel = require('./personaModel');

const app = express();
const router = express.Router(); // Define el enrutador de Express

// Configuración de middleware
app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON

// Definición de rutas
router.post("/persona", async (req, res) => {
    try {
        const body = req.body;
        const newPersona = await PersonaModel.create(body);
        res.send(newPersona);
    } catch (error) {
        res.status(400).send({ error: "No se pudo crear la persona" });
    }
});

router.get("/persona", async (req, res) => {
    try {
        const personas = await PersonaModel.find({});
        res.send(personas);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
});

router.get("/persona/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const persona = await PersonaModel.findById(id);
        if (!persona) {
            return res.status(404).send({ error: "Persona no encontrada" });
        }
        res.send(persona);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
});

router.put("/persona/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedPersona = await PersonaModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedPersona) {
            return res.status(404).send({ error: "Persona no encontrada" });
        }
        res.send(updatedPersona);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
});

router.delete("/persona/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await PersonaModel.deleteOne({ _id: id });
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
});

// Monta el enrutador en la aplicación
app.use('/', router);

// Inicia el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`El servidor está en el puerto ${PORT}`);
});

// Conexión a la base de datos
dbconnect();
