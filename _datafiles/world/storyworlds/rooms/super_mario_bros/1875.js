
// Princess Peach - Quest completion on entry
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
        user.Command("questadvance 210");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Princess Peach waves from the throne room as the sunlight dims. The pixels scatter. The cake fades. You are back in the Arcade with a gold coin in your hand and the particular feeling of someone who finished the thing all the way to the end. Your quest is over.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bows to Princess Peach, then pixelates in the warm light and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && rest.indexOf("cake") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take a piece of cake. It tastes like victory. It tastes like eight worlds of effort condensed into a single bite of something impossibly sweet and light. It tastes like something you cannot describe to someone who has not finished the thing. You take another piece. It is still as good. Princess Peach smiles and gestures for you to take as much as you want. There is always enough cake at the end of something that deserved finishing.</ansi>");
        return true;
    }

    if ((cmd == "bow" || cmd == "wave" || cmd == "greet") && (rest.indexOf("peach") >= 0 || rest.indexOf("princess") >= 0 || rest == "")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Princess Peach curtsies with a grace that comes from being royalty and from having been rescued enough times to have perfected the grateful arrival. She says your name with warmth and certainty. She knew you were coming. She always knew. The sunlight is warm. The cake is real. Your quest is over.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " greets Princess Peach. She curtsies with elegant warmth.", user.UserId());
        return true;
    }

    return false;
}
