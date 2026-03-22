
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You lean close to the water and the reflections rise to meet you. The stars in the river expand, filling your vision with swirling light. When it clears, you stand in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leans toward the water and is pulled into the reflections, vanishing in a swirl of starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}
