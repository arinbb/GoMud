
// Alabama - Track 8
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The red clay road runs out and you dissolve back through the heat haze to the Grand Library. The banjo phrase follows you briefly. Both things can be true. They are.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the Alabama heat shimmer and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        var target = rest.toLowerCase();
        if (target.indexOf("banjo") >= 0 || target == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The banjo plays clean and direct. This is not a simple instrument with a simple history and the player knows it and plays it anyway, which is the right thing to do. You listen to the whole phrase. The banjo carries the South in it -- the beauty and the wound, the tradition and what was done with the tradition. The song does not resolve this. The song is angry that it has not been resolved. That is the correct response.</ansi>");
            return true;
        }
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("courthouse") >= 0 || target.indexOf("clay") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look at the courthouse square -- beautiful and complicated, the columns catching the afternoon light. This is the South as it looks from the outside. From the inside it looks different, has always looked different, depending on who is doing the looking. The song knows this. The song is angry about this specific gap between how things look and what they have been. Both can be true. You are looking at something beautiful that contains something terrible. This is not a paradox. This is history.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track8") != "visited") {
        user.SetMiscCharacterData("harvest_track8", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return false;
}
