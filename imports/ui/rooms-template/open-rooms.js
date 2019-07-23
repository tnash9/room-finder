import './open-rooms.html';

import { Template } from 'meteor/templating';
import { Rooms } from '../../api/rooms.js';

import '../room-card/room-card.js';

Template.openRooms.helpers({
  openRooms() {
    return Rooms.find({ status: 0 });
  },
});