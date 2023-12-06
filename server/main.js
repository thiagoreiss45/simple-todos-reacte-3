import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Meteor.settings["galaxy.meteor.com"].env.TEST_ENV_VAR)
});
