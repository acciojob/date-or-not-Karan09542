var isDate = function (input) {
  //   write your code here
	// if(new Date(input) != "Invalid Date") return true;
	const date = new Date(input);
	if(date instanceof Date && !isNaN(date.getTime())) return true
	else return false
};

// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));

