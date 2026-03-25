
// The Wizards Tower - quest step 6
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(190) && !user.GetMiscCharacterData("stardew_q_wizard")) {
        user.SetMiscCharacterData("stardew_q_wizard", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">The Wizard turns from his cauldron as if he has been expecting you. 'Ah. The new farmer. I have been watching the valley for many years. Something stirs when someone new arrives with genuine intent.' He pauses. 'Ask me about the Junimos. It will matter.'</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"purple\">The purple light dims slowly. The cauldron's colors fade. The tower dissolves into the Library with a smell of ozone and old books, which are not so different after all.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " nods to the Wizard and steps through the tower door, fading like the purple light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
