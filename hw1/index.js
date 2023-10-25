function Movies(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
}

const movieOne = new Movies("Red hotel", 2007, "comedy");
const movieTwo = new Movies("Intouchable", 2011, "drama");
const movieThree = new Movies("We don't choose our family", 2011, "adventure comedy");
const movieFour = new Movies("Wasabi", 2001, "action movie");
const movieFive = new Movies("Tourist", 2010, "thriller");

console.log(movieOne);
console.log(movieTwo);
console.log(movieThree);
console.log(movieFour);
console.log(movieFive);