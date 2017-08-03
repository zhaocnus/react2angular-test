import angular from 'angular';
import { react2angular } from 'react2angular';
import MyComponent from './MyComponent';

angular
  .module('app', [])
  .component('myComponent', react2angular(MyComponent));
