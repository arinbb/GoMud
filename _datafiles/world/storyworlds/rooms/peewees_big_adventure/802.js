
// Francis's Mansion
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ostentatious mansion shimmers and fades like a mirage made of money. You're back in the Grand Library, which feels refreshingly modest by comparison.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly out of the mansion and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
