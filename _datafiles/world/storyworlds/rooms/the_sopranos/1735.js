
// The Sopranos - The Stugots
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The salt air thins. The boat's rocking slows. The grey-green bay fades back to celluloid and the Grand Library comes back to you, warm and landlocked.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches the open water for a long moment and then steps off the boat.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("water") >= 0) || (cmd == "look" && rest.indexOf("open") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You sit in the worn fishing chair on the deck of the Stugots. The bay is out there, grey-green and endless. The boat rocks in the small swells. Gulls overhead. Salt air. The marina behind you is quiet. Out past the marina mouth, the Atlantic. All of it indifferent to everything on shore.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">This is where Tony Soprano comes to not be Tony Soprano, or to be a simpler version of himself, or to not think about what Tony Soprano has to think about all day. It does not always work. But the water is always there and the water does not want anything from him.</ansi>");
        return true;
    }

    if (cmd == "fish") {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You cast a line into the Raritan Bay. The water receives it. Something might be down there. You wait. The boat rocks. Nothing happens, and nothing happening is the point of fishing.</ansi>");
        return true;
    }

    return false;
}
