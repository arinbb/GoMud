// Far Cry 5 - Faith's Vision
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You push through the vision by force of intention. It resists — the white flowers, the impossible sky, Faith's voice telling you there is nothing to return to that is better than this. You push anyway. The library is real. The library has books. That matters. You arrive.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tears through the vision like paper, vanishing back through the Bliss.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wake" || cmd == "fight" || cmd == "resist") {
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">You push back against the Bliss. It resists — it is very good at resisting — but you have a reason and a direction, and the vision fractures along the edges where you push. Faith's face appears in the fracture: 'Why would you leave? There is nothing outside that is better than this.' You say: 'That's exactly what you would say.' The vision fractures further. The fields are visible to the north.</ansi>");
        return true;
    }

    if (cmd == "listen" || cmd == "hear") {
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">You listen. Faith's voice from everywhere: 'Joseph saw what was coming. He built the Gate for all of us. The Collapse will come and we will be saved and the saved will enter a world that looks like this one — like this, but real. This is the preview. Do you understand now?' You are not sure if you are hearing her or the Bliss projecting what it wants you to hear. With Faith, you are not sure those are different things.</ansi>");
        return true;
    }

    return false;
}
