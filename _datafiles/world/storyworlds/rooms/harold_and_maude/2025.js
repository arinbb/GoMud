
// Harold and Maude - The Driveway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hearse and the pale gravel driveway dissolve in a warm shimmer. The California sun fades and the amber light of the library takes its place, surrounding you with the familiar smell of books and wood.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the driveway like exhaust from a long black car disappearing around a bend.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "examine" && (rest == "hearse" || rest == "car")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk around the hearse slowly. It is even more beautiful close up. The bodywork is flawless. The chrome has been polished by hand. Inside, through the velvet curtains, you can just make out the velvet-lined interior -- usually reserved for caskets, now usually carrying Harold and Maude to funerals they were not invited to. This is Harold's vehicle. It suits him completely.</ansi>");
        return true;
    }

    return false;
}
