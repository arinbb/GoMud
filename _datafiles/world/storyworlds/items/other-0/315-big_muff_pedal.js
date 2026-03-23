// Souvenir: Big Muff Pi Pedal from Siamese Dream

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"13\">You step on the Big Muff pedal. A wall of distorted guitar rises from nowhere, layered and shimmering and enormous -- all thirty-seven tracks at once, the cathedral of feedback and the guitar clouds and the acoustic wood and the nine minutes of darkness, all of it compressed into a single sustained chord that fills the room and keeps filling it until there is nothing left that is not the sound. It fades slowly, the layers peeling away one by one, leaving your ears ringing with beauty.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps on a distortion pedal and a wall of layered guitar fills the room, enormous and beautiful, fading slowly.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"13\">The gain knob all the way up. The sustain all the way up. The tone in the middle. Two dents from being stomped too hard. The masking tape label: SIAMESE. This is how the record was made -- everything pushed past its limit until beauty emerged on the other side of distortion.</ansi>");
    return true;
}
