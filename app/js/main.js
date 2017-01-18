//Below is the example of function based Inheritence using "new" keyword.
//Its just trying to mimick the way other languages are creating  Class and inheritence.

function Person(firstName,lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function(){
	console.log("Hello " + this.firstName + " " + this.lastName);
}

var person1 = new Person("Mayur", "Thakor");

console.log(person1); 
console.log(person1.getFullName()); 


//Pure JS based inheritence.

var Employee = {
	empFirstName : "default",
	empLastName : "default",
	greet:function(){
		return this.empFirstName + ' ' + this.empLastName;
	}
}

var emp1 = Object.create(Employee);
emp1.empFirstName = "Surrendre";
emp1.empLastName = "Meena";
console.log(emp1.greet());


