import './rooms.html';

import { Template } from 'meteor/templating';
import { Rooms } from '../../api/rooms.js';

import './open-rooms.js';
import './occupied-rooms.js';

Template.rooms.events({
  'click .delete'() {
    Rooms.remove(this._id);
  },
});
