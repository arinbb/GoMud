
// The Needle and the Damage Done - Track 9
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The fingerpicking pattern plays out to its last note, the sound fading in the small dark room. You dissolve back to the Grand Library. The song follows you, quiet as a thing you cannot unhear.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the small stage as the last note fades, dissolving quietly back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        if (user.GetMiscCharacterData("easter_harvest_needle") != "found") {
            user.SetMiscCharacterData("easter_harvest_needle", "found");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand completely still and listen. The fingerpicking pattern plays -- bass, treble, bass, treble, the melody in the space between the notes. It is two minutes and thirty-eight seconds. It was recorded live at UCLA in 1971. It is the quietest track on the album. It is also, in some ways, the loudest. Danny Whitten played this pattern first. Danny Whitten is why Neil Young is playing it alone now. The needle is a specific needle. The damage is done. You know this when you listen. You cannot not know it.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still and listens. The small room is the quietest room on the ranch.", user.UserId());
            user.GrantXP(200, "listening to the Needle and the Damage Done");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You listen again. The pattern plays. The room is very quiet. This is the correct way to hear this song.</ansi>");
        }
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit in the dark near the small stage. The figure plays the pattern, bass treble bass treble, not looking up. You are close enough to hear the nail on the string, the slight intake of breath before the chorus. This is the intimacy of the recording -- it was made to be heard this way, close, present, uncomfortable in the way that honesty is uncomfortable.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 4: Hear the Needle
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    if (user.GetMiscCharacterData("harvest_track9") != "visited") {
        user.SetMiscCharacterData("harvest_track9", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return true;
}
