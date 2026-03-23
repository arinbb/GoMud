// Northern Exposure - Maurices Lodge
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lodge fades. The moon rock in its case. The flag. The development maps. Maurice watching you go with the expression of someone who is already thinking about the next thing. The Screening Room closes around you and you are back among the film reels.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the lodge. Maurice says 'Hmm' and goes back to his maps.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
