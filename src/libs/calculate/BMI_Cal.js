export const bmi_Calculate = (height,weight) =>{
    const cm_To_m = height/100;
    const bmi = weight/Math.pow(cm_To_m,2);
    return bmi.toFixed(2)
};
export const bmi_status = (bmi) =>{
    if (bmi < 18.5){
        const status_s1 = 'น้ำหนักต่ำกว่าเกณฑ์';
        return status_s1
    }else if(bmi >= 18.5 && bmi <= 22.9){
        const status_s2 = 'สมส่วน';
        return status_s2
    }else if(bmi >= 23.0 && bmi <= 24.9){
        const status_s3 = 'น้ำหนักเกิน';
        return status_s3
    }else if(bmi >= 25.0 && bmi <= 29.9){
        const status_s4 = 'โรคอ้วน';
        return status_s4
    }else if(bmi > 30){
        const status_s5 = 'โรคอ้วนอันตราย';
        return status_s5
    }
};