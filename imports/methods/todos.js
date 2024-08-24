import Todos from '../api/Todos';


import  SimpleSchema  from 'simpl-schema'

export const activitycreatefromgps = new ValidatedMethod({
  name: 'activitycreatefromgps',
  rateLimit: {
    numRequests: 5,
    timeInterval: 5000
  },
  validate: new SimpleSchema({
    name: { type: String },
    type: { type: String },
    description: { type: String },
    time: { type: String },
    dateActivity: { type: String },
    distance: { type: Number },
    Notes: { type: Array },
    'Notes.$': { type: String },
    checked: { type: Array },
    'checked.$': { type: String },
    geojson: { type: Array },
    'geojson.$': { type: Object },
    'geojson.$.type': { type: String },
    'geojson.$.properties': { type: Object },
    'geojson.$.properties.time': { type: String },
    'geojson.$.properties.coordinateProperties': { type: Object },
    'geojson.$.properties.coordinateProperties.times': { type: Array },
    'geojson.$.properties.coordinateProperties.times.$': { type: String },
    'geojson.$.properties.coordinateProperties.heart': { type: Array },
    'geojson.$.properties.coordinateProperties.heart.$': { type: Number },
    'geojson.$.geometry': { type: Object },
    'geojson.$.geometry.type': { type: String },
    'geojson.$.geometry.coordinates': { type: Array },
    'geojson.$.geometry.coordinates.$': { type: Array },
    'geojson.$.geometry.coordinates.$.$': { type: Number }
  }).validator(),

  run: async function ({
    name,
    type,
    time,
    description,
    dateActivity,
    distance,
    Notes,
    checked,
    geojson
  }) { }
})