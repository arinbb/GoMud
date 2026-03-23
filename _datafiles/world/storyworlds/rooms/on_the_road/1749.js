
// On the Road - A San Francisco Jazz Club
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The music plays one final phrase and the phrase becomes a sentence and the sentence folds back into the chapter. The couple stops swaying. The bartender's cloth stops moving. The smoke freezes in the air and then dissolves into the white space of the page. You are back in the Grand Library, the music a physical presence in your chest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the music like a note finding its resolution, and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You listen. The tenor man is playing something that references Charlie Parker but is not Charlie Parker — it is what happens when Parker's ideas are digested by someone who grew up on the Pacific coast, someone for whom the relevant horizon is not eastward but westward, not Kansas City but open water. The phrases fall away at the end like waves falling away from shore.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sal Paradise has his notebook but it is in his jacket and he is not taking it out. Some things you do not write down. You let them write themselves on you instead.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " goes still, listening with their whole body.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return false;
}
