// Far Cry 5 - Whitetail Mountains
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The pines blur and thin. The wolf call from the north fades into the distance. Peaches watches you go from her rock, unimpressed. The Grand Library assembles itself from the mountain air.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the Whitetail pines, dissolving into forest shadow.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" && (rest.indexOf("lion") >= 0 || rest.indexOf("peaches") >= 0 || rest.indexOf("cat") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Peaches regards your outstretched hand with slow, deliberate consideration. She could remove it at the wrist without meaningfully extending herself. She has a face made of assessments. After a long moment she pushes her enormous head against your palm, once, firmly, then pulls back and looks away as if nothing happened. You have been permitted. You understand this is not the same as being trusted. But it is something.</ansi>");
        return true;
    }

    if (cmd == "listen" && (rest.indexOf("wolf") >= 0 || rest.indexOf("forest") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You listen to the Whitetail forest. The creek below. The wind in the lodgepole pines. And then, from somewhere north and higher: a wolf call, sustained, almost musical. Answered from another direction by another call. Then a third. Jacob's wolves, checking in. Reporting. The forest is their patrol route and they know every inch of it and they are telling each other where they are.</ansi>");
        return true;
    }

    return false;
}
