
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The swirling sky wraps around you like a cocoon of blue and gold. The spirals tighten, the stars blur, and the painted world dissolves. You emerge in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept into a spiral of stars and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach down and press your fingers into the path. The paint gives slightly -- thick impasto, still carrying the impression of the brush that laid it down. You feel the ridges of individual strokes, each one a decision made in real time, in the grip of something urgent. Cobalt blue and prussian blue blend and separate under your fingers. It has been over a century. The paint is still wet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels and presses a hand into the painted path.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("sky") >= 0 || rest.indexOf("star") >= 0 || rest.indexOf("spiral") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">From this path between the hill and the village, the sky presses close on all sides -- great turbulent spirals filling your peripheral vision as much as your direct gaze. The spirals are not random. They follow the same underlying motion, counterclockwise, like a vast slow vortex. You are inside the physics of an agitated atmosphere rendered in paint.</ansi>");
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You breathe in. Oil paint, linseed oil, turpentine -- the smell of paint applied thickly, obsessively, over days and weeks. And underneath it, night air: Provencal herbs, cool stone, the mineral scent of Rhone valley earth. You are breathing 1889 and canvas simultaneously.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You reach out and -- tentatively -- add a stroke to the sky. A small dash of cobalt blue, laid against the existing pattern. It blends seamlessly. The painting absorbs your contribution as if it were always there, always intended. You have joined the work. The sky spirals on, indifferent and welcoming in equal measure.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches up and adds a brushstroke to the swirling sky.", user.UserId());
        return true;
    }

    return false;
}
