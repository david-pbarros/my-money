const restfull  = require('node-restful');

const mongoose = restfull.mongoose;

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: [true, "informe o valor do credito"]}
});

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
});

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, require: true},
    month: {type: Number, min: 1, max: 12, required: true},
    year: {type: Number, min: 1970, max: 2100, require: true},
    credits: [creditSchema],
    debts: [debtSchema]
});

module.exports = restfull.model('BillingCycle', billingCycleSchema);