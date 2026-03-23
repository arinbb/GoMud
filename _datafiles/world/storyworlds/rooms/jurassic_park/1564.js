
// Jurassic Park - The Hatchery
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The incubator warmth wraps around you and becomes projector warmth and the hatching sounds become the soft mechanism of the reel and the hatchery fades into the Grand Library with the comfortable warmth of any place where things are just beginning.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is absorbed into the warm light of the incubators and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "touch" && (rest.indexOf("egg") >= 0 || rest.indexOf("shell") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You touch the egg. It is warm — 99 degrees, the incubator label says. The shell is leathery and slightly flexible. You hold your hand flat against it. Under your palm, movement. Something inside pushes back. The push is small. The thing inside is small. The thing inside will not be small. You remove your hand and step back from the incubator.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " places a hand flat on a dinosaur egg. Something inside responds.", user.UserId());
        return true;
    }

    if (cmd == "touch" && (rest.indexOf("raptor") >= 0 || rest.indexOf("baby") >= 0 || rest.indexOf("hatch") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The baby raptor investigates your hand with its snout — nostrils flaring, testing — then looks up at you with one enormous amber eye. It chirps. The sound is small and bird-like and genuinely charming. You are charmed. You know what it will become. You are still charmed. It nips at your finger experimentally, not hard enough to break skin. Wu watches from across the room with professional detachment. \"Remarkable development rate,\" he says. He is not talking to you.</ansi>");
        return true;
    }

    if (cmd == "ask" || (cmd == "say" && (rest.indexOf("wu") >= 0 || rest.indexOf("species") >= 0 || rest.indexOf("what") >= 0))) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Wu pauses his clipboard notation without looking up. \"Fourteen species in active production,\" he says. \"Eight on the public tour route. The rest are developmental.\" He does not elaborate on what 'developmental' means. He does not look up. He makes another note. The clipboard is covered in small, precise handwriting. You cannot read it from here. You are not certain you would want to.</ansi>");
        return true;
    }

    return false;
}
