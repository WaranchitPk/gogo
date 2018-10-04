export const sumValueCal = (food) => {
    let sumValue = food.reduce((a, b) => {
        return a + b.food_cal
    }, 0);
    return sumValue
};

export const sumValueProtien = (food) => {
    let sumValue = food.reduce((a, b) => {
        return a + b.food_protien
    }, 0);
    return sumValue
};

export const sumValueFat = (food) => {
    let sumValue = food.reduce((a, b) => {
        return a + b.food_fat
    }, 0);
    return sumValue
};
export const sumValueCarb = (food) => {
    let sumValue = food.reduce((a, b) => {
        return a + b.food_carb
    }, 0);
    return sumValue
};