let data = require('./data');

// your code, here
let respotories = data.length;
console.log("There are " + respotories + " respotories.");

let largestReposotory = 0;
let repositoryName;
data.forEach(repository => {
  if (repository.size > largestReposotory)
{largestReposotory = repository.size; repositoryName = repository;}
});
console.log(repositoryName.name + " has the largest repository with " + largestReposotory + " entries.");

let dates = [];
data.forEach(repo => {
  dates.push(repo.created_at);
} );
dates.sort();
console.log('The most recently created repository was at ' +(dates[dates.length - 1]));

let descriptions = data.map(repository => {
  return repository.description;
});
console.log(descriptions);

let importantInfo = data.map(information =>{
  return "Repo name is " + information.name + ", is owned by " + information.owner + ", and has " + information.watchers_count + " watchers.";
});
console.log(importantInfo);
