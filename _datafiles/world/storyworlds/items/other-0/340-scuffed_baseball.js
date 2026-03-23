// Souvenir: Scuffed Baseball from The Sandlot

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You toss the baseball up and catch it. The leather is warm in your hand. For a moment you can hear the crack of a bat and the sound of kids yelling in the summer heat -- Ham calling the pitch, Benny connecting, the ball rising into the blue July sky. You can smell the red dirt of the sandlot and the cut grass of the outfield. You can feel the weight of a glove on your hand. The summer of 1962 is in this ball. Every game ever played on that lot is in it. It doesn't need a famous name on it. It has something better.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tosses a scuffed baseball up and catches it, listening to something only they can hear.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The leather is worn dark and soft. The stitching holds -- just barely in two places, firmly in the rest. The red laces have gone brown with age and use. There is no signature on it and it doesn't need one. You can feel every hit it ever took, every outfield catch, every wild throw into the backstop. It smells like summer. It always will.</ansi>");
    return true;
}

function onCommand_throw(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wind up and throw. The ball arcs perfectly, the way it does when everything is right. Someone would catch it. Someone always catches it. You hold your hand out and it comes back.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " winds up and throws the scuffed baseball in a clean arc.", user.UserId());
    return true;
}
