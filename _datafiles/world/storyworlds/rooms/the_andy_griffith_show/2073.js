
// The Andy Griffith Show - Mount Pilot Road (secret room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The road -- the water tower, the two-direction sign, the edge of Mayberry -- fades into the Grand Library. You were standing at the edge of something and you chose to come back. That is the right choice. That is always the right choice from Mayberry.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks once more at the water tower, turns back toward town, and steps through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "go" && rest.indexOf("mount pilot") >= 0 || cmd == "leave" || (cmd == "travel" && rest.indexOf("pilot") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look down the road toward Mount Pilot. The pavement runs straight between the pines for a while and then bends. You consider it. Then you look back at the water tower -- MAYBERRY, white in the afternoon light. You stay. This is what everyone does from this spot. You stay.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("sign") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">MAYBERRY 0.5 MI. MOUNT PILOT 11.5 MI. Two distances. Two directions. The sign does not editorialize. It does not need to. You are standing here, which already says something.</ansi>");
        return true;
    }

    return false;
}
