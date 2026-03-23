
// Jurassic Park - The Treetop Hideout
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Brachiosaurus head passes between you and the sun and the canopy dissolves in the eclipse and the John Williams score rises one last time — that long, soaring, reaching note — and the Grand Library is around you, warm and quiet, with the smell of old books and the memory of something enormous and alive.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is eclipsed by a Brachiosaurus in the canopy and does not return.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sneeze" || (cmd == "look" && rest.indexOf("sneeze") >= 0) || (rest.indexOf("sneeze") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">It happens with almost no warning — a gathering of breath, a slight drawing-back, and then: the Brachiosaurus sneezes. It is a full-body event. The platform shakes. A warm, comprehensive rain falls from above. You are thoroughly covered. The Brachiosaurus resumes eating. It has already forgotten you. You have not forgotten it.</ansi>");
        SendRoomMessage(room.RoomId(), "A Brachiosaurus sneeze rains down on " + user.GetCharacterName(true) + " from above.", user.UserId());
        return true;
    }

    if (cmd == "sing" || (cmd == "say" && (rest.indexOf("song") >= 0 || rest.indexOf("sing") >= 0))) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You hum a few bars of something. The Brachiosaurus nearest you pauses its browsing and tilts its head — you're close enough to see the movement clearly. It appears to be listening. Then it resumes eating. You have been auditioned by a Brachiosaurus and found neither threatening nor interesting. This is fine. This is actually fine.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("view") >= 0 || rest.indexOf("island") >= 0 || rest.indexOf("meadow") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">From sixty feet up, the island reveals itself. The meadow below: the lake, the three Brachiosauruses moving through it like slow continents. The tour road, a thin grey line. The Visitor Center glass catching the light. Beyond it, mountains. Beyond that, the Pacific. You are on an island in the Pacific Ocean. The island contains the Mesozoic Era. This is a sentence that should not be possible. It is true. You can see all of it from here, and it is true.</ansi>");
        return true;
    }

    return false;
}
