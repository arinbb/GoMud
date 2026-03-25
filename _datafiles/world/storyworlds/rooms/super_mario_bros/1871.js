
// World 7-1 Bullet Bill Level - Quest advance on World 8 approach
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The cannons stop mid-cycle. The Bullet Bills freeze in mid-flight. Everything pixelates and dissolves. You are back in the Arcade, your reflexes still tuned to the Bullet Bill interval, expecting danger from angles that no longer exist.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates between two Bullet Bills and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dodge" || (cmd == "stomp" && rest.indexOf("bullet") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You dodge a Bullet Bill, the displaced air of its passage ruffling your hair. Immediately another launches from a cannon on the opposite wall. You dodge again. The Bullet Bills are a fugue, each one displaced from the next by just enough time to require constant motion. Stand still for two seconds and the coverage is total. Keep moving and there is always a gap. The World 7 lesson: there is always a gap.</ansi>");
        return true;
    }

    return false;
}
