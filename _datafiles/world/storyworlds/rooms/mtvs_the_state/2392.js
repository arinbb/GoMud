// MTVs The State - The Green Room (2392)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You leave the green room through the stage door. The Grand Library. The green room is always there, between things. You were between things and now you are somewhere else.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits through the stage door.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("mirror") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You look at yourself in the vanity mirror under the ring of bulbs. You look like a person who has been somewhere interesting. The light is warm. The reflection shows you ready.</ansi>");
        return true;
    }

    if (cmd == "eat" || cmd == "take") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("bagel") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You take a bagel. It is a New York bagel, even backstage at an MTV studio, because that is what bagels are in New York. It is very good. It is slightly past its peak. It is perfect.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a bagel from craft services.", user.UserId());
            return true;
        }
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You sit on the green room couch. You are between things. This is fine. The couch holds you. The room is quiet. You will go back out when it is time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the green room couch, resting between sketches.", user.UserId());
        return true;
    }

    return false;
}
