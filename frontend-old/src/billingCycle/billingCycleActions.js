import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3004/api/'

const INITIAL_VALUES = {credits: [{}], debts: [{}]};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request 
    }
}

export function create(values) {
    return submit(values, 'post');
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function update(values) {
    return submit(values, 'put');
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ];
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function remove(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    return dispatch => {
        axios[method](`${BASE_URL}/billingCycles/${values._id ? values._id : ''}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.');

                /* Manualmente
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ]);*/

                //Pelo init
                dispatch(init());
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error("Erro", error));
            });
    }
}