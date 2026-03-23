// Fontana Dam - Mile 166.3, Elev 1775'
// Tallest dam east of Rockies, gateway to the Smokies

var TRAIL_DATA = {
    mile: 166.3,
    elevation: 1775,
    state: "North Carolina",
    section: "Fontana Dam",
    waterSource: "Fontana Hilton shelter has treated water, restrooms at visitor center",
    shelter: "Fontana Hilton (0.2mi) - sleeps 24, flush toilets, hot showers, picnic tables",
    nearestTown: "Fontana Village, NC (2mi), Robbinsville, NC (22mi)",
    terrain: "Flat crossing on dam road. Last flat ground before Smokies.",
    cellService: "Available at dam and visitor center",
    ahead: "Great Smoky Mountains NP entrance (0.5mi), Clingmans Dome (40mi)",
    behind: "Cheoah Bald (16mi), NOC (30mi)"
};

function onEnter(user, room) {
    var key = "fontana_dam_xp";
    if (user.GetMiscCharacterData(key) != "granted") {
        user.SetMiscCharacterData(key, "granted");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The massive wall of Fontana Dam rises before you,</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">480 feet of concrete holding back an entire lake.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Beyond it, the Great Smoky Mountains wait.</ansi>");
        SendUserMessage(user.UserId(), "");
        user.GrantXP(50, "reaching Fontana Dam");
    }
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "mileage" || cmd == "mile" || cmd == "miles") {
        var toKatahdin = 2190.0 - TRAIL_DATA.mile;
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Position ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Mile " + TRAIL_DATA.mile + " | Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">From Springer: " + TRAIL_DATA.mile + " mi | To Katahdin: " + toKatahdin.toFixed(1) + " mi</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">State: " + TRAIL_DATA.state + " | Section: " + TRAIL_DATA.section + "</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    if (cmd == "guide" || cmd == "info" || cmd == "trailinfo") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Guide ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Terrain: " + TRAIL_DATA.terrain + "</ansi>");
        if (TRAIL_DATA.waterSource) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Water: " + TRAIL_DATA.waterSource + "</ansi>"); }
        if (TRAIL_DATA.shelter) { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Shelter: " + TRAIL_DATA.shelter + "</ansi>"); }
        if (TRAIL_DATA.nearestTown) { SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Town: " + TRAIL_DATA.nearestTown + "</ansi>"); }
        if (TRAIL_DATA.cellService) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cell: " + TRAIL_DATA.cellService + "</ansi>"); }
        SendUserMessage(user.UserId(), "");
        return true;
    }
    if (cmd == "ahead") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>"); return true; }
    if (cmd == "behind") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>"); return true; }
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain drums on the concrete dam. Fontana Lake is gray and choppy. The Smokies are hidden behind curtains of rain.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Fog rises from the lake, filling the valley. The dam disappears into the mist at both ends.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sun glints off Fontana Lake. The Smokies are clearly visible to the north, massive and blue-hazed.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The dam is lit by scattered security lights. Fontana Lake is a black void. The Smokies are darker shapes against the dark sky.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    return false;
}
