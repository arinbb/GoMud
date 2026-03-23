
// The Mines Level 10 - mining easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You climb the ladder, rung by rung, toward the faint warmth of the surface. The Library reassembles around you as you reach the top.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " ascends the ladder and vanishes into the upper darkness.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "mine" || cmd == "dig" || (cmd == "use" && rest.indexOf("pick") >= 0)) {
        if (user.GetMiscCharacterData("stardew_mining_ee") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You swing the pickaxe again. Copper ore falls from the wall. Your arms have learned the rhythm.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " works the copper vein with growing expertise.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("stardew_mining_ee", "found");
        user.GrantXP(200, "first copper ore from the Pelican Town mines");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You find a pickaxe propped against the wall -- someone left it here, or the mines provide what is needed. You swing at a copper vein. The first strike jars your arms. The second is better. The third is correct. A chunk of copper ore breaks free and clatters to the floor. It is heavier than it looks, dense with the patience of geological time. You have pulled something ancient from the earth that had been waiting, neutrally, for exactly this purpose. You pocket it. The vein holds more. You keep going.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for your first ore from the mines!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pulls a chunk of copper ore from the wall, the pickaxe ringing satisfyingly off the stone.", user.UserId());
        return true;
    }

    return false;
}
