import angular from 'angular';
import '@uirouter/angularjs';

import stopComponent from '../components/stop';
import routing from './stop.routing';

const moduleName = 'ovhManagerPciAppsStop';

angular.module(moduleName, ['ui.router', stopComponent]).config(routing);

export default moduleName;
