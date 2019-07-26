"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const reposList = document.querySelector('.repos__list--js');

fetch('https://api.github.com/users/Andrzej-Jablonski-project/repos?sort=created')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      reposList.innerHTML += `<li class="repos__name"><a class="repos__link" href="${repo.html_url}">${repo.name}</a></li >`;
    }
  })
  .catch(err => {
    console.log(err);
  })