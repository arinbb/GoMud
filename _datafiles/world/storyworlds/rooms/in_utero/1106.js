
// Dumb - Track 6
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The meadow recedes, the grass folding flat, the cello fading to its last note. The figure in the grass waves once without looking at you -- a goodbye, or a blessing, or nothing at all. The grey light thins to white, and you are in the Grand Library, feeling lighter and sadder in equal measure.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down in the grey-green grass and fades away, smiling.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
