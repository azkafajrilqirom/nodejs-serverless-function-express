const mongoose = require('mongoose');

const timeSettingSchema = new mongoose.Schema({
  openHour: { type: Number, required: true },
  closeHour: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('TimeSetting', timeSettingSchema);

