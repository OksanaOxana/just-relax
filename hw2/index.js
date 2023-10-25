function Movies(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
}

const dateOne = new Movies("Kassem", 20, "cLivan");
const dateTwo = new Movies("Humberto", 27, "USA");
const dateThree = new Movies("Ed", 39, "Peru");
const dateFour = new Movies("Ziya", 31, "India");
const dateFive = new Movies("Adellilah", 26, "Morocco");

console.log(dateOne);
console.log(dateTwo);
console.log(dateThree);
console.log(dateFour);
console.log(dateFive);