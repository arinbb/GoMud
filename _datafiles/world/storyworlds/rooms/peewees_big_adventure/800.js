
// Pee-wee's House - entry room with breakfast machine easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The colorful world of Pee-wee Herman dissolves around you like a pop-art painting melting in the rain. Toys, gadgets, and bicycles swirl into a kaleidoscope of color, then fade to the familiar quiet of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " waves goodbye, spins around three times, and vanishes back to the Library.", user.UserId());
        user.SetTempData("visited_peewees_big_adventure", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // EASTER EGG: Start the Rube Goldberg breakfast machine
    if (cmd == "use" || cmd == "start") {
        var target = rest.toLowerCase();
        if (target.indexOf("machine") >= 0 || target.indexOf("breakfast") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You flip the switch on the breakfast machine. A marble rolls down a track and tips a tiny lever. The lever releases a spring that launches a ping-pong ball into a funnel. The funnel drops the ball onto a see-saw that catapults a rubber dinosaur into a bucket.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The bucket's weight pulls a cord that strikes a match. The match lights a candle. The candle heats a kettle. The kettle whistles, startling a mechanical rooster that pecks a big red button. The button starts a conveyor belt that delivers a plate of perfectly cooked eggs, toast, and a glass of orange juice to the table.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It is the most complicated and wonderful breakfast delivery system ever devised by human hands.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " starts the breakfast machine. Marbles roll, levers flip, springs launch, and breakfast is served!", user.UserId());

            if (user.GetMiscCharacterData("easter_peewee_breakfast") != "found") {
                user.GrantXP(150, "breakfast machine easter egg");
                user.SetMiscCharacterData("easter_peewee_breakfast", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"green\">You earned 150 XP for operating the breakfast machine!</ansi>");
            }
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_peewees_big_adventure";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The world around you shifts and brightens impossibly. Colors become more vivid, edges become sharper, and everything takes on a toylike quality. You hear a bicycle bell, a cheerful laugh, and the clicking of an elaborate machine. You have entered the world of Pee-wee Herman.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}
