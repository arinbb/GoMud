
// Forbidden Planet - The Study
// Easter egg 3: "read tempest" or "read shakespeare" -> secret room 1993
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The star map orrery spins faster and faster until the planets blur into rings of light. The study dissolves into a long tracking shot of an alien sky, then into the Grand Library's ceiling.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs into the star charts and vanishes back to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && (rest.indexOf("tempest") >= 0 || rest.indexOf("shakespeare") >= 0)) {
        var easterKey = "fp_easter_tempest";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "reading The Tempest");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You open The Tempest to Morbius's most heavily annotated passage -- Act IV, the masque. His handwriting covers every margin in a compressed, urgent script. He has drawn lines between Prospero's island and Altair IV, between Caliban and the Id, between the vanishing masque and the vanishing Krell. He has written in the margin beside Prospero's great speech:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">    'We are such stuff as dreams are made on, and our little life is rounded with a sleep.'</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">And beneath it, underlined three times: MONSTRUM EX ANIMA. The monster from the soul.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The back wall of the study shimmers. A passage opens where there was none. It leads somewhere that is not quite on the map.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- You followed Morbius's annotations to their source. Exit 'tempest' is now visible.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You open The Tempest again. The annotations are as dense as before, the passage to the secret room waiting behind the back wall. Morbius's handwriting: MONSTRUM EX ANIMA. You already know what it means. The passage is still open.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens The Tempest and reads with an expression of growing recognition.", user.UserId());
        return true;
    }

    return false;
}
