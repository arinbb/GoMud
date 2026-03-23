// Back to the Future -- Doc Browns Garage
// Easter egg: "look flux" or "look capacitor" triggers invention flashback
var LIBRARY_ROOM = 1;
var EASTER_KEY = "bttf_egg_flux";

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The blackboard equations scroll too fast to read, the chalk lines spiraling outward until they fill every surface, then the room folds along one of the equations and you are back in the Grand Library, slightly dizzy and smelling of chalk dust and ozone.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears in a flash of chalk dust, leaving an equation half-drawn on the air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("flux") >= 0 || restLower.indexOf("capacitor") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stare into the Y-shaped housing of the flux capacitor. The three tubes pulse in sequence -- one, two, three, one, two, three. As you watch, the pulsing seems to quicken, and for a moment you experience a vivid flash: a Saturday morning, a slippery bathroom, a head striking a sink, and then a sudden blazing certainty about the shape of time. You see the device fully formed, as if it had always existed. You just needed to fall down to find it.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stares into the flux capacitor housing, eyes going wide.", user.UserId());

            if (user.GetMiscCharacterData(EASTER_KEY) != "found") {
                user.SetMiscCharacterData(EASTER_KEY, "found");
                user.GrantXP(150, "flux capacitor invention flashback");
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+150 XP -- you witnessed the moment of invention)</ansi>");
            }
            return true;
        }
    }

    if (cmd == "pet" || cmd == "pat") {
        var restLower2 = rest.toLowerCase();
        if (restLower2.indexOf("einstein") >= 0 || restLower2.indexOf("dog") >= 0 || restLower2.length == 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Einstein thumps his tail against the floor. He accepts your attention with the dignity of the first time traveler in history.</ansi>");
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(250)) {
        var step = user.GetMiscCharacterData("bttf_quest_step");
        if (step == "2") {
            user.SetMiscCharacterData("bttf_quest_step", "3");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The blackboards. The DeLorean. The flux capacitor. This is where it all began. Doc Brown built the future here, one equation at a time.</ansi>");
        }
    }
    return false;
}
