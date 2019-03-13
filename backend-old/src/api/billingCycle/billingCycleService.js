const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});
BillingCycle.after('post', errorHandler).after('put', errorHandler);

BillingCycle.route('count.get', (req, res, next) =>{
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]});

        } else {
            res.json({value});
        }
    });
});

BillingCycle.route('summary', ['get'], (req, res, next) =>{
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}//cria os agreggadores de valor
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}//soma os agregaores de cada registro. _id_null é para nao filtrar por id
    }, {
        $project: {_id: 0, credit: 1, debt: 1}//define quais colunas serão retornadas
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    });
});

module.exports = BillingCycle;