// Best in Show -- The Hotel Lobby (2345)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hotel lobby dissolves. The dogs in the armchairs, Dale at the desk, the poodle in her crate -- all folding back into celluloid. The Grand Library settles around you, warm and quiet and free of competitive grooming.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks around the lobby one last time and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach toward a passing dog. The dog accepts this with the composure of a professional. Its owner watches with the mild pride of someone whose dog is being correctly appreciated.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("dale") >= 0 || rest.indexOf("desk") >= 0 || rest.indexOf("clerk") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Dale has the look of a man who went into hotel management for the stability. He finds the Mayflower weekend, in his own words, not exactly what he expected when he took the job, which was also not what he expected, but less so now. He is a professional. The Weimaraner is still staring at him. He does not make eye contact. This does not help.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("rhapsody") >= 0 || rest.indexOf("poodle") >= 0 || rest.indexOf("crate") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Rhapsody in White sits in her travel crate with the absolute composure of an animal that knows exactly what it is and has always known. She glances at you. She has assessed you. The assessment is complete. She looks away. This is not unkind. She simply has other things to think about.</ansi>");
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find an armchair. A dog has recently been in this armchair. The warmth and a few small hairs confirm it. You sit anyway. It is a comfortable armchair. The lobby moves around you -- handlers, dogs, the soft noise of a building full of people who care about something. You could stay here a while.</ansi>");
        return true;
    }

    return false;
}
