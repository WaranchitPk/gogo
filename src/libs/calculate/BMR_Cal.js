export const bmr_Calculate = (gender, height, weight, age) => {
    switch (gender) {
        case 'male':
            const bmr_Male = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
            return bmr_Male;
        case 'female':
            const bmr_Female = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            return bmr_Female;
        default:
            return ''
    }
};
export const tdee_calculate = (activity,BMR) =>{
    switch (activity){
        case 1.2:
            const tdee_1 = 1.2*BMR;
            return tdee_1.toFixed(2);
        case 1.375:
            const tdee_2 = 1.375*BMR;
            return tdee_2.toFixed(2);
        case 1.55:
            const tdee_3 = 1.55*BMR;
            return tdee_3.toFixed(2);
        case 1.7:
            const tdee_4 = 1.7*BMR;
            return tdee_4.toFixed(2);
        case 1.9:
            const tdee_5 = 1.7*BMR;
            return tdee_5.toFixed(2);
        default:
            return ''
    }
};
