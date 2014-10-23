/* alert("Til hammó með ammó!"); */

function printMenuItem()
{
	var menu = 
	{
		1: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		2: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 4,
		},

		3: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		4: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		5: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 3,
		},

		6: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 1,
		},

		7: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		8: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		9: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		10: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 4,
		},

		11: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		12: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		13: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		14: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		15: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		16: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		17: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 1,
		},

		18: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 0,
		},

		19: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 3,
		},

		20: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		21: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 1,
		},

		22: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		23: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 2,
		},

		24: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 5,
		},

		25: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Stir-fried dish", 
			chili: 4,
		},

		26: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 1,
		},

		27: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 5,
		},
		
		28: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 1,
		},
		
		29: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 2,
		},
		
		30: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		31: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		32: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 2,
		},
		
		33: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		34: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Curry dish",
			chili: 3,
		},
		
		35: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 1,
		},

		36: {
			name: "Some seafood",
			description: "A delicious mixture of curry, dcoconut milk and pineapple.",
			category: "Seafood dish",
			chili: 0,
		},
		
		37: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 0,
		},
		
		38: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 3,
		},
		
		39: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 0,
		},
		
		40: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 2,
		},
		
		41: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 3,
		},
		
		42: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 5,
		},
		
		43: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 2,
		},
		
		44: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Seafood dish",
			chili: 3,
		},					
	};

	// CREATE A VARIABLE WITH A FOR LOOP THAT GIVES ME THE LENGTH OF THE OBJECT !!!!!!!!!!!!!! THEN REPLACE * 2 WITH THAT VARIABLE

	var randomNumber = Math.floor(Math.random() * 44) + 1;

	console.log(menu.length)
	console.log(randomNumber)

	document.getElementById("action").innerHTML = ("<div id='firstMsg'>HAVE SOME FUCKING");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourse'>Course </div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourseNumber'> # "+  (randomNumber) + "</div>");
	// document.getElementById("action").innerHTML += ("<div id='menuItemName'>" + menu[randomNumber].name + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCategory'>" + menu[randomNumber].category + "</div>");
	// document.getElementById("action").innerHTML += ("</br>");
	document.getElementById("action").innerHTML += ("<div id='chili'><img src='images/" + menu[randomNumber].chili + "chili.png'></div>");
	document.getElementById("action").innerHTML += ("<div><a id='anotherCourse' href='#' onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a></div>");
	document.getElementById("action").innerHTML += ("<a href='index.html' id='somethingElse'>Where are the fucking main courses???</a>");
	document.getElementById("action").innerHTML += ("<a href='indexTakeaway.html' id='somethingElse'>I'm fucking eating out</a>");
};

