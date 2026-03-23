// Max Patch / Spring Mountain Area - Mile 288, Elev 4629'
// Data sourced from ATC publications and USFS

var TRAIL_DATA = {
    mile: 288,
    elevation: 4629,
    state: "North Carolina / Tennessee",
    section: "Tennessee",
    waterSource: "Roaring Fork (unreliable in dry weather), springs near shelters",
    shelter: "Spring Mountain Shelter (side trail), Little Laurel Shelter (side trail), Jerry Cabin Shelter (side trail)",
    nearestTown: "Hot Springs, NC (14mi S)",
    terrain: "Grassy bald summit with 360-degree views. Remote forest descents. Rolling ridgeline.",
    cellService: "Intermittent on summit, none in valleys",
    ahead: "Erwin, TN (22mi), Flint Mountain Shelter",
    behind: "Hot Springs, NC (14mi), Deer Park Mountain Shelter"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain sweeps across the open bald. There is no shelter up here\x97the wind drives the water sideways.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cloud wraps the summit of Max Patch. The famous views are gone, replaced by a gray void.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies over Max Patch. The views stretch forever in every direction.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars blaze above the open bald. Without trees, the sky is enormous.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "camp") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Camping is no longer permitted on Max Patch. The Forest Service closed it to overnight use after years of overuse damaged the fragile bald. Day-use only.</ansi>");
        return true;
    }
    if (cmd == "sit" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit in the grass on the summit of Max Patch and let the wind wash over you. The mountains roll away in every direction, blue and endless. This is why people hike the AT.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in the grass, taking in the view.", user.UserId());
        return true;
    }
    return false;
}
