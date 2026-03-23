// The Office - The Break Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You leave the break room and pass back through reception into the lobby. The TV keeps playing behind you, unwatched, talking to the room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets up from the break room couch and heads out east toward reception.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the break room couch. The cushion sags pleasantly in the middle. The TV plays a game show. Someone is winning something. You watch it without really watching it. This is exactly the break room experience. You feel a warmth that is hard to name -- the warmth of being in a place where ordinary life has been lived, completely, every day, for years.</ansi>");
        return true;
    }

    if (cmd == "watch" && rest.indexOf("tv") >= 0 || (cmd == "watch" && rest.indexOf("television") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The game show host is asking someone to pick door two or door three. The contestant looks terrified. You are, against all odds, invested in this outcome. This is the power of the break room television.</ansi>");
        return true;
    }

    return false;
}
