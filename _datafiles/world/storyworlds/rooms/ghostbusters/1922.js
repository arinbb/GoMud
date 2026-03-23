var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lab dissolves in a burst of PKE static. Egon's equations scatter like leaves. The film grain rises and you are back in the Library's Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " registers on the PKE meter for one final spike, then vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
