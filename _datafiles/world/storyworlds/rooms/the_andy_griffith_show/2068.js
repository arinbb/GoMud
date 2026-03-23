
// The Andy Griffith Show - Wallys Filling Station
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The filling station -- Goober under the car, Gomer at the pumps, the smell of motor oil and afternoon -- fades back into the Grand Library. You leave having been made to feel that everything will be fine, mechanically and otherwise.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waves to Goober, who waves back with a wrench, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "help" || (cmd == "ask" && rest.indexOf("fix") >= 0) || (cmd == "look" && rest.indexOf("car") >= 0)) {
        var responses = [
            "<ansi fg=\"10\">Goober rolls out from under the car and gives a detailed diagnosis of what is wrong with it, what was wrong with it before that, what could go wrong next, and two related things that happened to somebody else in Mount Pilot in 1958. It is thorough and reassuring.</ansi>",
            "<ansi fg=\"10\">Gomer peers at the engine with an expression of deep wonder. 'Now ain't THAT something,' he says, about whatever he is looking at. He says this about most things. It is never clear if this is a problem or an observation.</ansi>",
            "<ansi fg=\"10\">Goober wipes his hands on a cloth and looks at you directly with the expression of a man about to be very honest. 'Now I don't want to alarm you,' he says, 'but...' He launches into a full account. It is fine in the end. It is always fine in the end with Goober.</ansi>"
        ];
        var pick = Math.floor(Math.random() * responses.length);
        SendUserMessage(user.UserId(), responses[pick]);
        return true;
    }

    if (cmd == "fill" || cmd == "gas" || (cmd == "pump" && rest.indexOf("gas") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Gomer fills you up -- metaphorically -- with cheerful efficiency, wiping the imaginary windshield with a chamois and checking the oil without being asked. This is full service. Mayberry invented full service.</ansi>");
        return true;
    }

    return false;
}
