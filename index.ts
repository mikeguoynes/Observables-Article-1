import './style.css';

import { of, map } from 'rxjs';


const promiseExample = new Promise(resolve => {
  resolve('single value');
});

promiseExample.then(response => {
  console.log(response);
});
