import controller from './projects.controller';
import template from './template.html';

export default {
  bindings: {
    catalog: '<',
    createProject: '<',
    guideUrl: '<',
    goToChangeOffer: '<',
    goToUserLicences: '<',
    openPartnerConsole: '<',
    projects: '<',
    terminateProject: '<',
    viewDetails: '<',
    user: '<',
  },
  controller,
  template,
};
