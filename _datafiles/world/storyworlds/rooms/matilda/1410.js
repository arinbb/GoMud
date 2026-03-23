
// Matilda - Assembly Hall (Easter Egg: chocolate cake solidarity)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The assembly hall dissolves around you — the benches, the stage, the smell of chocolate all fading like a half-remembered school day. The Grand Library takes its place, warm and permanent and safe.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the assembly hall like a memory of a braver time.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && rest.indexOf("cake") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You lift the silver dome from the platter. Beneath it sits an enormous chocolate cake — eighteen inches across, six inches high, glistening with thick chocolate icing. You take a bite. It is rich, dense, almost overwhelming. Another bite. And another. The children on the benches begin to chant — quietly at first, then louder. EAT! EAT! EAT! You keep eating. Your stomach protests but you do not stop. Every bite is an act of defiance. Every mouthful says: you cannot break us.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lifts the dome from the platter and begins eating the enormous chocolate cake! The children begin to chant: EAT! EAT! EAT!", user.UserId());

        if (user.GetMiscCharacterData("matilda_cake_scene") != "found") {
            user.SetMiscCharacterData("matilda_cake_scene", "found");
            user.GrantXP(200, "the chocolate cake solidarity");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The cake is finished. The platter is clean. The children erupt in cheers. (+200 XP)</ansi>");
        }

        if (user.HasQuest(100)) {
            user.GiveQuest(100);
        }

        return true;
    }

    if (cmd == "help" && rest.indexOf("bruce") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You step forward and join Bruce at the table. Together, you face the enormous chocolate cake. The children begin to chant — EAT! EAT! EAT! — and Bruce, emboldened by your solidarity, attacks the cake with renewed determination. Slice by slice, the impossible mountain of chocolate shrinks. When the last crumb is gone, the hall erupts in thunderous applause.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps up to help Bruce Bogtrotter with the chocolate cake! The children cheer wildly!", user.UserId());

        if (user.GetMiscCharacterData("matilda_cake_scene") != "found") {
            user.SetMiscCharacterData("matilda_cake_scene", "found");
            user.GrantXP(200, "the chocolate cake solidarity");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Together, you defeated the cake. Together, you defeated the Trunchbull. (+200 XP)</ansi>");
        }

        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(100)) {
        user.GiveQuest(100);
    }
    return false;
}
