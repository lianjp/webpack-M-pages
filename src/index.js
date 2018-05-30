/**
 * Created by helti on 2018/5/6.
 */

import './style/index.scss'

import _ from 'lodash'

import printMe from './about'
import {cube} from "./lib/math";

console.log('index');
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'webpack',
    'cube(5)' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());
if (module.hot) {
  module.hot.accept('./about.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
