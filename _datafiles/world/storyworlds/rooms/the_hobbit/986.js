
// Smaug's Hoard - return handler + arkenstone easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The treasure dims. The dragon's eye closes. Mountains of gold flatten into gold-leaf lettering on a leather-bound cover, and you find yourself back in the Grand Library, your pockets disappointingly empty but your heart full of wonder.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly away from the dragon's hoard and dissolves into a shimmer of gold dust, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "talk" || cmd == "flatter" || (cmd == "speak" && (rest.length == 0 || rest.indexOf("smaug") >= 0 || rest.indexOf("dragon") >= 0)) || (cmd == "bargain") || (cmd == "converse")) {
        if (user.GetMiscCharacterData("hobbit_smaug_talk") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You try a little more flattery. Smaug's eye tracks you with ancient, amused intelligence. He knows you are buying time. He finds it entertaining. For now.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exchanges pleasantries with Smaug. The dragon looks entertained.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("hobbit_smaug_talk", "true");
        user.GrantXP(250, "engaging Smaug in verbal combat");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The eye opens wider. You feel it on you -- that terrible intelligence, old as the mountains, sharp as a claw.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">'Well, thief,' the dragon says, and his voice is like a rockfall. 'I smell you, and I feel your air. What have you brought me? Come, let us talk. I do so enjoy conversation before... other activities.'</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You are a burglar from the lake, you say. A friend of birds. A barrel-rider. Luck-wearer. The terms multiply -- each one true enough to mean nothing, each one feeding the dragon's hunger to know without giving him anything useful. This is the greatest duel of the quest, fought with words instead of blades.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">'I am old and strong, strong, strong,' Smaug says, rearing up to display his jeweled belly. 'Observe. My armour is like tenfold shields. My teeth are swords. My claws are spears.' One scale catches the light differently -- a bare patch over his left breast, soft as a sleeping infant, exposed where a gem was never pressed. He does not notice you noticing.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The conversation ends. You back away while he is still talking, which is the only sensible way to leave an argument with a dragon. You have given him nothing. You have taken something invaluable.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+250 XP for the verbal duel with Smaug!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " engages Smaug in a battle of words, giving nothing away while the dragon boasts. Something about the dragon's belly catches the light.", user.UserId());
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
