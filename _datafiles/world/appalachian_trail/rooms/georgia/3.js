// Stover Creek / Three Forks Area - Mile 3.0, Elev 2900'
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 3.0,
    elevation: 2900,
    state: "Georgia",
    section: "Georgia",
    waterSource: "Stover Creek, Chester Creek, Long Creek - reliable year-round",
    shelter: "Stover Creek Shelter (0.2mi side trail, mile 2.8)",
    nearestTown: "Dahlonega, GA (20mi)",
    terrain: "Descending through hardwoods to creek valley. Rhododendron tunnels. Log bridge crossing.",
    cellService: "None",
    ahead: "Hawk Mountain Shelter (5.1mi), Hawk Mountain summit",
    behind: "Springer Mountain Shelter (1.0mi), Springer summit (2.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls steadily. The creek is running high and fast.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Fog settles into the creek valley, muffling the sound of water.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Dappled sunlight filters through the canopy. A good day on the trail.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The creek murmurs in the darkness. Stars are hidden by the tree canopy.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    return false;
}
