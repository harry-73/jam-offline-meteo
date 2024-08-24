import { Mongo } from 'meteor/mongo';

const Todos = new Mongo.Collection('todos',  {
  idGeneration: 'MONGO'
});




export default Todos;
