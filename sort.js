// Tests for sorting

let arr = [83, 333, 40, 799993000, 000001, 10000300783];

let arrange = (a, b) => a - b;

//let sortNumbers = array => {
//		return array.sort(arrange);
//}	

arr.sort(arrange).forEach(el => {
		console.log(el);
});

// console.log(sortNumbers(arr));

