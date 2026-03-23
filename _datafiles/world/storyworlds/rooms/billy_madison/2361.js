
// Billy Madison - The Pool
// Easter egg: "talk penguin" or "ernie" -- 200 XP
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The pool shimmers in the New Jersey sun. Ernie watches you go with deep, knowing penguin eyes. The water laps once against the tile, and then the whole scene dissolves into the warm paper smell of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the pool deck in a shimmer of chlorine-scented light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ernie" || (cmd == "talk" && rest.toLowerCase().indexOf("penguin") >= 0) || (cmd == "say" && rest.toLowerCase().indexOf("ernie") >= 0) || cmd == "penguin") {
        var key = "billy_madison_ernie_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You approach the penguin at the edge of the pool. It is definitely an inflatable pool toy. It is also definitely looking at you.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"Ernie,\" you say. \"Hey, Ernie.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The penguin tilts its head. Its eyes are extraordinarily warm for a piece of vinyl.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hear Billy's voice from inside the house: \"IS SOMEONE TALKING TO ERNIE? ERNIE! ARE YOU MAKING NEW FRIENDS?\" A pause. Then: \"ERNIE IS VERY FRIENDLY, HE'S JUST SHY AT FIRST.\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " crouches by the pool to talk to the penguin. The penguin seems receptive.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "ernie the penguin easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- You talked to the imaginary penguin. This means something.)</ansi>");
        }
        return true;
    }

    if (cmd == "swim" || cmd == "dive" || cmd == "cannonball") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You launch yourself off the diving board in a spectacular cannonball. The water closes over your head with a sound like the world ending pleasantly. When you surface, Ernie is watching you with dignified approval.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " does an absolutely excellent cannonball off the diving board.", user.UserId());
        return true;
    }

    return false;
}
