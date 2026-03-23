
// Paris, Texas - The Meridian Hotel
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon reflections on the wet parking lot blur and spread until they fill your entire field of vision in pink and blue, and then they are the projector light, and then they are the library ceiling.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is absorbed into the neon reflection on the parking lot, spreading out in pink and blue until gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
