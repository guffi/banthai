/* alert("Til hammó með ammó!"); */

function printMenuItem()
{
	var menu = 
	{
		1: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 1,
		},

		2: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		3: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		4: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		5: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		6: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		7: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 1,
		},

		8: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 3,
		},

		9: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		10: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		11: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 2,
		},

		12: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 0,
		},

		13: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 1,
		},

		14: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 2,
		},

		15: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Hot Appetizer", 
			chili: 1,
		},

		16: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		17: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		18: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		19: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		20: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 0,
		},

		21: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		22: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 0,
		},

		23: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		24: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		25: {
			name: "Something stir-fried",
			description: "Mild and slightly sweet curry with coconut milk, potatoes and peanuts.",
			category: "Cold Appetizer", 
			chili: 3,
		},

		26: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Cold Appetizer",
			chili: 3,
		},

		27: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Cold Appetizer",
			chili: 0,
		},
		
		28: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 3,
		},
		
		29: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 0,
		},
		
		30: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 0,
		},
		
		31: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 2,
		},
		
		32: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 0,
		},
		
		33: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 1,
		},
		
		34: {
			name: "Curry something",
			description: "Red curry with coconut milk and bamboo shoots.",
			category: "Barbecue",
			chili: 0,
		},
		
		35: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Barbecue",
			chili: 2,
		},

		36: {
			name: "Some seafood",
			description: "A delicious mixture of curry, dcoconut milk and pineapple.",
			category: "Barbecue",
			chili: 0,
		},
		
		37: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Barbecue",
			chili: 2,
		},
		
		38: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 3,
		},
		
		39: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 1,
		},
		
		40: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 2,
		},
		
		41: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 2,
		},
		
		42: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 1,
		},
		
		43: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 3,
		},
		
		44: {
			name: "Some seafood",
			description: "A delicious mixture of curry, coconut milk and pineapple.",
			category: "Soup",
			chili: 2,
		},					
	};

	// CREATE A VARIABLE WITH A FOR LOOP THAT GIVES ME THE LENGTH OF THE OBJECT !!!!!!!!!!!!!! THEN REPLACE * 2 WITH THAT VARIABLE

	var randomNumber = Math.floor(Math.random() * 44) + 1;

	console.log(menu.length)
	console.log(randomNumber)

	document.getElementById("action").innerHTML = ("<div id='firstMsg'>HAVE SOME FUCKING");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourse'>Appetizer </div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCourseNumber'> # "+  (randomNumber) + "</div>");
	// document.getElementById("action").innerHTML += ("<div id='menuItemName'>" + menu[randomNumber].name + "</div>");
	document.getElementById("action").innerHTML += ("<div id='menuItemCategory'>" + menu[randomNumber].category + "</div>");
	// document.getElementById("action").innerHTML += ("</br>");
	document.getElementById("action").innerHTML += ("<div id='chili'><img src='images/" + menu[randomNumber].chili + "chili.png'></div>");
	document.getElementById("action").innerHTML += ("<div><a id='anotherCourse' href='#' onclick='printMenuItem()'>I DON'T FUCKING WANT THIS</a></div>");
	document.getElementById("action").innerHTML += ("<a href='index.html' id='somethingElse1'>Where are the fucking main courses???</a>");
	document.getElementById("action").innerHTML += ("<a href='indexTakeaway.html' id='somethingElse2'>I'm fucking eating out</a>");
};

