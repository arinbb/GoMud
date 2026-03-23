// Far Cry 5 - The Fishing Spot
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The river sounds carry for a moment after everything else is gone — the water over the rocks, the kingfisher, the trout rising. Then the Grand Library's quiet. You find you are not quite ready to leave the river sound, but here you are.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the gravel bar, carried off on the sound of clear water over Montana granite.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fish" || cmd == "cast" || (cmd == "use" && rest.indexOf("rod") >= 0)) {
        var easterKey = "fc5_easter_fishing";
        var easterDone = user.GetMiscCharacterData(easterKey);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pick up the fly rod and wade in. The water is shockingly cold — real Montana river cold, the kind that turns your ankles to wood in minutes. You strip line, false cast twice to load the rod, and lay the pale morning dun on the water at the edge of the riffle. You wait. A ring expands three feet upstream. Another trout rising. You pick up the line and recast, shorter, a little left. The fly drifts over the ring. There is a pause that is the whole world. Then the take. The rod doubles. The reel sings. You are standing in a river in Hope County, Montana, everything else is happening everywhere else, and for this exact moment none of it touches you.</ansi>");
        if (easterDone != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(100, "Fished the Montana river");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+100 XP — The Calm Before)</ansi>");
        }
        return true;
    }

    if (cmd == "drink" && rest.indexOf("coffee") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The tin camping cup of coffee is cold now, but you drink it anyway. It tastes of metal and dark roast and whoever left it here in a hurry. It tastes like Montana. It is surprisingly good. You set the cup back in the gravel exactly as you found it.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("reflection") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The pool below the riffle holds a perfect inverted reflection of the mountains — all of Hope County's ranges, north and south and east and west, compressed into a few square feet of still water. A trout rises through it, rings spreading outward, the reflection shattering and reforming. You stand here watching it reform. It always reforms. That feels important. You are not sure why it feels important but it does.</ansi>");
        return true;
    }

    return false;
}
