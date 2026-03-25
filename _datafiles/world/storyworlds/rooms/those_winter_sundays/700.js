
// Those Winter Sundays entry room - Front Porch
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold recedes. The frost on the porch dissolves. The plain house softens and fades like a memory half-remembered, and the weight of unspoken love lifts from your chest as you find yourself back in the quiet warmth of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps off the porch and fades into the cold morning air, returning to the Library.", user.UserId());
        user.SetTempData("visited_those_winter_sundays", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_those_winter_sundays";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">The pages of the book fall open and the cold hits you first — a deep, blueblack cold that steals the warmth from your hands and face. You are standing on a wooden porch before a small house. It is Sunday morning, very early. The world is frost and silence.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}
