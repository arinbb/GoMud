// Naturalist Visor - toggles wildlife identification overlay

function onCommand_use(user, item, room) {
    var key = "visor_animals";
    var current = user.GetMiscCharacterData(key);
    if (current == "on") {
        user.SetMiscCharacterData(key, "off");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Naturalist Visor deactivated.</ansi> <ansi fg=\"8\">Wildlife overlay disabled.</ansi>");
    } else {
        user.SetMiscCharacterData(key, "on");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Naturalist Visor activated.</ansi> <ansi fg=\"12\">Wildlife annotations now visible. Birds, mammals, reptiles, and amphibians will be identified as you travel.</ansi>");
    }
    return true;
}
