import './body.html';

import { Rooms } from '../../api/rooms.js';

import '../rooms-template/rooms.js';

Template.body.events({
  'submit .new-room'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const name = target.name.value;
    const image = '';
    const details = target.details.value;
 
    // Insert a task into the collection
    Rooms.insert({
      name,
      image,
      status: 0,
      details,
    });
 
    // Clear form
    target.name.value = '';
    target.details.value = '';
  },
});