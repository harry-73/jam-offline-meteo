//import { BFormCheckbox } from "bootstrap-vue";
import { Meteor } from 'meteor/meteor';
import Todos from '/imports/api/Todos';


Meteor.publish('todos', function () {
  // this.unblock();

  return Todos.find();
});
