
// Wayne's World - Alice Cooper's Concert
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The concert strobes to a freeze-frame and then dissolves into film grain. The last guitar chord hangs in the air a moment longer than it should. The library comes back, warm and book-smelling and much quieter.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " phases out during a guitar solo. The crowd doesn't notice. They're committed to the show.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sing" || cmd == "scream" || cmd == "shout") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You add your voice to the chorus. It's absorbed by the crowd immediately. You become part of something larger. The song fills you and you fill the song. This is what Wayne and Garth felt. Now you feel it too.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sings along at the top of their lungs. The concert accepts this completely.", user.UserId());
        return true;
    }

    if (cmd == "headbang" || cmd == "dance") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Full headbang. Hair forward, hair back, the whole pendulum. The crowd around you parts and reforms and now you're all doing it. This is community. This is rock and roll. EXCELLENT.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " headbangs with complete commitment. The nearby crowd joins in solidarity.", user.UserId());
        return true;
    }

    if (cmd == "bow" || cmd == "kneel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You drop to your knees in the crowd. People step around you respectfully. This is the concert floor. All forms of reverence are valid here. \"We're not worthy!\" is the correct feeling.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drops to their knees in the concert crowd. Nobody bats an eye. This is that kind of show.", user.UserId());
        return true;
    }

    return false;
}
