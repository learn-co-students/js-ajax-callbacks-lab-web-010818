$(document).ready(function (){
  console.log('done loading')
});

const baseUrl = 'https://api.github.com';
const user = 'feihafferkamp';
const token = '446b8579f6fdaab88a4f75629fd7424c1ca394c5'

// const options = {
//   headers: {Authorization: `toekn ${token}`},
//   'Content-Type': 'application/json',
//   Accept: 'application/json'
// }

function getRepositories() {
  fetch(`${baseUrl}/users/${user}/repos`, {
    headers: {Authorization: `toekn ${token}`}
  })
  .then(res => res.json())
  .then(json => filterRepositories(json, getSearchTerm()));
}

/*
1) onclick => searchRepositories
2) grab searchTerm value
3) loop through existing repositories
4) show relevant
*/

function getSearchTerm() {
  return document.getElementById('searchInput').value;
}

function filterRepositories(repos, searchTerm) {
  let results = [];
  for (let i = 0; i < repos.length; i++) {
    if (repos[i].name.includes(searchTerm) {
      results.push(repos[i])
    })
  }
  // let a = repos.forEach((repo) => {
  //   console.log(repo.name);
  // });

  console.log(results)

}

// function searchRepositories(searchTerm) {
//
// }
