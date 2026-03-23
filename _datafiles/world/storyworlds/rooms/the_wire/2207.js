// The Wire - The Detail Office
var LIBRARY_ROOM = 3;
var QUEST_ID = 350;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fluorescent lights bend into projector beams. The whiteboard recedes. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the Detail.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wiretap" || cmd == "listen" || (cmd == "use" && rest.indexOf("equipment") >= 0) || (cmd == "use" && rest.indexOf("wiretap") >= 0)) {
        if (user.GetMiscCharacterData("wire_easter2") != "found") {
            user.SetMiscCharacterData("wire_easter2", "found");
            user.GrantXP(200, "monitored the wiretap");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put on the headphones. Static, then voices -- a conversation happening somewhere in the city, recorded and routing through this basement. Two men talking around a subject without touching it. Coded, layered, deniable. You listen for three minutes. By the end you understand what is being discussed without a single incriminating word having been spoken. Lester Freamon watches you figure this out and nods once. +200 XP.</ansi>");
            SendUserMessage(user.UserId(), "");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put the headphones on again. The city is still talking. It has always been talking. The trick is knowing what you are hearing.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && (rest.indexOf("board") >= 0 || rest.indexOf("whiteboard") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The board is the whole case. AVON BARKSDALE at the center. STRINGER BELL just to the left, an arrow between them that is solid because that connection is proven. Around them, names in boxes -- some crossed out, some with question marks. The money flows from the corners to the stash houses to somewhere up the chain that nobody has traced yet. Lester calls it the money. He says: follow the money. The money leads to everyone.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("wire_quest2")) {
        user.SetMiscCharacterData("wire_quest2", "done");
        user.GiveQuest(QUEST_ID);
    }
    return false;
}
