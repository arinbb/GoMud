// The Sandlot -- The Bike Path (2431)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bike path and the pine trees blur into a streak of summer light. You are back in the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the bike path in a shimmer of speed.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ride" || cmd == "bike" || cmd == "cycle") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You get on a bike -- it is the right size, it is always the right size -- and you push off. The path stretches ahead. You stand on the pedals and go. The trees blur. The wind is in your face. You are twelve and the world is a bike path in 1962 and nothing bad will ever happen. You know this is not true. You ride anyway.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grabs a bike and disappears down the path at speed.", user.UserId());
        return true;
    }

    return false;
}
