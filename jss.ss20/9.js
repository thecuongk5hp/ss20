let a = 5;
let b = "5";

console.log(a == b);  // true - so sánh giá trị sau khi chuyển đổi kiểu dữ liệu
console.log(a === b); // false - so sánh nghiêm ngặt (khác kiểu dữ liệu)

console.log(a != b);  // false - so sánh giá trị sau khi chuyển đổi kiểu dữ liệu
console.log(a !== b); // true - so sánh nghiêm ngặt (khác kiểu dữ liệu)

// nếu bạn so sánh một chuỗi và một số sử dụng ==, JS sẽ cố gắng chuyển đổi
// chúng về cùng một kiểu rồi so sánh giá trị. Ví dụ: 5 == '5' sẽ trả về true do JS tự chuyển
// đổi chuỗi '5' thành số 5 để so sánh.

// Nếu hai biến có cùng giá trị và cùng kiểu dữ liệu, thì kết quả sẽ là true.
//  Ví dụ: 5 === '5' sẽ trả về false vì một biến là số và một biến là chuỗi, khác kiểu.

console.log(a!=b);
console.log(a!==b);

// `!=` là toán tử so sánh "không bằng" giá trị
// 5 != '5' sẽ trả về false do sau khi chuyển đổi kiểu, cả hai biến có cùng giá trị là 5.

// !== là toán tử so sánh "không bằng" cả về giá trị và kiểu
//  5 !== '5' sẽ trả về true vì một biến là số và một biến là chuỗi, không chỉ khác giá trị mà còn khác kiểu dữ liệu.