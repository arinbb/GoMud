
// The Chelsea Hotel Room - Secret Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The typewriter carriage holds its unfinished line. The window holds the street. You dissolve back to the Grand Library, having been in the room where it started. That means something you will not entirely be able to articulate.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the hotel room, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || cmd == "look") {
        if (rest.indexOf("typewriter") >= 0 || rest.indexOf("paper") >= 0 || rest.indexOf("type") >= 0 || rest.indexOf("line") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You lean over the typewriter and read the three lines on the paper. The first line is about a countess. The second line is about a museum. The third line begins with the word VISIONS and stops after a dash, the carriage having gone as far as the thought went that day. He finished it. You know he finished it. The evidence is on the other side of the zone, in the loft, in the candlelight, in the sound of Louise pretending to sleep. But this is where the first draft ran out. This is the dash.</ansi>");
            if (user.GetMiscCharacterData("easter_bob_chelsea_typewriter") != "found") {
                user.SetMiscCharacterData("easter_bob_chelsea_typewriter", "found");
                user.GrantXP(100, "reading the typewriter in the Chelsea Hotel room");
            }
            return true;
        }
    }

    if (user.GetMiscCharacterData("easter_bob_chelsea_found") != "found") {
        user.SetMiscCharacterData("easter_bob_chelsea_found", "found");
        user.GrantXP(200, "finding the Chelsea Hotel room");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You found it. The room where the album began, in some sense -- or the room where the person who made the album was being the person who could make it. The grant of simply having found this place settles around you like the room itself: quiet, worn, significant.</ansi>");
    }

    return false;
}
