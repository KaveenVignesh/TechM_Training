// Create a object called student with properties id, name, department, college and email.Write a function to access the properties and display them. Invoke the function to display the details
// Write another function to access the properties id, name and email and display them. Invoke the function to display the details
// Add a property called address, as another object, with properties as doorNo, street, area and pincode
// Add a function to display the details of the student with address.
// Delete the property email and the function created to display id, name and email.


var student={
    id:1,
    name:"suhail",
    department:"IT",
    college:"PIT",
    email:"suhail@gmail.com"
}
function display(){
    console.log("student details")
    console.log("ID: "+student.id)
    console.log("Name: "+student.name)
    console.log("department: "+student.department)
    console.log("college: "+student.college)
    console.log("email: "+student.email)
}
display()

function accessdetails(){
    console.log("student details")
    console.log("ID: "+student.id)
    console.log("Name: "+student.name)
    console.log("email: "+student.email)

}
accessdetails()

student.address={
    doorno:22,
    street:"raja street-1",
    area:"iyyapaanthangal",
    pincode:631001
}

function displayaddress(){
    console.log("student adress")
    console.log("Door No: "+student.address.doorno)
    console.log("Street: "+student.address.street)
    console.log("Area: "+student.address.area)
    console.log("Pincode: "+student.address.pincode)
}
displayaddress()

delete student.email;
delete accessdetails;

accessdetails()
