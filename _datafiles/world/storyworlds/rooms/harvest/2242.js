
// Harvest - Track 2
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The wheat closes behind you, the harvest moon still rising, and you dissolve back through the golden light to the Grand Library. The smell of dry grain follows you briefly.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears into the wheat and dissolves back to the Library, a trail of golden chaff in the air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("field") >= 0 || target.indexOf("wheat") >= 0) {
            if (user.GetMiscCharacterData("easter_harvest_field") != "found") {
                user.SetMiscCharacterData("easter_harvest_field", "found");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look out across the wheat field as the harvest moon rises over the ridge. The whole field catches the orange light, the stalks heavy and ready, ten thousand small decisions about soil and water and seed and time all coming to this moment. The harvest is the end of one cycle and the beginning of another. The album is named for this. This is why.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands in the wheat field, looking out as the harvest moon rises over the ridge.", user.UserId());
                user.GrantXP(150, "witnessing the harvest moon");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The wheat stretches to the ridge, heavy and gold, the harvest moon above it all.</ansi>");
            }
            return true;
        }
        if (target.indexOf("moon") >= 0) {
            if (user.GetMiscCharacterData("easter_harvest_moon") != "found") {
                user.SetMiscCharacterData("easter_harvest_moon", "found");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The harvest moon hangs enormous over the ridge, orange and patient, the same moon that has risen over every harvest since the first harvest. From inside this song it is not a symbol. It is the actual moon. It is this specific evening. Twenty-four and trying to make something true out of the year's work, the same as the wheat.</ansi>");
                user.GrantXP(150, "looking at the harvest moon");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The harvest moon rises over the ridge, orange and enormous, patient as a season.</ansi>");
            }
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("harvest_track2") != "visited") {
        user.SetMiscCharacterData("harvest_track2", "visited");
        var count = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0") + 1;
        user.SetMiscCharacterData("harvest_tracks_visited", "" + count);
    }
    return true;
}
