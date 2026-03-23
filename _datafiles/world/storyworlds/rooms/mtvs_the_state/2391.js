// MTVs The State - NYU Dorm Room (2391)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You leave the dorm room. The whiteboard stays. The ideas on it stay. The Grand Library. Everything that made the show possible was decided in a room exactly like that one.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the dorm room. The camcorder continues to record nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("whiteboard") >= 0 || restLower.indexOf("board") >= 0 || restLower.indexOf("list") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">The whiteboard has the sketch list. At the top in the biggest letters: THE STATE. Below that, a dozen ideas in different handwriting. Some have stars. Some have question marks. One has been crossed out and then un-crossed out. All of them, even the bad ones, are pointed at something.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">At the very bottom, in small letters: 'What if we just did all of it?'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">Below that, in a different pen, just: 'Yes.'</ansi>");
            return true;
        }
    }

    if (cmd == "write" || cmd == "add") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You add something to the whiteboard. The marker squeaks. Your idea joins the others. It belongs here. They all belong here.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes something on the whiteboard.", user.UserId());
        return true;
    }

    if (cmd == "use" || cmd == "record") {
        var restLower2 = rest.toLowerCase();
        if (restLower2.indexOf("camcorder") >= 0 || restLower2.indexOf("camera") >= 0 || restLower2 == "") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You pick up the camcorder. You point it at the cleared floor space. The red light comes on. You are making television now. It does not matter if there is tape in it. The act of pointing the camera at the thing is the beginning.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the camcorder and starts recording. The red light blinks on.", user.UserId());
            return true;
        }
    }

    return false;
}
