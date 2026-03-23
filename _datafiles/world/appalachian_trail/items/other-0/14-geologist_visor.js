// Geologist Visor - toggles geological information overlay

function onCommand_use(user, item, room) {
    var key = "visor_geology";
    var current = user.GetMiscCharacterData(key);
    if (current == "on") {
        user.SetMiscCharacterData(key, "off");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Geologist Visor deactivated.</ansi> <ansi fg=\"8\">Geology overlay disabled.</ansi>");
    } else {
        user.SetMiscCharacterData(key, "on");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Geologist Visor activated.</ansi> <ansi fg=\"brown\">Geological annotations now visible. Rock formations, tectonic history, minerals, and erosion patterns will appear as you travel.</ansi>");
    }
    return true;
}
