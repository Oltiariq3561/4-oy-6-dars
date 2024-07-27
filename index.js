// let arr = [10001,2,3,4,5,6,7];
// let max = [];
// for(let i = 0; i<arr.length; i++){
// if (arr[i] % 2 == 1 && arr[i] > max) {
//     max = arr[i]
// }
// }
// console.log(max);

// let arr = [0,2,0,3,4,5,6,7];
// res = [];
// for(let i = 0; i<arr.length; i++){
// if (arr[i] !== 0 ){
//     res.push(arr[i])
// }
// }
// console.log(res);

// let arr = [0,2,0,3,4,5,6,7];
// let arr2 = [0,2,0,3,4,5,6,7];
// let res = [];
// res = arr.concat(arr2)
// console.log(res);















// UYGA VAZIFA 
// 1-  1 dan foydalanuvchi bergan songacha raqamlardan iborat array hosil qiling.
// let a = +prompt('son');
// let res = [];
// for(let i = 1; i <= a; i++){
// res.push(i)
// }
// console.log(res);

// 3 - Ikki array berilgan ushbu ikki arrayni ichidagi raqamlarini yig’indisini qaytarsin.
// let a = [1,2,3,4];
// let b = [1,2,3,4];
// let ikki = a.concat(b);
// let res = 0;
// for (const iterator of ikki) {
//     res = res + iterator 
// }
// console.log(res);

// 4 - Berilgan massivni elementlarini teskarisiga aylantirib bering. Reverse ishlatish mumkin emas.
// let a = [1,2,3,4];
// let res = [];
// for(let i = a.length-1; i>=0; i--){
// res.push(a[i])
// }
// console.log(res);

// 5-Berilgan massivdagi eng kichik elementning 4-darajasini ekranga chiqauvchi algoritm yozing
// let a = [20,3,4,2];
// let min = a[0];
// for(let i = 0 ; i<a.length; i++){
// if (a[i]<min) {
//     min = a[i]**4;
// }
// }
// console.log(min);





// 2. **Massivdagi barcha satr (string) elementlarni uzunligini ko’rsating 
// let a = [20,3,'salom',4,2];
// let res ;
// for(let i = 0; i<a.length; i++){
// if (typeof a[i] == 'string') {
//     res = a[i].length
// }
// }
// console.log(res);

// 3. **Massivdagi har bir juft sonni o'zidan keyingi son bilan almashtiring. 
// Masalan [3, 7, 4, 5, 6] => [3, 7, 5, 5, 7]
// let a = [20,3,4,2];
// let res = [];
// for(let i = 0; i<a.length; i ++){
// if (a[i] % 2 == 0) {
//     res.push(a[i]+=1)
// }
// }
// console.log(res);

// 4. **Berilgan massivni teskarisiga aylantiring va undagi barcha toq sonlarni 0 ga o'zgartiring.**
// let a = [1,2,3,4];
// for(let i = a.length-1; i>=0; i--){
// if (a[i] % 2 == 1) {
//     a[i] = 0
// }
// }
// console.log(a);


// 5. **Massivdagi har bir elementning indeksiga teng qiymat bilan almashtiring (misol uchun: arr[i] = i).*
// let arr = [4,3,2,1,0];
// for(let i = 0; i<arr.length; i++){
// arr[i]=i
// }
// console.log(arr);

// 6. **Berilgan massivdagi 3 ga karrali elementlarni olib tashlab, natijani yangi massivga saqlang.**
// let arr = [40, 15, 25, 12];
// let res = [];
// for (const iterator of arr) {
//     if (iterator % 3 != 0) {
//         res.push(iterator)
//     }
// }
// console.log(res);

// 7- TO'G'RISI TUSHUNMADIM

// 8. **Massivdagi har bir elementni o'zidan oldingi element bilan almashtiring (birinchi elementni o'z holida qoldiring).**
// let arr = [40, 15, 25, 12];
// for (let i = 1 ; i<arr.length; i++) {
//     arr[i]-=1
// }
// console.log(arr);


// 9. **Berilgan massivdan manfiy sonlarni olib tashlang va natijada hosil bo'lgan massivning uzunligini qaytaring.**
// let arr = [40, -15, 25, -12];
// let res = []
// for (const iterator of arr) {
//     if (iterator >= 0) {
//         res.push(iterator);
//     }
// }
// console.log(res.length);