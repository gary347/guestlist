var GuestName ;
var names_of_people = [];

function add()
{
var GuestName = document.getElementById("Name11").value;
names_of_people.push(GuestName);
document.getElementById("Name1").value = names_of_people;
}

function show()
{
names_of_people.sort();
document.getElementById("Name2").innerHTML=names_of_people;
}
