
// Scentless Apprentice - Track 2
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The scents collapse into each other -- every smell at once, then nothing. The bottles shatter silently, the table dissolves, and the churning riff fades to a hum, then to silence. You stand in the Grand Library, breathing clean air, your nose still burning.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a cloud of competing scents that disperses into nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "scream" || cmd == "yell" || cmd == "shout") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You open your mouth and the scream that comes out is not entirely yours -- it picks up frequencies from the room, from the riff in the floor, from the competing smells. It lasts three seconds. It felt much longer. A bottle on a high shelf cracks. The walls drip faster for a moment. Something in the dark moves toward you, then away.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " screams. The room screams back, richer and more specific.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stop moving and listen. The riff underneath everything is more complex than it seemed -- beneath the grinding low end, there are small melodic fragments struggling to surface, like flowers growing from asphalt. The song is about being an outsider, incapable of human connection, learning to kill by instinct. But listening very carefully, you hear the person who wrote it wishing that were not true.</ansi>");
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You breathe in carefully. Rose. Iron. Rain on hot stone. Skin. Something burning. Something growing. Childhood -- specifically your childhood, in the particular form your nose remembers it. The room knows you. The room has always been waiting to know you specifically.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " breathes in deeply, eyes wide.", user.UserId());
        return true;
    }

    return false;
}
