
// Gollum's Cave - return handler + riddle game easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold cave dissolves. Gollum's hissing fades. The dark lake becomes a pool of ink that soaks into parchment, and you find yourself back in the Grand Library, the ring's whisper already fading from your memory. Almost.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes into the darkness, leaving Gollum alone with his precious once more.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "riddle" || (cmd == "play" && rest.indexOf("riddle") >= 0) || (cmd == "ask" && rest.indexOf("riddle") >= 0)) {
        if (user.GetMiscCharacterData("hobbit_riddle_game") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have already played the riddle game here -- and won, though winning cost more than you expected. The cave holds its breath, remembering.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("hobbit_riddle_game", "true");
        user.GrantXP(250, "playing the riddle game with Gollum");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">Gollum's eyes gleam in the dark. You feel the riddle-game beginning -- an ancient tradition, its rules older than the mountain itself.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">Gollum hisses: 'Thirty white horses on a red hill, first they champ, then they stamp, then they stand still. What is it, precious?'</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">'Teeth!' you say, and Gollum shrieks with fury and delight. You trade riddle for riddle -- mountains, eggs, fish, wind, time. Each answer hangs in the cold air over the black lake. Then the last riddle, the one that should not be asked:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">'What have I got in my pocket?'</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Gollum's rage fills the cave like a cold wave. He demands three guesses, and three times you say it -- 'Hands. Knife. String.' -- and three times he is wrong, because the answer is the ring, the ring he did not know you had, the ring that chose you in the dark.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have won the riddle game. The oldest game in the world. And something fundamental about you has changed in the winning.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+250 XP for winning the Riddle Game in the dark!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays the ancient riddle game with Gollum across the black water. Something in the cave goes very quiet at the end.", user.UserId());
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
