var LIBRARY_ROOM = 1;
var QUEST_ID = 390;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("quest_siamese_disarm")) {
        user.SetMiscCharacterData("quest_siamese_disarm", "visited");
        user.GiveQuest(QUEST_ID);
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The acoustic wood releases you gently, the cello strings settling to silence, and you are back in the Grand Library, carrying something in your chest that has no name.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades quietly from the acoustic room, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || cmd == "cry") {
        if (user.GetMiscCharacterData("easter_siamese_disarm") != "found") {
            user.SetMiscCharacterData("easter_siamese_disarm", "found");
            user.GrantXP(200, "hearing Disarm");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You stand in the acoustic room and let the cello strings find you. The frequency in your sternum rises. The child's drawing brightens. The guitar in the corner plays a single chord by itself -- not loudly, not dramatically, just a chord, the most honest chord, the chord that contains the killer and the killed and the fact that they are the same person. You do not cry. Or maybe you do. The room does not judge either way.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still in the acoustic room, listening.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">The cello strings vibrate in your sternum again. You have heard this before. You will hear it again. That is the thing about Disarm -- it never stops being true.</ansi>");
        }
        return true;
    }

    if (cmd == "play" || cmd == "strum") {
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You pick up the acoustic guitar and strum a G chord. The wood of the room absorbs it and gives it back warmer than it came in. The cello strings shift their frequency in response. Even an ordinary chord sounds like something important in here.</ansi>");
        return true;
    }

    return false;
}
