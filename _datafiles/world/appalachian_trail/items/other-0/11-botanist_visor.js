// Botanist Visor - toggles plant identification overlay

function onCommand_use(user, item, room) {
    var key = "visor_plants";
    var current = user.GetMiscCharacterData(key);
    if (current == "on") {
        user.SetMiscCharacterData(key, "off");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Botanist Visor deactivated.</ansi> <ansi fg=\"8\">Plant overlay disabled.</ansi>");
    } else {
        user.SetMiscCharacterData(key, "on");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Botanist Visor activated.</ansi> <ansi fg=\"10\">Native flora annotations now visible. Trees, wildflowers, ferns, and fungi will be identified as you travel.</ansi>");
    }
    return true;
}
