const Mask = require('../models/mask.model.js');

async function createMask(data) {
    return await Mask.create(data);
  }
  
  async function getAllMasks() {
    return await Mask.findAll();
  }
  
  async function getMaskById(id) {
    return await Mask.findByPk(id);
  }
  
  async function updateMask(id, data) {
    return await Mask.update(data, { where: { id } });
  }
  
  async function deleteMask(id) {
    return await Mask.destroy({ where: { id } });
  }

  module.exports = { createMask, getAllMasks, getMaskById, updateMask, deleteMask };
