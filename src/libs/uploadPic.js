// import request from "superagent";
// import {
//   CLOUDINARY_UPLOAD_PRESET,
//   CLOUDINARY_UPLOAD_URL
// } from "../config";
// import { updateData } from "../actions/users";
//
// const uploadImg = () => {
//   this.setState({
//     loadingUpload: false
//   });
//   let upload = request.post(CLOUDINARY_UPLOAD_URL)
//     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//     .field('file', this.state.uploadedFile);
//   upload.end((err, response) => {
//     if (err) {
//       console.error(err)
//     }
//     if (response.body.secure_url !== '') {
//       const picName = `${response.body.public_id}.jpg`
//       const bodyData = {
//         fName: fName,
//         lName: lName,
//         age: age,
//         email: email,
//         gender: gender,
//         pic: picName
//       };
//       updateData(bodyData, push);
//       this.setState({
//         loadingUpload: true
//       });
//     }
//   })
// };
