<script setup>

import { onMounted } from 'vue'
import { queueMethod } from 'meteor/jam:offline';

onMounted(() => {
  console.log('Home mounted')
  createEntry()
})

async function createEntry() {



  if (!Meteor.status().connected) {
    // check that the user is offline
    queueMethod('activitycreatefromgps', {
        "name": "Foo",
        "type": "Blabla",
        "description": "...",
        "time": "00:00:03",
        "dateActivity": "2100-08-23T14:16:07+02:00",
        "distance": 0,
        "Notes": [],
        "checked": [],
        "geojson": [
            {
                "type": "Feature",
                "properties": {
                    "time": "",
                    "coordinateProperties": {
                        "times": [],
                        "heart": []
                    }
                },
                "geometry": {
                    "type": "LineString",
                    "coordinates": []
                }
            }
        ]
}).catch((error) => {
      console.log('Error activity.createfromgps :', error);
    });
  }
}

</script>
<template>
  <h1 class="text-3xl font-bold my-6">About Page</h1>

  <p>This is the about page.</p>
</template>
