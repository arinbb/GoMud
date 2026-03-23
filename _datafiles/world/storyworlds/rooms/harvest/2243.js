
// A Man Needs a Maid - Track 3
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The piano holds its last chord, the orchestra in the walls fades to almost nothing, and you dissolve back to the Grand Library. The empty house is still empty behind you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the empty house as the orchestra fades, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play") {
        var target = rest.toLowerCase();
        if (target.indexOf("piano") >= 0 || target == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at the grand piano and play a chord. Middle C is slightly flat. The sound fills the room -- warm and round and slightly imperfect, the way real pianos in real houses are. The orchestra in the walls notices. The strings swell slightly in response, as if acknowledging that someone is here now. The room feels less empty for a moment.</ansi>");
            return true;
        }
    }

    if (cmd == "sit" || cmd == "eat") {
        var target = rest.toLowerCase();
        if (target.indexOf("table") >= 0 || target.indexOf("chair") >= 0 || target == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at the table set for one. The plate is clean, the glass is empty. From this chair the piano is visible, the window is visible, the fields outside are visible. It is a good view. It is a very lonely chair to sit in.</ansi>");
            return true;
        }
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand very still and listen. The orchestra in the walls is playing the song -- strings and brass and woodwind, enormous and tender, the sound of something too large for this house, which is the point. The man who lived here was too large for this house. Or the house was too large for the man. The music fills the space between, which is what music is for.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track3") != "visited") {
        user.SetMiscCharacterData("harvest_track3", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return false;
}
