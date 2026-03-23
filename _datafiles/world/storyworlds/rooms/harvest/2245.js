
// Are You Ready for the Country - Track 5
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fiddle plays you out, bright and fast, the boots on the floor still going, and then the barn dissolves in golden light. You are back in the Grand Library. Your feet still want to move.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " spins once in the lantern light and dissolves back to the Library, the fiddle still audible for a moment.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You start dancing and the floor comes alive under your feet -- the plank boards amplifying every step, the fiddle in the loft finding your rhythm and matching it, the pedal steel bending a note that lifts you into it. The lanterns swing. Someone whoops from the corner. The country is a feeling before it is a place, and this is the feeling.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " starts dancing and the whole barn seems to light up a little brighter.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You stand still and let the music come to you. The fiddle, the pedal steel, the bass under everything, the drums simple and forward. This is country rock -- not the polished stadium version, the real version, the kind where the songs come from actual places and actual feelings and the recording is a barn in California and everyone is trying their hardest.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track5") != "visited") {
        user.SetMiscCharacterData("harvest_track5", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return false;
}
