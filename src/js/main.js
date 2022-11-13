// Import CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

class App {
  constructor() {

    const el = document.querySelector('[data-button-form-submit]');
    el.addEventListener('click', handleClick);

    async function handleClick(ev) {
      try {
        ev.preventDefault();
        const formEl = findForm(ev.target);
        const responseEl = formEl.querySelector('.response');
        const formData = new FormData(formEl);
        const data = {
          type: formData.get('type'),
          updates: formData.get('updates'),
          email: formData.get('email')
        }
        const url = 'https://mx7v8u910g.execute-api.eu-west-1.amazonaws.com/items';
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.status === 200) {
          responseEl.innerText = 'You\'ve been added to our email list';
          ev.target.classList.add('disabled');
        } else {
          responseEl.innerText = 'Something went wrong, please try again later, or drop us an email at hello@floit.app';
        }
        // const resData = await response.json();
      } catch (error) {
        console.log(error);
      }
    }

      function findForm(el) {
        if (el.nodeName === 'FORM') {
          return el;
        } else {
          return findForm(el.parentElement);
        }
      }
    }
  }

  const app = new App;
