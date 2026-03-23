
// Words Between the Lines of Age - Track 10
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The drone fades. The chalk words on the walls dissolve into plain earth. The tunnel releases you and you climb back up into the golden California afternoon. You have heard the whole album. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs up out of the tunnel as the drone finally resolves, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand in the tunnel and let the drone fill you. It has been going for minutes or hours, the guitar chord sustained past all reason, the bass pulse underneath it steady as a heartbeat. Words Between the Lines of Age is the album going past its own edges -- the long jam at the end, the place where the structured songs stop and the music just continues because it can, because there is still something to say that has not been said in words, only in the spaces between them.</ansi>");
        return true;
    }

    if (cmd == "read") {
        var target = rest.toLowerCase();
        if (target.indexOf("word") >= 0 || target.indexOf("wall") >= 0 || target.indexOf("chalk") >= 0 || target == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You read the chalk words on the wall. What you can make out: between the. lines. the spaces where. nothing is written. is where. the real. Most of the rest is too faded, or was always too faded, written that way intentionally, the words themselves demonstrating the principle. Between the lines of age. The whole album has been about this -- what is not said, what lives in the spaces, the words that come out of a young man becoming an old man's neighbor. You have read the whole album. You are standing in the last room. The tunnel continues forward. The music continues forward. You do not have to follow it all the way.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track10") != "visited") {
        user.SetMiscCharacterData("harvest_track10", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return false;
}
