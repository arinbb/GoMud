
// 4th Time Around - Track 12
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The staircase recedes below you. The tambourines get quieter with each landing. The silent one on the fourth landing is the last sound before you dissolve back to the Grand Library, carrying nothing, asking for nothing, which is correct.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " descends from the spiral and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "take" || cmd == "get") {
        if (rest.indexOf("tambourine") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up the tambourine on the nearest landing. When you shake it, the sound it makes depends on which landing you took it from. First landing: bright and cheap. Second: quieter, something bent. Third: almost silent, one jingle gone. Fourth: nothing. Complete silence. You shake the fourth-landing tambourine and hear only the staircase, the ambient hum of the zone. You put it back. Dylan never asked for your crutch, and you cannot give him the tambourine either.</ansi>");
            return true;
        }
    }

    if (cmd == "climb" || cmd == "up" || cmd == "ascend") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The staircase goes up past the fourth landing into a fifth, a sixth, more. It does not arrive anywhere. Each landing is identical to the one before except for the tambourine's condition. You climb until the landings run out of tambourines and then there are just landings, bare, and then just the staircase going up, and you understand that you could climb forever and the song would still be the same length. You come back down.</ansi>");
        return true;
    }

    return false;
}
