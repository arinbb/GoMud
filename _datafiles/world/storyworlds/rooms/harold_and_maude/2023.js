
// Harold and Maude - Harolds Mansion
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The marble foyer blurs at the edges, the chandelier dissolving into the warm amber glow of the library. The smell of furniture polish fades and the smell of old books rises to take its place. The mansion is gone, and you are back among the stacks.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like a reflection on marble and vanishes from the foyer.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "examine" || cmd == "look") {
        if (rest == "office" || rest == "door" || rest == "side door") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">A paneled door half-hidden behind a heavy curtain. A brass plate reads OFFICE in military block letters. It is slightly ajar, and from within comes the crisp rustle of military maps being sorted.</ansi>");
            return true;
        }
    }

    return false;
}
