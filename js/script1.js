
	var new_arr = [];
	var arr = ["Я", "люблю", "JavaScript"];

	for (var i = 0; i < arr.length; i++) {
		new_arr[i] = arr[i].length;
	}; 
	console.log(new_arr);
		
	var new_arr = [];
	var arr = ["Я", "люблю", "JavaScript"];
		
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].length);
	};

	var new_arr = [];
	var arr = ["Я", "люблю", "JavaScript"];
	
	new_arr = arr.map(function(arr) {
		return arr.length;
	});
	console.log(new_arr);

	var new_arr = [];
	var arr = ["Я", "люблю", "JavaScript"];
	
	for (var i = 0; i < arr.length; i++) {
		new_arr.push(arr[i].length);
	}; 
	console.log(new_arr);