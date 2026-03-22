
// Gollum's Cave - return handler + riddle game easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold cave dissolves. Gollum's hissing fades. The dark lake becomes a pool of ink that soaks into parchment, and you find yourself back in the Grand Library, the ring's whisper already fading from your memory. Almost.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes into the darkness, leaving Gollum alone with his precious once more.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "take" || cmd == "pick" || cmd == "get") && rest.indexOf("ring") >= 0) {
        if (user.GetMiscCharacterData("hobbit_ring_found") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach for the ring again, but your hand passes through it. It is part of the story, not yours to keep. The memory of its weight in your pocket lingers, though. It always lingers.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("hobbit_ring_found", "true");
        user.GrantXP(200, "finding the One Ring");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Your fingers close around the ring. It is warm -- impossibly warm for something lying on cold stone. It slides onto your finger as if it was made for you. For a moment, the cave sharpens into terrible clarity -- you can see Gollum on his island, luminous and wretched, and you can hear the ring whispering promises of power and invisibility and things you should not want.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Then the vision fades. The ring slips from your finger and returns to the floor, waiting for the next hand. But you understand now -- what it costs, what it offers, and why a simple hobbit was the only one who could carry it.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for the Riddle in the Dark!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the golden ring and goes very still for a long moment, eyes wide, before setting it carefully back down.", user.UserId());
        return true;
    }

    return false;
}
