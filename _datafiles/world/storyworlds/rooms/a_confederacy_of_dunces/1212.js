
// Congo Square - return handler + buy drink easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The live oaks fade, the Spanish moss dissolves into trailing sentences, and Congo Square returns to the pages where it lives between readings. The Dr. Nut machine gives one last quiet hum. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the shade beneath the live oaks and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "buy" || cmd == "use") {
        var target = rest.toLowerCase();
        if (target.indexOf("drink") >= 0 || target.indexOf("machine") >= 0 || target.indexOf("soda") >= 0 || target.indexOf("nut") >= 0 || target.indexOf("vending") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put a nickel in the Dr. Nut vending machine. It clunks, shudders, and dispenses a glass bottle of Dr. Nut soda, ice cold against your palm despite the warm machine.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">You pop the cap and drink. It tastes of vanilla and almonds and something indefinable that might be nostalgia or might be New Orleans itself. Dr. Nut was produced here from 1934 until the mid-1970s. It was Ignatius J. Reilly's drink of choice. You cannot buy it anymore in the real world. Some things exist only in stories and memory, which is another way of saying they exist in the only places that matter.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " buys a Dr. Nut from the vending machine and drinks it with the reverence of someone tasting history.", user.UserId());

            if (user.GetMiscCharacterData("dunces_drnut") != "found") {
                user.SetMiscCharacterData("dunces_drnut", "found");
                user.GrantXP(100, "drinking a Dr. Nut soda");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 100 XP for tasting a piece of vanished New Orleans. Dr. Nut: 1934-1976. Gone but not forgotten. ]</ansi>");
            }

            return true;
        }
    }

    return false;
}
