
// Buffalo '66 - Ice Skating Rink
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sodium lamps dim and the falling snow becomes static on a screen. The ice rink melts into the warm floor of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drifts away like snow in the lamplight and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "skate" || cmd == "ice") {
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You step onto the ice. It holds you. You push off and glide, and for a few seconds the world is reduced to the sound of blades on ice and the orange glow of sodium lamps and the snow falling through the light above you. You trace a slow circle on the scarred surface, your blade marks joining all the others, and you are part of the history of this place, which is the history of everyone who ever came here alone and tried to feel something.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps onto the ice and skates a slow, quiet circle.", user.UserId());
        return true;
    }

    return false;
}
