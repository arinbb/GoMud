// Northern Exposure - The Catapult Field (secret room)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The catapult field fades. The trebuchet, the piano waiting on the grass, the word ART in red paint -- all of it dissolves back into the Screening Room, where you are still in your seat and the piano has not yet been launched and perhaps never will be and perhaps already has been and both are fine.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the catapult field. Chris nods, unsurprised. Art has witnesses and then it doesn't.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "launch" || cmd == "fire") {
        if (user.GetMiscCharacterData("easter_ne_launch") != "found") {
            user.SetMiscCharacterData("easter_ne_launch", "found");
            user.GrantXP(100, "watched the piano launch");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Chris checks the trigger mechanism one last time. He looks at you. He looks at the piano. He looks at the sky over Cicely, that impossible Alaskan sky. He pulls the release.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">The counterweight drops. The arm swings. The piano rises -- slowly at first, impossibly, impossibly -- and then it is airborne, an upright Steinway turning in the Cicely air, its keys catching the light, tumbling in a perfect arc over the birch trees and the KBHR antenna and the rooftops of Main Street. For one moment it is at the apex, briefly and completely itself in the air, freed from every floor it ever stood on. Then it begins to come down, and the sound when it lands in the field beyond is the sound of every note at once, which is the sound of music and the sound of its opposite and neither is wrong. Chris stands in the field with his arms at his sides, not speaking.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">After a long time, he says: 'That's what I was after.'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+100 XP -- witnessed the launch)</ansi>");
            SendRoomMessage(room.RoomId(), "A piano rises from behind the station, arcs over Cicely in a long impossible parabola, and lands in a distant field with a sound that is all notes at once.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The catapult is ready. The piano waits. Chris is not ready to launch again yet -- some things should only happen once per day. He is looking at the sky and thinking about the next project.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Easter egg: finding the catapult (200 XP)
    if (user.GetMiscCharacterData("easter_ne_catapult") != "found") {
        user.SetMiscCharacterData("easter_ne_catapult", "found");
        user.GrantXP(200, "discovered the catapult");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step through the back door of the station and find yourself in a field with a trebuchet. A genuine trebuchet. And a piano. Chris Stevens stands beside it. He does not seem surprised to see you. He says: 'I'm going to launch a piano into the air above Cicely.' He says it the way you would say any obviously necessary thing. You realize you have entered, without planning to, the most important moment in the artistic history of this town.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- discovered the catapult)</ansi>");
    }

    return true;
}
