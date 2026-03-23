// Heritage Visor - toggles historical information overlay
// Part of the AT Visor System: history, plants, animals, trail, geology

function onCommand_use(user, item, room) {
    var key = "visor_history";
    var current = user.GetMiscCharacterData(key);
    if (current == "on") {
        user.SetMiscCharacterData(key, "off");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Heritage Visor deactivated.</ansi> <ansi fg=\"8\">Historical overlay disabled.</ansi>");
    } else {
        user.SetMiscCharacterData(key, "on");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Heritage Visor activated.</ansi> <ansi fg=\"214\">Historical annotations now visible. Cherokee place names, settlement history, and trail heritage will appear as you travel.</ansi>");
    }
    return true;
}
