
// Pennyroyal Tea - Track 9
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The kettle whistle fades. The wallpaper curls one last time and lies still. The medicine bottles empty themselves into silence. The murky cup on the table finally clears -- and there is nothing inside, there was never anything inside. The kitchen dissolves and you are in the Grand Library, where the light is clean and the tea is normal.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like steam from a kettle, thinning to nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
