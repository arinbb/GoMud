
// Scentless Apprentice - Track 2
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The scents collapse into each other -- every smell at once, then nothing. The bottles shatter silently, the table dissolves, and the churning riff fades to a hum, then to silence. You stand in the Grand Library, breathing clean air, your nose still burning.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a cloud of competing scents that disperses into nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
