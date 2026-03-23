
// Paris, Texas - The Vacant Lot
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The vacant lot stays exactly as it is — it will be here tomorrow, and next year, and after Travis is gone. You leave it to itself and return to the library, where things are kept and named and shelved but never owned in the way Travis owns this empty Texas lot.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks off the lot and dissolves into the white Texas sky.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var r = rest.toLowerCase();
        if (r.indexOf("photo") >= 0 || r.indexOf("land") >= 0 || r.indexOf("lot") >= 0) {
            if (user.GetMiscCharacterData("paris_easter_lot") != "found") {
                user.SetMiscCharacterData("paris_easter_lot", "found");
                user.GrantXP(200, "understanding the vacant lot in Paris, Texas");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stand in the middle of the lot and try to understand what Travis saw in this photograph that made him spend money he did not have on a piece of land he had never visited. The lot tells you nothing. It is just land. Caliche and grass and a fence post and the sky. And then, standing there, you do understand it — not the land itself but the idea of it, the place where two incompatible things about yourself might be simultaneously true. A name that could hold both. A piece of the world that was just his. It was not enough. It was never going to be enough. He knew that. He bought it anyway.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"red\">The lot is still here. It will always be here. That is the thing about land — it does not leave.</ansi>");
            }
            return true;
        }
    }

    return false;
}
