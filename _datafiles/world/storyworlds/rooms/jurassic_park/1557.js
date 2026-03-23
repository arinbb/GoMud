
// Jurassic Park - The Electric Fence
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fence hum rises to a pitch and the indicator lights blur into a single stripe of light that resolves into projector beam. The Grand Library appears around you, still and blessedly unpowered.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is outlined in electric light for a moment and then gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "climb" && (rest.indexOf("fence") >= 0 || rest.indexOf("wire") >= 0 || rest == "")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You test the indicator lights before you touch the fence. Green. You grab a chain link, find a foothold, and start climbing. The fence sways under your weight. Nine feet — this takes about thirty seconds. Halfway up, the indicator light nearest you flickers from green to amber and you freeze. Amber. Not green. The voltage is cycling. You climb faster. You reach the top and fling yourself over the barbed wire with more adrenaline than technique. Behind you, the indicator light returns to green. You land in the mud on the far side. You are alive. This time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs the electric fence with reckless speed and drops to the other side.", user.UserId());
        return true;
    }

    if (cmd == "touch" && (rest.indexOf("scorch") >= 0 || rest.indexOf("mark") >= 0 || rest.indexOf("burn") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The scorch mark is the shape of a hand — four fingers and a thumb, pressed flat against the post. The wood is blackened half an inch deep. The skin of whoever gripped this post was carbonized in under a second. Tim Murphy survived. Dr. Grant pulled him off the fence before the full charge could complete. The handprint does not look survivable.</ansi>");
        return true;
    }

    return false;
}
