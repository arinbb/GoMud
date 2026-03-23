
// Visions of Johanna - Track 3
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candles gutter all at once. Louise stirs in her sleep. The loft dissolves and you are back in the Grand Library with the sense of having almost seen something -- the sense of being Johanna-adjacent, which is the closest anyone gets.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the candlelight, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" || cmd == "examine") {
        var target = rest.toLowerCase();
        if (target.indexOf("museum") >= 0 || target.indexOf("painting") >= 0 || target.indexOf("countess") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You look directly at the museum in the corner of your vision and it vanishes -- only the peeling plaster wall. You look away. The painting returns: the waiting room of infinity, girls in capes, the Countess pinned between the meaning of what she wants and what she is permitted to want. The museum is not here. The museum is real. These are both true. Johanna is not here either and she fills the room. These are also both true. You stand in the loft at three in the morning and understand something about vision that requires having almost seen it to know.</ansi>");
            if (user.GetMiscCharacterData("easter_bob_johanna_museum") != "found") {
                user.SetMiscCharacterData("easter_bob_johanna_museum", "found");
                user.GrantXP(250, "seeing the museum in Visions of Johanna");
            }
            return true;
        }
        if (target.indexOf("window") >= 0 || target.indexOf("city") >= 0 || target.indexOf("light") >= 0 || target.indexOf("infinity") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The city lights through the old glass go on and on past the point where cities are supposed to stop. You count them -- you cannot count them. They stack and layer into a distance that becomes a direction: not out but through, not a view but a passage into something that is all distance and no destination. Johanna is there. She is in the lights. She is in the space between the lights. She is in the greenish tint of the old glass making everything look underwater. You press your hand to the glass. Cold. The cold is real. Everything else is vision.</ansi>");
            return true;
        }
        if (target.indexOf("louise") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Louise is asleep, her breathing too regular for someone who is fully asleep. She is here and warm and real. That is both the comfort of the song and the problem with the song: Louise is here and Johanna is everywhere, and those are different categories of presence, and Dylan can feel the difference, and now so can you.</ansi>");
            return true;
        }
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You listen. Heat pipes. Louise breathing. Candle wax cooling. The city doing what cities do at three in the morning. And underneath all of it, underneath the real sounds, the sound of Johanna: not a voice, not music, but the sound of an absence so specific it has a texture. She is not here. You can hear her not being here. It is the most present absence you have ever heard.</ansi>");
        return true;
    }

    return false;
}
