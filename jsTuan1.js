//Cau1
var nangMark = 78;
var caoMark = 1.69;

var nangJohn = 92;
var caoJohn = 1.95;

var markBMI = nangMark / (caoMark * caoMark);
var johnBMI = nangJohn / (caoJohn * caoJohn);

var markHigherBMI = markBMI > johnBMI;

//console.log("BMI Mark:", markBMI);
//console.log("BMI John:", johnBMI);
//Cau2
if (markHigherBMI) {
    console.log("Chỉ số BMI của Mark(", markBMI.toFixed(2), ") cao hơn John!(", johnBMI.toFixed(2), ")");
} else {
    console.log("Chỉ số BMI của John(", johnBMI.toFixed(2), ") cao hơn Mark!(", markBMI.toFixed(2), ")");
}

//Cau3
var Dolphins1 = 96;
var Dolphins2 = 108;
var Dolphins3 = 89;

var Koalas1 = 88;
var Koalas2 = 91;
var Koalas3 = 110;

tbDolphins = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
tbKoalas = (Koalas1 + Koalas2 + Koalas3) / 3;

if (tbDolphins >= 100) {
    if (tbDolphins > tbKoalas) {
        console.log("Dolphins thắng Koalas");
    }
    if (tbDolphins < tbKoalas) {
        console.log("Koalas thắng Dolphins");
    }
    if (tbDolphins == tbKoalas) {
        console.log("2 đội hòa nhau");
    }
} else {
    if (tbKoalas >= 100) {
        console.log("Koalas thắng Donphins");
    } else {
        console.log("Không có đội nào thắng")
    }
}

//Cau 4
var money = 275;
var tip = (money >= 50 && money <= 300) ? tip = money * 0.15 : tip = money * 0.2;
console.log("Hóa đơn là:", money, ",tiền boa là:", tip, "và tổng giá trị:", money + tip);

//Cau5
function calcAverage(diem1, diem2, diem3) {
    var tong = diem1 + diem2 + diem3;
    var tb = tong / 3;
    return tb;
}
var diemDolphins1 = 44;
var diemDolphins2 = 23;
var diemDolphins3 = 71;
var diemKoalas1 = 65;
var diemKoalas2 = 54;
var diemKoalas3 = 49;

var diemtbDolphins = calcAverage(diemDolphins1, diemDolphins2, diemDolphins3);
var diemtbKoalas = calcAverage(diemKoalas1, diemKoalas2, diemKoalas3);

//if (diem)