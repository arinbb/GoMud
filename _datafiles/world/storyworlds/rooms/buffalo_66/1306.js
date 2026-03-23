
// Buffalo '66 - The Brown Kitchen (dinner scene)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Bills wallpaper peels in fast-forward, the kitchen table recedes, and the fluorescent light becomes a projector beam. The Grand Library solidifies around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like the picture on a dying television set.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "watch" && (rest.indexOf("tv") >= 0 || rest.indexOf("game") >= 0 || rest.indexOf("bills") >= 0 || rest.indexOf("television") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You turn to the small television on the counter. The Bills are playing. The quarterback drops back, the pocket collapses, the pass is incomplete. The crowd groans. Jan does not groan. Jan watches with the intensity of a general watching a battlefield. She knows every play, every weakness, every failure. She loves this team the way she does not love anything else in this kitchen.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches the Bills game on the kitchen TV.", user.UserId());

        if (user.GetMiscCharacterData("buffalo66_watchgame") != "found") {
            user.SetMiscCharacterData("buffalo66_watchgame", "found");
            user.GrantXP(100, "watching the Bills game");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Something about the scene crystallizes — the fluorescent light, the meatloaf, the wallpaper, Jan's rigid devotion. You understand something about this family now. [+100 XP]</ansi>");
        }
        return true;
    }

    if (cmd == "eat" || (cmd == "eat" && rest.indexOf("meatloaf") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You take a bite of the meatloaf. It is dense and flavorless, held together by obligation rather than seasoning. The instant potatoes taste like the box they came in. The canned corn is canned corn. This is not a meal. It is a ritual that substitutes for conversation.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a bite of the meatloaf and chews in silence.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(90) && !user.GetMiscCharacterData("buffalo66_dinner")) {
        user.SetMiscCharacterData("buffalo66_dinner", "survived");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit down at the kitchen table. Jan does not look at you. She is watching the game. Jimmy hums something to himself. The meatloaf sits between you like a peace offering that no one wants. The fluorescent light buzzes. The Bills wallpaper watches.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have survived dinner at the Brown house. The game is on the TV — maybe you should watch it.</ansi>");
    }
    return false;
}
