
// Pierres General Store - quest step 3
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(190) && !user.GetMiscCharacterData("stardew_q_pierre")) {
        user.SetMiscCharacterData("stardew_q_pierre", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The bell above the door chimes. Pierre looks up and his face opens into a genuine smile. 'The new farmer! Welcome. Let me know if you need anything -- seeds especially. Spring is short. Best not waste it.'</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The scent of seed packets and sawdust fades. The chalkboard's anti-Joja manifesto shrinks to a fond memory. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps through the shop door and simply is not there anymore.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
