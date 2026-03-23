
// The Andy Griffith Show - Andys Living Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The living room fades gently -- the pie smell lingers longest -- and the Grand Library takes shape around you, warm and quiet. You carry a little of the lemon polish and apple cinnamon with you. It does not entirely leave.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes one last look at the pie and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || (cmd == "take" && rest.indexOf("pie") >= 0) || (cmd == "smell" && rest.indexOf("pie") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take a slow breath of apple pie and cinnamon. There is a reason Aunt Bees pie is legendary in Mayberry. There is a reason nobody ever turns it down. The smell alone is a small act of grace.</ansi>");
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 8);

    if (roll == 1) {
        room.SendText("<ansi fg=\"yellow\">From the kitchen comes the sound of Aunt Bee humming something tuneless and contented, the sound of a woman who is exactly where she wants to be.</ansi>");
        return true;
    }

    return false;
}
