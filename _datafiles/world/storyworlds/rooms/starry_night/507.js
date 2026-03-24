
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You lean close to the water and the reflections rise to meet you. The stars in the river expand, filling your vision with swirling light. When it clears, you stand in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leans toward the water and is pulled into the reflections, vanishing in a swirl of starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You kneel at the bank and touch the surface of the river. Your fingers sink into paint -- cool, fluid, the blues and greens swirling slightly around your hand. The reflections of the stars distort around your fingers, elongating and spiraling. You have entered the painting in the most literal sense. The water is paint and the paint is water. There is no difference here.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels and puts a hand into the painted river, watching the reflections distort.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("star") >= 0 || rest.indexOf("sky") >= 0 || rest.indexOf("reflect") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">The reflected stars in the water are a second sky -- distorted, pulled by the current into long ribbons of light. Up above: perfect spiraling orbs. Below: their echoes, transformed by motion, by depth, by the dark water between them and you. Two versions of the same light. You are standing between them.</ansi>");
        if (user.GetMiscCharacterData("starry_reflection") != "found") {
            user.SetMiscCharacterData("starry_reflection", "found");
            user.GrantXP(150, "finding the double sky");
        }
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The river makes no distinct sound -- it is a painted river, after all -- but its motion has a quality that resembles sound. A soft, continuous passing. The willows trail their branches and the sound they make is like very quiet breathing, regular and unconcerned. You stand at the bank and absorb it and feel, for a moment, that the world does not require your participation to continue.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a reflection -- a long ribbon of moonlight in the current, white shading to gold. The river catches it and carries it downstream. Your addition flows away, becomes part of the painting's movement, inseparable from what was already there. This is what it feels like to contribute something that matters more than the contribution.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " paints a streak of moonlight into the river, watching it flow downstream.", user.UserId());
        return true;
    }

    return false;
}
