
// The Sopranos - Satriales Back Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bare bulb flares white, the card table folds away, and the corners dissolve into warm library light. The Grand Library receives you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps through the curtain and does not come back through it.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" && (rest.indexOf("card") >= 0 || rest.indexOf("cards") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit down at the card table and look at the face-down hands. You pick one up. Two pair: sevens and nines. Not great, not terrible. You look at the pot in the middle -- there is real money there. You play your hand, betting into the dark, bluffing with what you have. Bobby watches you with his mild eyes. You win the hand. Nobody congratulates you. In this room winning is just what happened, not what matters.</ansi>");

        if (user.GetMiscCharacterData("sopranos_cards") != "found") {
            user.SetMiscCharacterData("sopranos_cards", "found");
            user.GrantXP(100, "playing cards in the back room");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have played cards in the back room at Satriales. You understand something now about how business is conducted at a card table. [+100 XP]</ansi>");
        }
        return true;
    }

    if (cmd == "open" && rest.indexOf("locker") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You put your hand on the combination lock and then take it away. You do not know the combination. More importantly, you have a feeling that knowing the combination would make your life considerably more complicated. You leave the locker alone.</ansi>");
        return true;
    }

    if (cmd == "call" || (cmd == "use" && rest.indexOf("phone") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up the rotary phone. Dial tone. You dial a number and it rings somewhere. Nobody answers. You hang up. In this room, that is probably for the best.</ansi>");
        return true;
    }

    return false;
}
