// The Gang Breaks Dee - secret room, quest finale
var LIBRARY_ROOM = 1;
var QUEST_ID = 300;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData("sunny_q_breakdee") != "done") {
        user.SetMiscCharacterData("sunny_q_breakdee", "done");
        user.Command("questadvance " + QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest updated: You have witnessed the Gang breaking Dee. Quest complete. You have seen everything.</ansi>");

        var souvKey = "souvenir_its_always_sunny";
        if (user.GetMiscCharacterData(souvKey) != "collected") {
            user.SetMiscCharacterData(souvKey, "collected");
            var stick = CreateItem(270);
            if (stick) {
                user.GiveItem(stick);
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">As the scene closes you find something in your hand: a rat stick. Charlie's rat stick. It smells exactly as you would expect. It is yours now.</ansi>");
            }
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The scene closes. Dee reassembles. The Gang disperses back to their corners. The sticky walls of Paddys Pub blur and fade. The jukebox plays three notes — the right three notes, just this once — and then goes silent. You are back in the Grand Library. The film reel cools in your hands. You think about Dee coming back tomorrow and you understand something you did not understand before.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the scene as Dee laughs — really laughs — and the bar dissolves around them both.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
