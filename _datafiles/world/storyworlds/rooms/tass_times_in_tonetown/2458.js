// Tass Times in Tonetown -- The Swamp Road (2458)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The swamp road recedes. The last neon sign's light fades behind you. You are back in the Arcade, grateful for the warm electronics smell, which is better than the swamp smell by a significant margin.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the edge of Tonetown at the point where the color gives out.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("sign") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The sign reads: TURN BACK (SERIOUSLY). Below it, the handwritten addition: GRAMPS WENT THIS WAY. Below that, more recently, in different handwriting: HE DID NOT COME BACK. Below that, in a third hand: IT IS FINE. PROBABLY. The sign has layers. The layers are all useful information.</ansi>");
        return true;
    }

    if (cmd == "wait" || cmd == "listen") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand at the edge where Tonetown ends and wait. The city behind you hums with music and color. Ahead, the swamp road goes quiet, the chemical smell arriving in slow gusts. This is the border between what Tonetown is and what Snotty is doing to it. Standing here you understand, physically, what is at stake. You can feel the city's tassness at your back, warm and saturated. And you can feel its absence, ahead, like a cold front moving in.</ansi>");
        return true;
    }

    return false;
}
