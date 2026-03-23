// MTVs The State - The Barrel (2382)
// Quest step 3: visit the barrel
// Easter egg: 'sit' or 'live here' => 200 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(420) && user.GetMiscCharacterData("the_state_quest_barrel") != "done") {
        user.SetMiscCharacterData("the_state_quest_barrel", "done");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You are in the barrel. Barry and Levon are here. The barrel is, genuinely, a good place to live. You understand this now.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Visit Barry and Levon in the barrel.)</ansi>");
        user.Command("quest", 0);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The barrel walls expand and then contract and then you are elsewhere. The Grand Library. You understood something in the barrel. You are not entirely sure what.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the barrel like a dream of a comfortable place.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        var key = "the_state_barrel_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit down in the barrel. It is cozy. More cozy than a barrel has any right to be. Barry nods. Levon nods. You have been accepted.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits down in the barrel. Barry and Levon shift slightly to make room. They do not need to — there is plenty of room — but they do it anyway.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "barrel easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(+200 XP — The barrel is home.)</ansi>");
        }
        return true;
    }

    if (cmd == "live" && rest.toLowerCase().indexOf("here") >= 0) {
        var key2 = "the_state_barrel_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You consider the barrel. You consider living in it. It is not a small consideration.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Barry says: \"There is room.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Levon says: \"There is always room.\"</ansi>");
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(200, "barrel easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(+200 XP — There is always room.)</ansi>");
        }
        return true;
    }

    return false;
}
