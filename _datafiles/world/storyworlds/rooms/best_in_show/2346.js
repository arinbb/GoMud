// Best in Show - Grooming Area
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grooming area dissolves in a cloud of conditioning spray. The dogs, the blow-dryers, Stefan's lighting rig -- all of it folds back into the film. The Grand Library is around you again, its air mercifully free of professional-grade grooming products.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sidesteps a grooming table and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "groom" || cmd == "brush" || cmd == "spray") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Stefan looks at you. Scott looks at you. They say nothing, but their collective gaze communicates volumes about the difference between someone who knows what they are doing and someone who picked up a brush in a grooming area without training. You set the brush down. This was right.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("agnes") >= 0 || rest.indexOf("miss") >= 0 || rest.indexOf("shih") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Miss Agnes is a Shih Tzu of unimpeachable bearing. Her coat is, as Stefan insists, not white -- luminous. Under the lighting rig, she seems to generate her own mild radiance. She knows you are looking at her. She accepts this as her due.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("rhapsody") >= 0 || rest.indexOf("poodle") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Rhapsody in White stands on her grooming table while Christy works. The Standard Poodle is enormous and perfectly composed. Her coat has been sculpted into the traditional show clip, which looks, if you think about it honestly, absolutely absurd and also, somehow, magnificent. She is both things at once. She is fine with this.</ansi>");
        return true;
    }

    return false;
}
