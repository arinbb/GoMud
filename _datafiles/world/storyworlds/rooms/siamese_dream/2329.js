var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The guitar clouds lower gently, carrying you down through the layers until you arrive in the Grand Library, the late afternoon light of Mayonaise still on your face.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " descends through the guitar clouds and returns to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "float" || cmd == "fly") {
        if (user.GetMiscCharacterData("easter_siamese_mayonaise") != "found") {
            user.SetMiscCharacterData("easter_siamese_mayonaise", "found");
            user.GrantXP(250, "floating in Mayonaise");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You step off the cloud floor and rise. Through the bass layer, through the mid-range layer, through the overtone cirrus at the top. Above the highest cloud there is open sky -- the late afternoon gold, infinite and warm -- and you float there for a moment being exactly fool enough to almost be it. Then you drift back down, landing softly on the guitar floor, the clouds receiving you without comment.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " rises through the guitar layers and floats above them for a golden moment.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You step off the floor and rise again through the layers. The late afternoon gold is still there above the highest cloud. You have been here before. You will come back.</ansi>");
        }
        return true;
    }

    return false;
}
