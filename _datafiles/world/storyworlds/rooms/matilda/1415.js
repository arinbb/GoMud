
// Matilda - The Red House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lighter patches on the wallpaper begin to glow — the ghosts of removed family portraits shining through. Their light fills the stolen house, and as the Trunchbull's trophies melt in the radiance, you find yourself back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is dissolved by the light of phantom family portraits and carried away from the stolen house.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
