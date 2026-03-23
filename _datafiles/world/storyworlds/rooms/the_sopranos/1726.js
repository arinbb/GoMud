
// The Sopranos - Satriales Pork Store
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The smell of pork fat and espresso fades into celluloid. The fluorescent lights flicker and become projector beams. The Grand Library solidifies around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out and does not come back. It happens.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "order" && rest.indexOf("espresso") >= 0) || (cmd == "get" && rest.indexOf("espresso") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You get an espresso. It is small and dense and extremely strong. You drink it standing at the counter the way you are supposed to, and for a moment you are part of the ritual of this place, the daily gathering, the small cup, the newspaper, the talk that means nothing and everything. The quest advances.</ansi>");

        if (user.GetMiscCharacterData("sopranos_quest3") != "done") {
            user.SetMiscCharacterData("sopranos_quest3", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have had an espresso at Satriales. Quest updated.</ansi>");
        }
        return true;
    }

    if (cmd == "eat" || (cmd == "order" && rest.indexOf("sandwich") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You order a capicola sandwich. It is exceptional. The bread is fresh, the meat is hand-sliced thin, there is sharp provolone and a little hot pepper relish. You eat it and feel, briefly, like the world is not complicated.</ansi>");
        return true;
    }

    return false;
}
