
// Dumb - Track 6
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The meadow recedes, the grass folding flat, the cello fading to its last note. The figure in the grass waves once without looking at you -- a goodbye, or a blessing, or nothing at all. The grey light thins to white, and you are in the Grand Library, feeling lighter and sadder in equal measure.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down in the grey-green grass and fades away, smiling.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You listen. The cello comes from no identifiable direction -- it is simply in the air, the way the sky is in the air. The song is the quietest on the album by a significant margin. It is about the specific peace that comes from being high and not caring about the things that usually feel important. The honesty of that is not cynical. It is almost tender. The melody is simple enough to whistle. You find yourself whistling it.</ansi>");
        return true;
    }

    if (cmd == "sit" || cmd == "rest" || cmd == "lie" || cmd == "lay") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit down in the grey-green grass. It is as soft as it looked. The meadow accepts your weight without complaint. The cello continues. The sky does not commit to clearing or clouding over. You find you do not need it to decide. You could stay here. That is the song's offer and its warning simultaneously.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits down in the grey meadow grass and settles into stillness.", user.UserId());
        return true;
    }

    return false;
}
