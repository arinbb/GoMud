// MTVs The State - Space Station 11 (2386)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You float back through the hatch. The stars retreat. The Grand Library assembles around you with its dependable gravity. You find you have been unconsciously stroking your own chin.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " floats through the hatch and is gone. A Bearded Man watches the hatch for a moment after.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "float") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You push off the wall gently and float across the module. It is exactly as good as it looks. A Bearded Man nods as you pass, beard drifting alongside his head in a companionable way.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " floats across the module. The Bearded Men observe with collegial respect.", user.UserId());
        return true;
    }

    if (cmd == "stroke" || (cmd == "look" && rest.toLowerCase().indexOf("beard") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You stroke your chin thoughtfully. You do not have a beard. This is a minor detail. The gesture carries the weight of one who does.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " strokes their chin in zero gravity. The gesture is received with respect.", user.UserId());
        return true;
    }

    return false;
}
