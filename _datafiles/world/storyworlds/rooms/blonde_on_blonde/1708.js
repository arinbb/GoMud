
// Just Like a Woman - Track 8
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rain on the window intensifies for one second, the pearls stay on the floor, the ribbons stay broken, and you dissolve back to the Grand Library. The mirror held your reflection until the last possible moment.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the dressing room like a memory, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "take" || cmd == "get" || cmd == "collect") {
        if (rest.indexOf("pearl") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You gather a few pearls from the floor but you cannot find all of them -- some are under the vanity, some have rolled to where the light does not reach. A broken strand cannot be made whole again, only held. You put the ones you found back on the floor with the others. The strand is still broken. This is the correct outcome.</ansi>");
            return true;
        }
    }

    if (cmd == "look") {
        if (rest.indexOf("mirror") >= 0 || rest.indexOf("reflection") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The mirror shows you in the dressing room with the pearls on the floor and the rain on the window and the broken ribbons on the vanity. The you in the mirror seems to understand something. You try to hold eye contact with it long enough to learn what. The mirror does not answer questions. The mirror shows and does not explain. The fog of perfume shifts between you and your reflection and for a moment there is someone else there -- not quite visible, not quite gone.</ansi>");
            return true;
        }
    }

    return false;
}
