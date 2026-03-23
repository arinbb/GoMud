
// Jurassic Park - The Wrecked Explorer
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rain closes over you and Mr. DNA on the headrest screen loops one last time before the image dissolves into static, into the projector beam, into the warm bookshelves of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is absorbed into the rain and static, gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("track") >= 0 || rest.indexOf("print") >= 0 || rest.indexOf("footprint") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You crouch over the T. Rex tracks. Each print is four feet long and two feet wide, pressed three inches into the mud by a weight you can barely conceptualize. The tracks circle the Explorer twice — a figure-eight pattern, investigative. Then they lead away, north, toward the paddock's far end. The animal walked. It did not run. It did not need to run.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("goggles") >= 0 || rest.indexOf("night") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The night vision goggles are half-buried. You dig them out. One lens cracked, strap broken. Tim Murphy wore these. In the night vision, the T. Rex would have been everything the normal visible spectrum couldn't show: body heat, movement signature, the glow of its eye in the infrared. He saw it coming. He knew exactly what was about to happen. He couldn't do anything about it except hold on.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("screen") >= 0 || rest.indexOf("mr") >= 0 || rest.indexOf("dna") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Mr. DNA is still going on the tilted headrest screen, upside down relative to your position: \"...and when Jurassic Park opens, you'll be able to see all your favorite dinosaurs!\" He waves his little cartoon arms. The cheerfulness is complete. The cheerfulness will never end. The Explorer is destroyed and Mr. DNA is still waving his little arms.</ansi>");
        return true;
    }

    return false;
}
