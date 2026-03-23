
// Billy Madison - High School Hallway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The high school dissolves -- the seniors, the broken fountain, the AXE cloud dissipating into warm library air. The Grand Library returns with the solidity of books that have never been cool and don't need to be.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the high school hallway into film grain.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
