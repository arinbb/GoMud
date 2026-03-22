
// Saturn - sandworm desert, danger zone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The twin suns of Saturn swirl together like draining water, pulling the black sand and striped rocks into a vortex that resolves into the calm shelves of the Library. Your shoes are still full of sand.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is pulled into a vortex of sand and twin sunlight and vanishes from Saturn.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Entering Saturn triggers a warning
    if (cmd == "enter" || cmd == "look") {
        // The onEnter is handled by the room description itself;
        // this provides additional context for looking around
        if (cmd == "look" && rest == "") {
            // Danger reminder on general look
        }
    }

    // Digging in the sand
    if (cmd == "dig" && rest.indexOf("sand") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You dig your hands into the black sand. It's hot -- almost burning. Your fingers close around something smooth and curved. You pull it free: a tooth. A single tooth the size of your forearm, serrated along both edges, still slick with something that might be saliva. The ground beneath you shudders. You just disturbed the nest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " digs in the sand and pulls out an enormous tooth. The ground begins to shake.", user.UserId());
        return true;
    }

    // Running
    if (cmd == "run") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You run across the black sand, but running on sand is like running in a nightmare -- slow, exhausting, futile. The vibrations under your feet intensify with every step. The sandworm tracks your movement. Running only makes it hungrier. The door back to the waiting room is your best bet.</ansi>");
        return true;
    }

    // Hiding behind rocks
    if (cmd == "hide" && rest.indexOf("rock") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You press yourself against one of the striped rocks. It vibrates against your back like a tuning fork. The sandworm's ridge passes nearby, pauses, then continues on. It can't see you behind the rock. But it can feel your heartbeat through the sand. You have seconds, not minutes.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">*** WARNING: You have entered Saturn. This is sandworm territory. ***</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">The ground is already trembling beneath your feet. Something enormous knows you're here.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">The door to the waiting room is to the south. You should consider using it. Quickly.</ansi>");
    SendUserMessage(user.UserId(), "");
}
