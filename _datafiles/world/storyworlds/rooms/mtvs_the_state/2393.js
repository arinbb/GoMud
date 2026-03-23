// MTVs The State - The Street (2393)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The New York sidewalk shimmers. The cabs, the newsstand, the hot dog cart — they hold for a moment and then the library takes over, shelves and quiet and the smell of old books. You were on the street. Now you are not. The city was not watching you go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the sidewalk. The city moves on, as the city does.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "hail" || (cmd == "hail" && rest.toLowerCase().indexOf("cab") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You raise your arm. Three cabs pass without slowing. A fourth stops. You get in. The cab smells like air freshener shaped like a pine tree. The driver asks where you're going. You say: 'Nowhere.' He says: 'That's gonna be a flat rate.'</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " hails a cab. Against the odds, it stops.", user.UserId());
        return true;
    }

    if (cmd == "buy" || cmd == "eat") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("hot dog") >= 0 || restLower.indexOf("hotdog") >= 0 || restLower.indexOf("dog") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">The hot dog vendor hands you a hot dog without ceremony. It is a New York street hot dog: a tube of meat in a steamed bun with mustard and onions and everything that entails. It is perfect in the way that things with no pretension are perfect.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " buys a hot dog from the cart.", user.UserId());
            return true;
        }
    }

    return false;
}
