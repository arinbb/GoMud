// The Sandlot -- The Carnival (2429)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The carnival lights blur and fade. The Ferris wheel slows to a stop in your memory. You are back in the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the carnival midway in a blur of golden light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "chew" || (cmd == "use" && rest.toLowerCase().indexOf("tobacco") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put a ball of chewing tobacco in your cheek the way Ham told you to. It immediately becomes clear that Ham did not fully prepare you for this experience. You spend some time communing with a trash can near the funnel cake booth. On the bright side, Ham is having the exact same experience twenty feet away and at least you are not alone.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " turns a very specific shade of green near the tobacco stand.", user.UserId());
        return true;
    }

    return false;
}
