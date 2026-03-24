
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

    if (cmd == "order" || cmd == "eat" || (cmd == "sit" && rest.length == 0) || (cmd == "drink" && rest.indexOf("coffee") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The waitress slides a laminated menu across the counter without being asked. You order coffee and maybe something from the pie case -- the kind of pie that has been there long enough to become an institution. She pours the coffee without looking at you. It is fifty cents and it is not good and it is exactly right.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit at the counter. The diner hums around you -- the coffee warmer, the fluorescents, the refrigerator case. The waitress refills your cup before you ask. Nobody is watching. Nobody cares where you have been or where you are going. For five minutes, in a diner in Buffalo, you are just a person at a counter. It is enough. It is more than enough.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits at the diner counter. The waitress pours coffee. The diner hums.", user.UserId());

        if (user.GetMiscCharacterData("buffalo66_diner_order") != "found") {
            user.SetMiscCharacterData("buffalo66_diner_order", "found");
            user.GrantXP(150, "sitting down in the diner");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Some places just let you exist. [+150 XP]</ansi>");
        }
        return true;
    }

    return false;
}
