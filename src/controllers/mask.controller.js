const maskRepository = require('../repositories/mask.repository.js');

async function createMask(req, res) {
    try {
      const mask = await maskRepository.createMask(req.body);
      res.status(201).json(mask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function getAllMasks(req, res) {
    try {
      const masks = await maskRepository.getAllMasks();
      res.status(200).json(masks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function getMaskById(req, res) {
    try {
      const mask = await maskRepository.getMaskById(req.params.id);
      if (mask) {
        res.status(200).json(mask);
      } else {
        res.status(404).json({ message: 'Máscara no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function updateMask(req, res) {
    try {
      const result = await maskRepository.updateMask(req.params.id, req.body);
      res.status(200).json({ message: 'Máscara actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function deleteMask(req, res) {
    try {
      await maskRepository.deleteMask(req.params.id);
      res.status(200).json({ message: 'Máscara eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  module.exports = { createMask, getAllMasks, getMaskById, updateMask, deleteMask };
