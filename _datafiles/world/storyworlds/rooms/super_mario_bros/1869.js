
// World 5-1 Gray Overworld - Standard return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The gray-green trees and cooler palette of World 5 dissolve. You are back in the Arcade, the shifted colors fading from memory, leaving only the awareness that the game was always harder than it looked.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates in the World 5 palette and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
