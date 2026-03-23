// The Sandlot -- The Dugout (2424)
// EASTER EGG: "heroes get remembered" -> 200 XP (Babe Ruth's ghost advice)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dugout shade fades and the smell of red dirt dissolves. You are back in the Screening Room, the projector quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of the shade and into a shimmer of golden light, then vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    var restLower = rest.toLowerCase();
    var cmdRest = cmd + (rest ? " " + restLower : "");

    if (cmdRest.indexOf("heroes get remembered") >= 0 || (cmd == "say" && restLower.indexOf("heroes get remembered") >= 0)) {
        var key = "sandlot_egg_heroes";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Babe Ruth's ghost advice");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The air in the dugout changes. The temperature drops. A figure in a Yankee uniform stands at the end of the bench -- huge, cheerful, unmistakably Babe Ruth. He looks at you and grins a grin that belongs in another era entirely. He says: Heroes get remembered. But legends never die. Follow your heart, kid. And you'll never go wrong. Then he is gone, and the dugout is warm and dusty again, and somewhere on the field a ball cracks against a bat.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " goes very still in the dugout, staring at something nobody else can see.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The ghost of the Bambino is quiet today. But you still remember what he said.</ansi>");
        }
        return true;
    }

    if (cmd == "sit" || cmd == "wait" || cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the plank bench and watch the game. Ham calls the pitches. Benny swings. The ball goes where he wants it to go, every time, as if the ball doesn't have a choice. From here, in the shade, with the canteen making its slow way down the bench, everything feels possible. Even the fence at the south end looks less scary from here.</ansi>");
        return true;
    }

    return false;
}
