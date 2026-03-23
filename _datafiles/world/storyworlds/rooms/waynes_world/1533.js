
// Wayne's World - Cable Access Control Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The monitors all go to static simultaneously. The VCRs click off. The library assembles from the static, warm and analog and full of something more than synergy.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the control room. The ON AIR light flickers off.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("monitor") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The monitors show the basement feed. Wayne is mid-anecdote, arms moving, totally present. Garth sits behind the drums nodding along. The picture is not perfect. The energy is completely perfect.</ansi>");
        return true;
    }

    if (cmd == "broadcast" || (cmd == "push" && rest.toLowerCase().indexOf("button") >= 0) || cmd == "onair") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You push the ON AIR button. The red light blazes. Wayne looks up at the camera and gives a thumbs up. He was already broadcasting in his heart.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " hits the ON AIR button. The red light comes on. Wayne is broadcasting.", user.UserId());
        return true;
    }

    return false;
}
