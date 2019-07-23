import './occupied-rooms.html';

import { Template } from 'meteor/templating';
import { Rooms } from '../../api/rooms.js';

import '../room-card/room-card.js';

Template.occupiedRooms.helpers({
  occupiedRooms() {
    return Rooms.find({ status: 1 });
  },
});