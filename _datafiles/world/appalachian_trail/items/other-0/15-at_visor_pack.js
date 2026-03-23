// AT Visor Pack - master controller for all 5 visor overlays
// Commands: use pack, visor, visor all, visor none, visor history/plants/animals/trail/geology

var VISORS = [
    {key: "visor_history", name: "Heritage", color: "yellow", label: "history"},
    {key: "visor_plants", name: "Botanist", color: "green", label: "plants"},
    {key: "visor_animals", name: "Naturalist", color: "blue", label: "animals"},
    {key: "visor_trail", name: "Trail Guide", color: "white", label: "trail"},
    {key: "visor_geology", name: "Geologist", color: "red", label: "geology"}
];

function onCommand_use(user, item, room) {
    showStatus(user);
    return true;
}

function onCommand(cmd, rest, user, item, room) {
    if (cmd != "visor" && cmd != "visors") {
        return false;
    }

    var arg = rest.toLowerCase().trim();

    // visor (no args) - show status
    if (arg == "" || arg == "status") {
        showStatus(user);
        return true;
    }

    // visor all - enable all
    if (arg == "all" || arg == "on") {
        for (var i = 0; i < VISORS.length; i++) {
            user.SetMiscCharacterData(VISORS[i].key, "on");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">All visors activated.</ansi> <ansi fg=\"14\">Full interpretive overlay enabled — history, plants, animals, trail data, and geology will appear as you travel.</ansi>");
        return true;
    }

    // visor none / off - disable all
    if (arg == "none" || arg == "off") {
        for (var i = 0; i < VISORS.length; i++) {
            user.SetMiscCharacterData(VISORS[i].key, "off");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">All visors deactivated. Overlays disabled.</ansi>");
        return true;
    }

    // visor <specific> - toggle one
    for (var i = 0; i < VISORS.length; i++) {
        if (arg == VISORS[i].label || arg == VISORS[i].name.toLowerCase()) {
            var current = user.GetMiscCharacterData(VISORS[i].key);
            if (current == "on") {
                user.SetMiscCharacterData(VISORS[i].key, "off");
                SendUserMessage(user.UserId(), "<ansi fg=\"" + VISORS[i].color + "\">" + VISORS[i].name + " Visor deactivated.</ansi>");
            } else {
                user.SetMiscCharacterData(VISORS[i].key, "on");
                SendUserMessage(user.UserId(), "<ansi fg=\"" + VISORS[i].color + "\">" + VISORS[i].name + " Visor activated.</ansi>");
            }
            return true;
        }
    }

    // Unrecognized argument
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">Usage: visor [all|none|history|plants|animals|trail|geology]</ansi>");
    return true;
}

function showStatus(user) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">--- AT Visor Pack ---</ansi>");
    for (var i = 0; i < VISORS.length; i++) {
        var state = user.GetMiscCharacterData(VISORS[i].key);
        var status = (state == "on") ? "<ansi fg=\"10\">ON</ansi>" : "<ansi fg=\"8\">OFF</ansi>";
        SendUserMessage(user.UserId(), "  <ansi fg=\"" + VISORS[i].color + "\">" + VISORS[i].name + " Visor</ansi> [" + VISORS[i].label + "]: " + status);
    }
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">Commands: visor all | visor none | visor [type]</ansi>");
    SendUserMessage(user.UserId(), "");
}
