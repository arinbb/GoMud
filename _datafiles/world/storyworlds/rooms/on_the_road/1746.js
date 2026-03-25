
// On the Road - A Jazz Club, Denver
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The saxophone plays one last phrase that goes up past the ceiling into the sky and does not come back down. The smoke clears. The crowd fades into sentences. The Denver jazz club dissolves into the pages of the chapter and you are back in the Grand Library, the music still moving in your chest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is carried out on the last note of the saxophone and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stop moving and listen. Really listen. The saxophone is playing a phrase that starts in C and goes somewhere that C never intended to go and arrives somewhere that has no name and does not need one. The drummer behind the tenor man is barely there — brushes on the snare like a thought, the bass drum a heartbeat. The crowd is very still.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Then the tenor man does something. He plays a single note and holds it. One note. For a long time. And in the middle of that note, something opens — some space in the music that is larger than the note, larger than the room, larger than Denver. Dean Moriarty at the back of the room shouts YES! and everyone knows what he means. This is IT. This is the thing. This is what the road is for, to arrive at moments exactly like this one.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " goes very still, listening, and their face does something that watching faces do when they understand.", user.UserId());

        if (user.GetMiscCharacterData("road_jazz_denver") != "found") {
            user.SetMiscCharacterData("road_jazz_denver", "found");
            user.GrantXP(250, "hearing the transcendent saxophone in the Denver jazz club");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 250 XP for hearing IT — the thing the whole book is trying to describe. ]</ansi>");
        }

        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return true;
}
