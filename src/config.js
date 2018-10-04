export const path_API = "http://localhost:9999/api";

export const CLOUDINARY_UPLOAD_PRESET = "sn3964gj";
export const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/projpj/upload";
export const CLOUDINARY_UPLOAD_PRESET_Training_Equipment = "yvgnr2xl";
export const showImage = (name) =>{
  return `https://res.cloudinary.com/projpj/image/upload/v1533311021/${name}`;
};

//show img training equipment
export const showImgTraining_equip = (name) =>{
  return `https://res.cloudinary.com/projpj/image/upload/v1535516698/${name}`
}
