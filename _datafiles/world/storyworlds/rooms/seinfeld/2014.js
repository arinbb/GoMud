
// Seinfeld - The Laundromat
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The laundromat dissolves. The machines, the chairs, the folding table -- all of it fades. The Grand Library settles around you, dry and warm and not going to make you wait for your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gathers their laundry and leaves, or leaves without their laundry. Hard to say.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wash" || cmd == "laundry" || cmd == "do") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You load a machine, feed it quarters, add detergent, select a cycle. The machine begins. You sit in a plastic chair. You have forty-five minutes to sit here and have the kind of conversation that only happens when two people have nowhere to go and nothing specific to do and keep bumping into each other in the city and this is simply their lives.</ansi>");
        return true;
    }

    if (cmd == "fold") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You attempt to fold a fitted sheet. The first corner attaches to the second corner. The third corner finds the first two. The fourth corner is somewhere inside. You fold it approximately. It will go in the drawer approximately. This is fine. This is what everyone does with fitted sheets.</ansi>");
        return true;
    }

    return false;
}
