
// Buffalo '66 - The Diner
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The diner dissolves, the fogged windows clearing to reveal not the street but the Grand Library. The coffee smell fades to old books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the fog on the diner windows and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" && rest.indexOf("jukebox") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You drop a quarter in the jukebox and press a button at random. After a mechanical pause, a song begins — something slow and sad from the fifties, a man singing about a love he lost or never had. The music fills the empty diner, bouncing off the chrome and glass, and for a moment the place feels less empty. Then the song ends and the silence comes back, heavier than before.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays a song on the jukebox. Something slow and sad fills the diner.", user.UserId());
        return true;
    }

    return false;
}
