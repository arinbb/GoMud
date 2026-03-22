
// Serve the Servants - Track 1
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The courtroom dissolves, headlines scattering like confetti, the television finally going dark. The verdict fades. The static swallows everything, and you find yourself back in the Grand Library, the silence almost unbearable after so much noise.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a flurry of newsprint and static, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || cmd == "look") {
        if (rest.indexOf("headline") >= 0 || rest.indexOf("paper") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You scan the headlines papering the walls. Between the tabloid gossip, you find a small clipping from a music magazine dated February 1993. It describes a band recording their third album at a remote studio in Minnesota with an engineer who refused royalties on principle. The band finished in two weeks.</ansi>");
            if (user.GetMiscCharacterData("easter_utero_headlines") != "found") {
                user.SetMiscCharacterData("easter_utero_headlines", "found");
                user.GrantXP(150, "reading between the headlines");
            }
            return true;
        }
    }

    return false;
}
