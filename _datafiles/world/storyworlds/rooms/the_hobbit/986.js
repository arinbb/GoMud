
// Smaug's Hoard - return handler + arkenstone easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The treasure dims. The dragon's eye closes. Mountains of gold flatten into gold-leaf lettering on a leather-bound cover, and you find yourself back in the Grand Library, your pockets disappointingly empty but your heart full of wonder.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly away from the dragon's hoard and dissolves into a shimmer of gold dust, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "take" || cmd == "steal" || cmd == "get") && rest.indexOf("arkenstone") >= 0) {
        if (user.GetMiscCharacterData("hobbit_arkenstone") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach toward the Arkenstone again, but its light passes through your fingers. You have already held the Heart of the Mountain once. Its beauty burned into your memory. That is enough. That is more than most will ever have.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("hobbit_arkenstone", "true");
        user.GrantXP(300, "stealing the Arkenstone from Smaug's hoard");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Your hand closes around the Arkenstone. It blazes with inner fire -- white light shot through with every color of the rainbow, like a globe of frozen moonlight. It is the most beautiful thing you have ever held. You understand at once why Thorin would burn the world to possess it, why the Elvenking coveted it, why wars were fought over a single stone.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The dragon stirs. One enormous eye opens wider. A rumble builds in his chest like distant thunder. You slide the stone into your pocket with trembling hands. Smaug's nostrils flare. He knows. He always knows when something is taken from his hoard. But for now -- for this one breathless moment -- you are a burglar worthy of the name.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Arkenstone fades from your pocket, returning to its place in the story. But the memory of its light remains.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+300 XP for stealing the Heart of the Mountain from under the dragon's nose!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plunges a hand into the treasure hoard and pulls out a blazing white gem. The dragon's eye snaps open. The gem fades back into the story, but the moment of breathtaking courage remains.", user.UserId());
        return true;
    }

    return false;
}
