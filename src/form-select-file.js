// import React from 'react'
// export default function FormSelectFile() {
//     const inputFile = React.useRef()
//     const selectMaxNumFiles = React.useRef()
//     const selectMaxSize = React.useRef()
//     let maxNumfiles = [1, 2, 3, 4, 5] //จ านวนไฟล์ที่เลือกได้
//     let maxSizeList = [50, 100, 200, 500, 1000] //ขนาดสูงสุดของไฟล
//     //เมื่อคลิกปุ่ม ให้น าค่าจาก select ทั้งสองอันมาเป็นเงื่อนไขตรวจสอบไฟล์
//     const onClickButton = () => {
//         let maxNumFiles = selectMaxNumFiles.current.value
//         let maxSize = selectMaxSize.current.value
//         //ตรวจสอบจ านวนไฟล์
//         if (inputFile.current.files.length > maxNumFiles) {
//             alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
//             return
//         }
//         //ตรวจสอบขนาดของแต่ละไฟล์
//         for (let f of inputFile.current.files) {
//             if (f.size > maxSize * 1000) {
//                 alert(`ขนาดของแต่ไฟล์ต้องไม่เกิน ${maxSize} KB`)
//                 return
//             }
//         }
//         alert('Files OK')
//     }
//     return (
// <div className="mt-4 ………………………… p-3 rounded" style={{ width:'400px', background:'#cee'}}>
// <form>
// <div className="form-group mb-3">
// <label htmlFor="maxNumFiles" className="form-label">จ านวนไฟล์สูงสุด</label>
// <select id="………………………." className="form-select form-select-sm" ref={………………………………….}>
// {
// maxNumfiles.map(i => {
// return <………………. value={i}>{…..}</…………………>
// })
// }
// </select>
// </div>
// <div className="form-group mb-3">
// <label htmlFor="………………………." className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
// <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
// {
// …………………………………(i => {
// return <option value={i}>{i}</option>
// })
// }
// </select>
// </div>
// <div className="……………………. mb-3">
// <label htmlFor="file" className="………………….">เลือกไฟล์</label>
// <input type="………." id="file" accept="image/*"
// className="………………….. form-control-sm" ref={………………} multiple/>
// </div>
// <div className="text-center mt-4">
// <button type="button" className="btn btn-sm …………………….. px-4"
// onClick={……………………………………}>OK
// </button>
// </div >
// </form >
// </div >
// )
// }