
// Old Man - Track 6
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The rocking chair keeps moving as you dissolve. The old man watches you go with the look of someone who has seen many things go and expects to see many more. You are back in the Grand Library, twenty-four or however old you are, which is the same thing from some distances.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the cottage porch while the rocking chair keeps its rhythm, fading back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "talk") {
        if (user.GetMiscCharacterData("easter_harvest_oldman") != "found") {
            user.SetMiscCharacterData("easter_harvest_oldman", "found");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the porch step and the old man rocks and neither of you says anything for a long time. The light comes through the fence and catches the tools on the wall and the wheat in the field and your face and the old man's face equally. From here, twenty-four looks like seventy. Seventy looks like twenty-four. The difference is the years, and the years are the same years, differently arranged. Old man, look at my life. I am a lot like you were. You are a lot like I will be.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the cottage porch step. The old man rocks and neither of them speaks for a long time.", user.UserId());
            user.GrantXP(200, "sitting with the old man");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the step again. The old man rocks. The light is the same light it always is here. You stay for a while.</ansi>");
        }
        return true;
    }

    if (cmd == "ask") {
        var target = rest.toLowerCase();
        if (target.indexOf("life") >= 0 || target.indexOf("age") >= 0 || target.indexOf("old") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The old man rocks twice before answering. He says: The years do not subtract from you, son. They just show you more of what was already there. He goes back to watching the fields. This is the complete answer. It is also an incomplete answer. Both are true at the same distance.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 3: Meet the Old Man
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    if (user.GetMiscCharacterData("harvest_track6") != "visited") {
        user.SetMiscCharacterData("harvest_track6", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return true;
}
