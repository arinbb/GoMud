// The Office - Reception
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wave goodbye to Pam. She smiles -- the real smile, not the polite one -- and you step back through the lobby doors into the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waves at the reception desk and walks south through the lobby doors, and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
