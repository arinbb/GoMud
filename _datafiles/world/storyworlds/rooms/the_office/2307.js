// The Office - The Warehouse
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("office_visited_warehouse")) {
        user.SetMiscCharacterData("office_visited_warehouse", "yes");
        user.Command("quest 380 5", 0.5);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take the freight elevator up to the lobby and step back through the screen into the Grand Library. Darryl plays three notes on the keyboard as you go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes the freight elevator up and is gone. Darryl watches the elevator doors close and plays three notes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" && rest.indexOf("basketball") >= 0 || cmd == "shoot" || (cmd == "play" && rest.indexOf("ball") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up the basketball from under the hoop and shoot. It goes in, cleanly. Nobody saw it. The warehouse is empty. You feel good about it anyway.</ansi>");
        return true;
    }

    if (cmd == "play" && (rest.indexOf("keyboard") >= 0 || rest.indexOf("piano") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at Darryl's keyboard and play a few notes. It sounds like the theme of a life that is going better than expected. Darryl hears it from his office and raises an eyebrow that contains multitudes.</ansi>");
        return true;
    }

    return false;
}
