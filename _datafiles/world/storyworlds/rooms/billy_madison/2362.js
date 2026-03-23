
// Billy Madison - Elementary School Hallway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hallway dissolves around you -- the green lockers, the crayon smell, the kitten poster. The sound of a school bell fades into the rustle of old pages. The Grand Library returns.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into film grain and vanishes from the elementary school hallway.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
