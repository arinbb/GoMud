// The Courthouse
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The courthouse dissolves. The gavel sound fades. The Lawyer's expression of compressed patience goes with it. The gallery benches, the stenographer, the judge's worn look — all of it retreats into white. You are back in the Grand Library, where no one has ever been held in contempt, though several have deserved it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is excused from the courtroom as the scene dissolves around them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
