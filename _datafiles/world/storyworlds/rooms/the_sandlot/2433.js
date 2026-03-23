// The Sandlot -- Fourth of July Field (2433)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A last firework blooms overhead in gold and red. Then the field and the neighborhood and the whole summer of 1962 fade into the quiet of the Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the field in a burst of light, like the best firework of the night.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "watch" || cmd == "look" && rest.toLowerCase().indexOf("fireworks") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lie back on the dry grass and watch the sky. The fireworks go up one after another -- gold, red, white, blue -- each one different, each one perfect, each one gone before you can hold it. The neighborhood is around you in the dark. Someone's dog puts its head on your arm. Above you, the whole American summer sky is on fire. You stay until the last one, which is always the biggest and the loudest, the one that makes everyone go quiet and then cheer. Then the smoke drifts across the stars and the field starts to empty and it is the Fourth of July and you are twelve and this is it, this is everything, this is the whole point.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies back in the grass and watches the entire sky light up.", user.UserId());
        return true;
    }

    if (cmd == "use" && rest.toLowerCase().indexOf("sparkler") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take a sparkler from the box and someone lights it for you. The light is immediate and fierce and in your hand. You write your name in the dark air -- the letters hang for a second, gold on nothing, and then they're gone. You write it again. Then someone is handing you another one and you are part of a line of kids all writing the same temporary names in the same temporary light, and none of it will be there tomorrow, and that's exactly how it's supposed to work.</ansi>");
        return true;
    }

    return false;
}
