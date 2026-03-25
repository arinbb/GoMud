
// The Sopranos - The Soprano Kitchen
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The kitchen light bends into projector beams. The smell of gravy fades into old celluloid. The Grand Library takes shape around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like a face in a family photo and disappears from the kitchen.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || (cmd == "look" && (rest.indexOf("food") >= 0 || rest.indexOf("gravy") >= 0))) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The smell is incredible. Garlic, basil, pork fat rendered slowly over hours. Whatever is on that stove was started early this morning and will be ready when Tony decides he is hungry. The food in this kitchen is love expressed through labor, which is the only kind of love that feels safe to show.</ansi>");
        return true;
    }

    if (cmd == "drink" || (cmd == "look" && rest.indexOf("wine") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The pinot grigio sits there, cold and reasonable. It is ten-thirty in the morning. Nobody said anything about it. Nobody will.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(160) && !user.GetMiscCharacterData("sopranos_quest1")) {
        user.SetMiscCharacterData("sopranos_quest1", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have entered the Soprano house. The quest advances.</ansi>");
    }
    return true;
}
