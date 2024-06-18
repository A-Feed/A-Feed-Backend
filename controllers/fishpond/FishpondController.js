const Fishpond = require("../../models/FishpondModel");

// Create Fishpond
exports.CreateFishpond = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newFishpond = await Fishpond.create({ username, email, password });
        res.status(201).json(newFishpond);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read Fishpond
exports.ViewFishpond = async (req, res) => {
    try {
        const fishponds = await Fishpond.findAll();
        res.status(200).json(fishponds);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read Fishpond by ID
exports.ViewFishpondById = async (req, res) => {
    try {
        const fishpond = await Fishpond.findByPk(req.params.id);
        if (fishpond) {
            res.status(200).json(fishpond);
        } else {
            res.status(404).json({ error: "Fishpond not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Fishpond
exports.UpdateFishpond = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const fishpond = await Fishpond.findByPk(req.params.id);
        if (fishpond) {
            fishpond.username = username;
            fishpond.email = email;
            fishpond.password = password;
            await fishpond.save();
            res.status(200).json(fishpond);
        } else {
            res.status(404).json({ error: "Fishpond not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Fishpond
exports.DeleteFishpond = async (req, res) => {
    try {
        const fishpond = await Fishpond.findByPk(req.params.id);
        if (fishpond) {
            await fishpond.destroy();
            res.status(200).json({ message: "Fishpond deleted" });
        } else {
            res.status(404).json({ error: "Fishpond not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};