
// The Sopranos - The Bada Bing
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The red lights smear into projector beams. The bass drops out. The smoke clears into warm library air. You are back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets up from their table at the Bing and walks out into nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "drink" || (cmd == "order" && rest.indexOf("drink") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You sit down in one of the dark booths. A drink materializes in front of you without being ordered. The bass is loud enough to feel but not so loud you can't think. Everyone here has the same expression: relaxed in the way that people are relaxed when they have decided not to be nervous about something they should be nervous about. Quest updated.</ansi>");

        if (user.GetMiscCharacterData("sopranos_quest4") != "done") {
            user.SetMiscCharacterData("sopranos_quest4", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have experienced the Bada Bing. Quest updated.</ansi>");
        }
        return true;
    }

    if (cmd == "listen" || (cmd == "look" && rest.indexOf("music") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The music is relentless and specific -- the kind of rock that peaked in the late eighties and refuses to die in certain rooms of certain clubs in northern New Jersey. It fills every available frequency. Whatever anyone says in this room, the music was here first.</ansi>");
        return true;
    }

    return false;
}
