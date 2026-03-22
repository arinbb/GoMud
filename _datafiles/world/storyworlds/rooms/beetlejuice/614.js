
// Saturn - sandworm desert, escalating urgency
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The twin suns of Saturn swirl together like draining water, pulling the black sand and striped rocks into a vortex that resolves into the calm shelves of the Library. Your shoes are still full of sand.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is pulled into a vortex of sand and twin sunlight and vanishes from Saturn.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dig" && rest.indexOf("sand") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You dig your hands into the black sand. It's hot -- almost burning. Your fingers close around something smooth and curved. You pull it free: a tooth. A single tooth the size of your forearm, serrated along both edges, still slick with something that might be saliva. The ground beneath you shudders. You just disturbed the nest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " digs in the sand and pulls out an enormous tooth. The ground begins to shake.", user.UserId());
        return true;
    }

    if (cmd == "run") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You run across the black sand, but running on sand is like running in a nightmare -- slow, exhausting, futile. The vibrations under your feet intensify with every step. The sandworm tracks your movement. Running only makes it hungrier. The door back to the waiting room is your best bet.</ansi>");
        return true;
    }

    if (cmd == "hide" && rest.indexOf("rock") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You press yourself against one of the striped rocks. It vibrates against your back like a tuning fork. The sandworm's ridge passes nearby, pauses, then continues on. It can't see you behind the rock. But it can feel your heartbeat through the sand. You have seconds, not minutes.</ansi>");
        return true;
    }

    if (cmd == "scream" || cmd == "shout" || cmd == "yell") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You scream into the void. The twin suns don't care. The black sand doesn't care. But the ground EXPLODES twenty feet to your left -- the sandworm erupting with a shriek that harmonizes horribly with yours. Its mouth is a cathedral of teeth. Screaming was a mistake.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " screams. The sandworm answers.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stumble through the door and your feet hit sand -- black sand, hot as a skillet, stretching to every horizon under two bloated orange suns. The sky is the color of a bruise. Striped rocks jut from the dunes like rotten teeth. This is Saturn. This is WRONG.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">The ground shudders. Something massive moves beneath the sand, displacing dunes in its wake. A ridge of black-and-white striped hide surfaces fifty yards away, then submerges. It's circling.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">The door to the waiting room is to the south. GO. NOW.</ansi>");
    SendUserMessage(user.UserId(), "");
    // Track how long the player has been here
    user.SetTempData("saturn_ticks", "0");
}

function onIdle(room) {
    var players = room.GetPlayers();
    if (players.length == 0) { return false; }

    for (var i = 0; i < players.length; i++) {
        var p = players[i];
        var ticks = p.GetTempData("saturn_ticks");
        if (ticks == "") { ticks = 0; } else { ticks = parseInt(ticks); }
        ticks = ticks + 1;
        p.SetTempData("saturn_ticks", String(ticks));

        if (ticks == 2) {
            room.SendText("<ansi fg=\"red\">The ground trembles harder. The sandworm's ridge surfaces closer -- thirty yards away. Sand cascades off its striped back. It's tasting the air.</ansi>");
        } else if (ticks == 4) {
            room.SendText("<ansi fg=\"red\">The vibration is constant now. Your teeth rattle. The sandworm surfaces fifteen yards away -- you can see individual scales, each one the size of a dinner plate. Its body is as thick as a bus. It knows exactly where you are.</ansi>");
        } else if (ticks == 6) {
            room.SendText("<ansi fg=\"red\">TEN YARDS. The sand between you and the worm bulges upward. You can hear it breathing -- a wet, rattling hiss that sounds like a subway train full of angry snakes. Its mouth begins to open beneath the sand. The door south is RIGHT THERE.</ansi>");
        } else if (ticks >= 8) {
            room.SendText("<ansi fg=\"red\">The sandworm ERUPTS from the ground directly in front of you -- a wall of teeth and rage and alien hunger. Its mouth is wide enough to swallow a house. Gravity stops working correctly. Sand rains upward.</ansi>");
            // Don't actually kill the player, just make it terrifying
            var urgent = [
                "<ansi fg=\"red\">The worm's jaws snap shut inches from your face. Hot, rotten breath washes over you. It missed. It won't miss again.</ansi>",
                "<ansi fg=\"red\">A tentacle-tongue lashes out and wraps around your ankle. You wrench free, leaving a shoe behind. RUN.</ansi>",
                "<ansi fg=\"red\">The worm shrieks -- a sound that shouldn't exist, that was never meant for human ears. Your vision blurs. Your knees buckle. SOUTH. GO SOUTH.</ansi>"
            ];
            var pick = Math.floor(Math.random() * urgent.length);
            room.SendText(urgent[pick]);
        } else {
            // Regular ticks - ambient dread
            var ambient = [
                "<ansi fg=\"red\">The black sand shifts beneath your feet like something is breathing under it.</ansi>",
                "<ansi fg=\"red\">A distant shriek echoes across the dunes. It could be wind. It isn't wind.</ansi>",
                "<ansi fg=\"red\">The twin suns cast double shadows. Both of your shadows are running toward the door. Smart shadows.</ansi>",
                "<ansi fg=\"red\">Bones. There are bones in the sand. Big bones. Human-sized bones. They're recent.</ansi>"
            ];
            var pick = Math.floor(Math.random() * ambient.length);
            room.SendText(ambient[pick]);
        }
        return true; // suppress YAML idles
    }
    return false;
}
