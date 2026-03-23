
// Harold and Maude - Maudes Rooftop Garden
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rooftop garden -- the herbs, the sky, the warm bench -- dissolves slowly upward like smoke from a flower. The California sky fades and is replaced by the ceiling of the Grand Library, and you are back among the books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the rooftop garden into the afternoon sky and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest == "sky") || cmd == "breathe") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You sit on the bench and look west. The California sky is enormous from up here, all color and distance. The herbs move in the warm wind. Below, the phonograph plays something about time and the way it passes and what you do with it. You breathe in rosemary and thyme and warm air and the particular feeling of being exactly where you are.</ansi>");
        return true;
    }

    return false;
}
