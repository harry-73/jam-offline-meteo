import { Meteor } from 'meteor/meteor'
import '../imports/methods/todos'
import '../imports/pub/todos'
import Todos from '../imports/api/Todos'

Meteor.startup(async () => {
  
    for (let i = 0; i < 10; i++) {
  Todos.insertAsync({
    text: `Todo #${i}`,
    createdAt: new Date()
  });
}

})
