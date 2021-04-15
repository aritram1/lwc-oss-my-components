import { createElement } from 'lwc';
import '@lwc/synthetic-shadow'; //to incorporate LWC Base components
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
