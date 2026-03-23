// Stand By Me -- The Leech Swamp (2407)
// ZONE COMMANDS: swim / wade (easter egg, 200 XP)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The swamp mud releases your feet with a final sucking sound. The warm black water fades. You are back in the Grand Library. Check yourself for leeches.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wades out of the swamp and dissolves into the light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "swim" || cmd == "wade") {
        handleLeeches(user, room);
        return true;
    }

    return false;
}

function handleLeeches(user, room) {
    var key = "easter_sbm_leeches";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You already know what is in this water. You already know.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "the leeches");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You wade in. The water is warm and opaque and the mud takes your feet and releases them and takes them again. You are in to your knees, then your thighs. Something brushes your leg and you tell yourself it is a stick.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">On the other side, you check. There are four of them on your legs, grey-brown, bloated, attached with complete indifference to your feelings about this. You remove them one at a time, slowly, the way you are supposed to, and you do not scream, though a sound comes out of you that is adjacent to screaming.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">Gordie checks and finds the big one. The really big one. He does not say anything for a moment. Then: 'Okay,' he says. Just: okay. You understand exactly what he means.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You survived the leeches.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wades through the swamp and comes out the other side checking their legs very carefully.", user.UserId());
}
