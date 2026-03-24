
// Rape Me - Track 4
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The spotlight cuts out. The graffiti fades. The mirror cracks completely and falls in silence, each shard reflecting a different version of the room that no longer exists. Darkness. Then the Grand Library, quiet and orderly and nothing like what you just left.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the spotlight and dissolves into white glare, gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sing" || cmd == "scream" || cmd == "yell") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You step up to the microphone. The room amplifies everything -- your voice, your hesitation, the small sounds your body makes before you commit. You do not need lyrics. The song is two-chord minimalism, deliberate and provocative. You hold the note. The microphone transmits it to whatever is on the other side of this. The graffiti on the wall seems to lean forward, reading you back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps to the microphone. The room goes slightly quieter, listening.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The song in this room begins with an intentional echo of Smells Like Teen Spirit -- the same four-chord sequence, a deliberate choice, a refusal of the mythology. It then becomes its own blunt, defiant thing: a song about violation and refusal, written as a declaration not a complaint. He chose the title knowing it would horrify people. He wanted to own the horror, take it back, make it his. Whether that worked is for you to decide.</ansi>");
        return true;
    }

    return false;
}
