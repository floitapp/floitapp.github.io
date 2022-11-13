// Import CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';
class App {
  constructor() {

    const el = document.querySelector('[data-button-form-submit]');
    el.addEventListener('click', handleClick);

    function handleClick(ev) {
      ev.preventDefault();
      const formEl = findForm(ev.target);
      const formData = new FormData(formEl);
      const request = new XMLHttpRequest();
      request.onload = (ev) => {
        console.log(ev);
      }
      // request.open("PUT", "https://bwe9las6e7.execute-api.eu-west-1.amazonaws.com/default/readWriteDynamoDB/");
      request.open("PUT", "https://mx7v8u910g.execute-api.eu-west-1.amazonaws.com/items");
      request.setRequestHeader('Content-type', 'application/json');
      // const testData = JSON.parse({id: '987654', price: '12345', name: 'myitem'});
      const json = '{"id":true, "count":42}';
      const obj = JSON.parse(json);
      request.send(obj);
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
