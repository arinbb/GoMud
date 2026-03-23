
// The Night Sky
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You drift back down through the cold blue sky, toward the warm amber window below. The room receives you. You are back in the grand Library, the small book warm in your hands, and somewhere behind your eyes the blue of that sky still holds.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drifts back toward the warm window and dissolves into the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "count" && rest.toLowerCase().indexOf("star") >= 0) {
        if (user.GetMiscCharacterData("gm_counted_stars") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">You try to count the stars again. You start at one. You lose track somewhere around thirty or forty or four hundred. There are as many as there are.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("gm_counted_stars", "true");
        user.GrantXP(150, "counting the uncountable stars");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You start counting. One. Two. Three. The stars around you are close and round and warm -- you can touch them, which helps. Four. Five. Twelve. You lose track. You start again. One. Two. Seven. Sixteen. The stars don't stay still enough. Forty. Forty-one. Are you counting the same one twice? One hundred. One hundred and one. They keep -- one hundred and two -- keep moving. Or you keep moving. Two hundred. Three hundred. Four. The number gets very large and then stops being a number and starts being a feeling: more. More than you can hold. More than you need to count. All of them. All the stars. Every single one, saying goodnight.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for counting the uncountable stars.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " floats among the stars, counting carefully, losing track, starting over.", user.UserId());
        return true;
    }

    if (cmd == "touch") {
        if (rest.toLowerCase().indexOf("moon") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">You float toward the moon. It does not recede the way horizons do. You approach it. Its surface, up close, is cool and smooth as porcelain, slightly luminous from within. You press your palm against it. You can feel the whole room below through it -- all that warmth, conducted through the moon's skin. The moon is warm on your side. It is always warm on the side facing the room.</ansi>");
            return true;
        }
        if (rest.toLowerCase().indexOf("star") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">You reach out and cup one of the near stars in your hands. It is warm. It is the size of a large marble. It glows between your fingers, steady, unhurried. It does not burn. It simply shines. You hold it for a moment, then open your hands and let it drift back to its place in the sky. It goes without urgency.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " cups a star in both hands, very gently.", user.UserId());
            return true;
        }
    }

    if (cmd == "fly" || cmd == "float" || cmd == "swim") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You move through the sky with the slow ease of floating in warm water. The stars part for you and close behind you. The moon follows you without moving. The room below stays where it is -- warm and amber and green -- a fixed point below your floating. The sky supports you without effort. You are exactly as heavy as the sky expects you to be, which is: not very.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drifts slowly through the night sky among the stars.", user.UserId());
        return true;
    }

    return false;
}
