// Far Cry 5 - The Church of Eden's Gate
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (!user.HasQuest(200)) {
        return true;
    }
    var data = user.GetMiscCharacterData("fc5_quest_church");
    if (data != "done") {
        user.SetMiscCharacterData("fc5_quest_church", "done");
        user.Command("quest advance 200");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The Church of Eden's Gate. Joseph Seed's pulpit. The place it all started. The place it all ends. He is already looking at you. He has been expecting you. He says your arrival was written before you were born. You do not know how to argue with a man who is completely, genuinely certain of everything.</ansi>");

        var souvenir = CreateItem(220);
        if (souvenir) {
            user.GiveItem(souvenir);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Joseph Seed watches you take in the church. From the collection plate near the door, you pocket a Project at Eden's Gate pin — a small white and red enamel circle stamped with the Gate symbol. A souvenir of something you will not forget.</ansi>");
        }
        user.GrantXP(5500, "Faced Joseph Seed at the Church of Eden's Gate");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+5500 XP — Hope County)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candlelight dims. Joseph Seed does not move, does not reach out, does not try to stop you. He says, quietly, as you go: 'You will be back. They always come back.' The church dissolves. The Grand Library is warm and quiet and made of books, and none of the books are demanding anything of you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the church in the last warm light of a hundred candles, Joseph Seed watching them go.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "listen") {
        var easterKey = "fc5_easter_sermon";
        var easterDone = user.GetMiscCharacterData(easterKey);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You sit in a pew and listen. Joseph Seed speaks without amplification, his voice filling the church entirely by its own quality. He talks about the Collapse — not as metaphor, not as threat, but as plain fact, the way a doctor talks about a diagnosis. He talks about choice: the choice to see clearly, the choice to prepare, the choice to come home before the door closes. He is a very good speaker. You understand, in this moment, not why people follow him, but how. The how is in the voice, the certainty, the warmth of the room, and the candles, and the stained glass, and the complete absence of doubt in every syllable.</ansi>");
        if (easterDone != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(250, "Listened to Joseph Seed's sermon");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP — The Father's Word)</ansi>");
        }
        return true;
    }

    if (cmd == "talk" || (cmd == "speak" && rest.indexOf("joseph") >= 0) || (cmd == "ask" && rest.indexOf("joseph") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You approach the pulpit. Joseph Seed turns his full attention to you. The attention is absolute. It is not aggressive. It is the attention of someone who believes you matter — not as an obstacle, not as a convert yet, but as a person whose arrival here means something. He says: 'You came. I knew you would come. The question was only when.' He waits. His rosary moves through his fingers. He is in no hurry.</ansi>");
        return true;
    }

    return false;
}
