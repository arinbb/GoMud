
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The props room shimmers. The ventriloquist dummy waves goodbye — wait, that can't be right. A puff of flash powder, a burst of smoke, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears in a puff of flash powder. The ventriloquist dummy applauds.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "open") {
        if (rest.indexOf("can") >= 0 || rest.indexOf("peanut") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open the can labeled PEANUTS. A spring-loaded snake bursts out and smacks you in the face. Of course it did. Of COURSE it did.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens a can of peanuts and gets a spring-loaded snake to the face.", user.UserId());
            if (user.GetMiscCharacterData("easter_peewee_peanuts") != "found") {
                user.SetMiscCharacterData("easter_peewee_peanuts", "found");
                user.GrantXP(50, "falling for the oldest trick in the book");
            }
            return true;
        }
        if (rest.indexOf("trunk") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The trunk is padlocked shut. You rattle it hopefully. From inside, a muffled voice says: \"Go away! I'm rehearsing!\" The trunk shakes indignantly.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " rattles the trunk. Someone inside objects loudly.", user.UserId());
            return true;
        }
    }
    if (cmd == "wear" || cmd == "try") {
        if (rest.indexOf("gorilla") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pull on the gorilla suit. It fits surprisingly well. Too well. For a moment you feel an overwhelming urge to climb something tall and swat at biplanes. You take it off quickly.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tries on the gorilla suit and beats their chest experimentally.", user.UserId());
            return true;
        }
        if (rest.indexOf("nun") >= 0 || rest.indexOf("habit") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hold up the nun's habit. It's the same one Pee-wee used to sneak into Warner Bros. Studios. The wimple still has a faint smudge of face paint on it.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " holds up a nun's habit and considers their life choices.", user.UserId());
            return true;
        }
    }
    if (cmd == "talk" || cmd == "speak") {
        if (rest.indexOf("dummy") >= 0 || rest.indexOf("ventriloquist") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You address the dummy. It says nothing. Its painted eyes stare. Its jaw creaks open half an inch, then closes. Did it just... no. No it didn't. Definitely not.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tries to have a conversation with the ventriloquist dummy. The dummy does not respond. Probably.", user.UserId());
            return true;
        }
    }
    return false;
}
