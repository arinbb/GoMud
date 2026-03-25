
// On the Road - The Mexican Border Town
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The border town heat dissolves into the white heat of a blank page. The dust settles into the margins. Dean's laughter fades into a sentence about Dean laughing, and the sentence cools into text, and the text is a book in your hands in the Grand Library, and you are back. You feel slightly feverish. This is correct.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves in the border heat and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || cmd == "buy") {
        var target = rest.toLowerCase();
        if (target.indexOf("tequila") >= 0 || target.indexOf("drink") >= 0 || target.indexOf("shot") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You drink a shot of tequila. Fifteen cents American. The bartender pours it without ceremony — a serious pour from a serious bottle, none of the lime and salt nonsense, just the spirit itself, agave and heat and the soil of a country you have never been to before today.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">It lands like a small fire. The border is behind you now in more than the geographic sense. Something has crossed over, some threshold of the self, some border between who you were before the road and who you are becoming on it. The tequila knows this. The tequila has seen everyone come through here. The tequila does not judge.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drinks a shot of tequila in silence and stares at the empty glass for a moment.", user.UserId());
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return true;
}
