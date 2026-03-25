
// Wayne's World - Wayne's Basement (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The basement shimmers. The posters, the cameras, the couch — they freeze like a paused tape and then dissolve into film grain. Wayne gives you a final thumbs up before the image fades. The warmth of the Grand Library closes around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like a paused VHS tape and vanishes from the basement.", user.UserId());
        user.SetTempData("visited_waynes_world", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("schwing") >= 0) {
        var key = "waynes_world_schwing_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say \"SCHWING!\" with full commitment.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says \"SCHWING!\" with total conviction.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Wayne points at you and shouts: \"SCHWING! YES! This one gets it, Garth. This one totally gets it.\"</ansi>");
        SendRoomMessage(room.RoomId(), "Wayne points and shouts: \"SCHWING! YES! This one totally gets it!\"", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(100, "schwing easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP — Excellent!)</ansi>");
        }
        return true;
    }

    if (cmd == "schwing") {
        var key2 = "waynes_world_schwing_egg";
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">SCHWING!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " does a SCHWING gesture of pure enthusiasm.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Wayne mirrors the gesture immediately. You have achieved synchronicity.</ansi>");
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(100, "schwing easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP — Excellent!)</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_waynes_world";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(120)) {
        user.GiveQuest(120);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The projector hums and the screen fills with a basement — not a sad basement, but the greatest basement in the history of Aurora, Illinois. Fluorescent light, rock posters, a couch that has heard everything. Wayne Campbell turns from the camera and points directly at you. \"Excellent! A new viewer! Party on!\" Garth peeks out from behind the drum kit, adjusts his glasses, and gives a small, sincere wave. The smell of carpet and old cassettes and rock and roll fills your lungs. You are here. It is excellent.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}
