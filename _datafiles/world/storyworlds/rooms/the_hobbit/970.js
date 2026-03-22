
// Bag End - Entry room for The Hobbit zone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The round green door of Bag End swings shut behind you. The cozy hobbit-hole dissolves into swirling ink and parchment. Pages flutter past like autumn leaves, and with a gentle thud you find yourself back in the Grand Library, the book closed in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps through the round green door and dissolves into a swirl of ink and parchment, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "smoke" && rest.indexOf("pipe") >= 0) {
        if (user.GetMiscCharacterData("hobbit_pipe_smoked") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take another puff of Old Toby. The smoke curls pleasantly, but the magic of the first time has passed. Still, it is very fine pipe-weed.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puffs contentedly on a pipe of Old Toby.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("hobbit_pipe_smoked", "true");
        user.GrantXP(150, "smoking Old Toby pipe-weed");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up Bilbo's pipe, pack it with Old Toby from the jar on the mantel, and light it with a taper from the hearth. The pipe-weed is extraordinarily fine. You blow a smoke ring -- and it floats across the room, perfectly round, glowing faintly gold in the firelight. Then another, and another, each one sailing through the last like a chain of golden mist. For a long, perfect moment, all is right with the world.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for enjoying the finest pipe-weed in the Southfarthing!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puffs on Bilbo's pipe and blows a chain of perfect golden smoke rings that drift lazily across the room.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You open the book and the pages begin to turn on their own. Ink swirls up from the words, forming shapes -- green hills, a round door, the smell of seed-cakes. The library fades. You are falling through a tunnel of handwritten text and watercolor illustrations, and then you land, gently, on a warm hearthrug...</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}
