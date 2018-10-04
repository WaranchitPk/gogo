import {
    loadDataIncome,
    loadDataIncomeCate,
    loadDataIncomeCateChange,
    loadDataIncomeTrends
} from '../actions/types';

export const DataIncome = (state = {}, action) => {
    switch (action.type) {
        case `${loadDataIncome}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadDataIncome}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadDataIncome}_REJECTED`:
            return {
                ...state,
                data: null,
                err: 'err'
            };
        default:
            return state;
    }
};

export const DataIncomeCate = (state = {}, action) => {
    switch (action.type) {
        case `${loadDataIncomeCate}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadDataIncomeCate}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadDataIncomeCate}_REJECTED`:
            return {
                ...state,
                data: null,
                err: 'err'
            };
        default:
            return state;
    }
};

export const DataIncomeCateChange = (state = {}, action) => {
    switch (action.type) {
        case `${loadDataIncomeCateChange}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadDataIncomeCateChange}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadDataIncomeCateChange}_REJECTED`:
            return {
                ...state,
                data: null,
                err: 'err'
            };
        default:
            return state;
    }
};

export const DataIncomeTrends = (state = {}, action) => {
    switch (action.type) {
        case `${loadDataIncomeTrends}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${loadDataIncomeTrends}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${loadDataIncomeTrends}_REJECTED`:
            return {
                ...state,
                data: null,
                err: 'err'
            };
        default:
            return state;
    }
};
