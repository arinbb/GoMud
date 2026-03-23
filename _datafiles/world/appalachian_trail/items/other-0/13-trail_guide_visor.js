// Trail Guide Visor - toggles AT trail information overlay

function onCommand_use(user, item, room) {
    var key = "visor_trail";
    var current = user.GetMiscCharacterData(key);
    if (current == "on") {
        user.SetMiscCharacterData(key, "off");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Trail Guide Visor deactivated.</ansi> <ansi fg=\"8\">Trail overlay disabled.</ansi>");
    } else {
        user.SetMiscCharacterData(key, "on");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Trail Guide Visor activated.</ansi> <ansi fg=\"15\">AT trail data now visible. Shelter history, water sources, trail club notes, and FarOut waypoints will appear as you travel.</ansi>");
    }
    return true;
}
