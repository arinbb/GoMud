// The Golden Country - listen easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Golden Country fades slowly, reluctantly. The thrush sings one more phrase, then goes. The blue sky greys. The green dims. The Grand Library solidifies around you. Orwell's England exists now only in the novel's pages and, briefly, in this dream.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands in the meadow for one more moment, then fades back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        var key = "1984_golden_country_easter";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "the thrush singing");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You stop. You listen. The thrush sings. A long, cascading run of notes, effortless, unselfconscious, not for you but available to you, filling the meadow with something the Party cannot name and therefore cannot destroy. Winston stood here in the dream and listened, and the thrush sang, and in the singing he heard something he could not quite name: a world without surveillance, a world without the Ministry, a world where beauty existed for no reason except that it could. The song ends. The silence after it is different from silence. Then the thrush begins again.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+150 XP: The thrush singing)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The thrush sings. A long, cascading phrase, effortless and clear. You listen. It is enough.</ansi>");
        }
        return true;
    }

    return false;
}
