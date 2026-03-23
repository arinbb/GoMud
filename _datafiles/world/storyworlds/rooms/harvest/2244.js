
// Heart of Gold - Track 4
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The spotlight fades last, a slow dimming, the warmth of it lingering on your face. The stage dissolves. You are back in the Grand Library, still searching, which is the correct way to leave this song.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps off the stage as the spotlight fades, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sing") {
        if (user.GetMiscCharacterData("easter_harvest_sing") != "found") {
            user.SetMiscCharacterData("easter_harvest_sing", "found");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the spotlight and sing. Your voice fills the empty theatre, imperfect and honest, the way the song requires. The harmonica in the neck rack resonates sympathetically. The guitar picks up the frequency. The room holds your voice for a long moment after the note ends. You have been looking for this. You are still looking. This is the song. You are living it correctly.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the spotlight and sings, the whole stage resonating.", user.UserId());
            user.GrantXP(250, "singing Heart of Gold");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the spotlight and sing. The room holds your voice. The harmonica resonates. You are still searching. That is the right answer.</ansi>");
        }
        return true;
    }

    if (cmd == "search") {
        if (user.GetMiscCharacterData("easter_harvest_search") != "found") {
            user.SetMiscCharacterData("easter_harvest_search", "found");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You search the stage, the darkness beyond the edge of the spotlight, the empty seats, the wings. You do not find it. This is the correct result. The song is not a song about finding. It is a song about the searching itself -- the harmonica wailing through the minor key, the acoustic guitar open and honest, the pedal steel bending toward something just out of reach. The gold in the title is not the metal. It is the light. You are standing in it.</ansi>");
            user.GrantXP(250, "searching for the heart of gold");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You search the stage. You are still searching. The spotlight is warm. This is enough.</ansi>");
        }
        return true;
    }

    if (cmd == "play") {
        var target = rest.toLowerCase();
        if (target.indexOf("harmonica") >= 0 || target.indexOf("guitar") >= 0 || target == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the harmonica and blow through it. The sound fills the stage -- one long note, searching. The acoustic guitar picks up the resonance. The empty seats hold the sound the way a cupped hand holds water. You keep going, the melody finding itself, phrase by phrase.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    // Quest step 2: Find the Heart of Gold
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    if (user.GetMiscCharacterData("harvest_track4") != "visited") {
        user.SetMiscCharacterData("harvest_track4", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return false;
}
