
// The Fishing Pier - quest step 7 + fishing easter egg
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(190) && !user.GetMiscCharacterData("stardew_q_pier")) {
        user.SetMiscCharacterData("stardew_q_pier", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Willy nods as you walk onto the pier. He hands you a fishing rod without fanfare. 'Hold it like this,' he says. 'And wait. That is mostly what fishing is. Wait and pay attention.'</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ocean sound recedes like a tide. The pier boards go soft underfoot and the Library floor comes back. Willy watches you go without comment, already casting again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets the rod down on the pier rail and dissolves with the morning sea-fog.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "fish" || cmd == "cast" || (cmd == "use" && rest.indexOf("rod") >= 0)) {
        if (user.GetMiscCharacterData("stardew_fishing_ee") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You cast again. The lure hits the water with a satisfying plop. The line pulls taut. You wait. This is what fishing is.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " casts a fishing line with growing confidence.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("stardew_fishing_ee", "found");
        user.GrantXP(200, "first cast at the Pelican Town pier");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Willy hands you the rod and shows you the grip. You cast. The lure arcs out over the green water and lands with a small splash. The float bobs. You watch it. Minutes pass. The float dips -- you jerk the rod -- and a small sardine comes flashing out of the water, silver and thrashing on the hook. 'That's one,' Willy says. 'There's always another one. That's the trick of it.' You understand, in that moment, why people do this for hours and call it relaxing.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for your first catch at Pelican Bay!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " catches their first fish with a triumphant splash, earning a rare approving nod from Willy.", user.UserId());
        return true;
    }

    return false;
}
