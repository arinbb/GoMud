
// Harold and Maude - The Amusement Park
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The carousel music fades. The Ferris wheel blurs against the blue sky and dissolves. The smell of popcorn and salt air is replaced by the familiar scent of books, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the amusement park like a carousel horse completing its final rotation.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ride" || cmd == "carousel" || (cmd == "ride" && rest.indexOf("carousel") >= 0) || (cmd == "ride" && rest.indexOf("ferris") >= 0)) {
        if (user.GetMiscCharacterData("ham_amusement_easter") != "found") {
            user.SetMiscCharacterData("ham_amusement_easter", "found");
            user.GrantXP(150, "Harold and Maude: riding the carousel");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You climb onto a painted horse and the carousel moves. The park turns around you, rising and falling, the music playing its slightly-wrong waltz. Harold is on the horse beside you, facing backward, watching the park recede and return. He looks happy in the way of someone who has found a small, repeatable joy in a world that contains mostly unrepeatable ones. You ride the full circle. (+150 XP)</ansi>");
            SendUserMessage(user.UserId(), "");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs onto the carousel. The horses rise and fall. The slightly-wrong waltz plays on.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You ride the carousel again. The park turns around you. The music plays its honest, slightly-off waltz. Harold waves from the horse beside you.</ansi>");
        }
        return true;
    }

    return false;
}
