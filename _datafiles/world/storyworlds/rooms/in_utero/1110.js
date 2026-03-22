
// Radio Friendly Unit Shifter - Track 10
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The radio finds one last frequency -- a single clear note, pure and clean -- and then dies. The contracts scatter, the gold records fall, the mannequin's outstretched hand drops to its side. The office collapses into white noise. The Grand Library reassembles around you, and nobody here is trying to sell you anything.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tears up an invisible contract and vanishes in a burst of static.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
