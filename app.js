class PageState {
  constructor() {
    let currentState = new homeState(this);

    this.init = function () {
      this.change(new homeState);
    };

    this.change = function (state) {
      currentState = state;
    };
  }
};


// Home state
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `
}
// About state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#content').innerHTML = `
  <p> This is the about page </p>`
}

// Contact state

// Instantiate page
const page = new PageState();


//Init the first state

page.init();

// UI vars
const home = document.getElementById('home'),
      about = document.getElementById('about');

      home.addEventListener('click', (e) => {
        page.change(new homeState);
        e.preventDefault()
      });
      about.addEventListener('click', (e) => {
        page.change(new aboutState);
        e.preventDefault()
      })

      //This is the state pattern