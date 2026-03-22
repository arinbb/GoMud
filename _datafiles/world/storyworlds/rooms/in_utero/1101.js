
// Serve the Servants - Track 1
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The courtroom dissolves, headlines scattering like confetti, the television finally going dark. The verdict fades. The static swallows everything, and you find yourself back in the Grand Library, the silence almost unbearable after so much noise.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a flurry of newsprint and static, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
