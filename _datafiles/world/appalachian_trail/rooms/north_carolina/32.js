// Nantahala Outdoor Center / Wesser - Mile 137.3, Elev 1723'
// Trail of Tears crossing, major resupply point

var TRAIL_DATA = {
    mile: 137.3,
    elevation: 1723,
    state: "North Carolina",
    section: "Nantahala Gorge",
    waterSource: "Nantahala River (must filter), NOC has treated water",
    shelter: "Wayah Shelter (side trail, south), Wesser Bald Shelter (side trail, north)",
    nearestTown: "Bryson City, NC (18mi), Wesser is a trail stop at NOC",
    terrain: "Steep descent into Nantahala Gorge. River crossing at NOC. Brutal climb north out of gorge.",
    cellService: "Available at NOC",
    ahead: "Wesser Bald (6mi), Cheoah Bald (18mi), Fontana Dam (30mi)",
    behind: "Wayah Bald (15mi), Franklin (30mi)"
};

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
        var time = UtilGetTime();
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain pounds the gorge, the river rising fast. The rapids grow louder and more violent.</ansi>"); }
        else if (isDay && time.Hour24 >= 11 && time.Hour24 <= 13) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The noonday sun reaches the gorge floor, flooding the river with golden light. This is what Nantahala means.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gorge walls block the sun. Even in daylight, the river flows through deep shadow.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gorge is utterly dark at night. The river is invisible but deafening.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    return false;
}
