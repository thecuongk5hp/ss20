
let a = 6;
let result = ++a + a + a++ + ++a + a;
// Giải thích từng bước:
// ++a: Tăng a lên 1 (a = 7). result = 7 + a (7) + a++ + ++a + a
// a: sử dụng giá trị hiện tại của a (7). result = 7 + 7 + a++ + ++a + a
// a++: sử dụng giá trị hiện tại của a (7), sau đó tăng a lên 1 (a = 8). result = 7 + 7 + 7 + ++a + a
// ++a: Tăng a lên 1 (a = 9). result = 7 + 7 + 7 + 9 + a
// a: sử dụng giá trị hiện tại của a (9). result = 7 + 7 + 7 + 9 + 9

console.log(result); // Kết quả là 39
console.log(a); // Giá trị của a sau khi thực hiện là 9
