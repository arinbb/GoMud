
// Paris, Texas - The Super 8 Film (secret room, inside the home movie)
var LIBRARY_ROOM = 3;
var BACKYARD_ROOM = 2124;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return" || cmd == "leave" || cmd == "exit" || cmd == "back") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film runs to its end. The image bleaches to white. The white gets brighter and brighter until it is just light, and then it is the projector light, and you are standing in the backyard again beside the folding table with the projector clicking through white leader. Travis is still in his lawn chair. He has been watching the whole time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bleaches out into the overexposed ending of the film and reappears, blinking, in the backyard.", user.UserId());
        user.MoveRoom(BACKYARD_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the light and the projector image swallows you. The world goes amber and green and slightly overexposed. The sounds of the backyard — the projector clicking, the neighborhood, the evening — fall away. You are inside the film now. Inside the before.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' or 'back' to step back out of the film.)</ansi>");
    return true;
}
