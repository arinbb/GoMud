// NC Border / Standing Indian Area - Mile 78.3, Elev 3500'
// First room in North Carolina

var TRAIL_DATA = {
    mile: 78.3,
    elevation: 3500,
    state: "North Carolina",
    section: "Nantahala National Forest",
    waterSource: "Seasonal springs in gaps, creek near Standing Indian Shelter",
    shelter: "Standing Indian Shelter (side trail, 0.3mi)",
    nearestTown: "Franklin, NC (18mi)",
    terrain: "Rugged Nantahala range. Dense hardwood and rhododendron. Steep ascents to ridgeline.",
    cellService: "None",
    ahead: "Standing Indian Mtn summit (8mi), Franklin/Winding Stair Gap (18mi), Wayah Bald (30mi)",
    behind: "Bly Gap (8mi), Tray Mountain (22mi), Springer Mountain (78mi)"
};

function onEnter(user, room) {
    var key = "nc_border_xp";
    if (user.GetMiscCharacterData(key) != "granted") {
        user.SetMiscCharacterData(key, "granted");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===============================================</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">You cross the state line into North Carolina.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">One state down. Thirteen to go.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">The mountains grow taller here. The forest grows</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">deeper. You are entering the Nantahala \x97</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">the Land of the Noonday Sun.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===============================================</ansi>");
        SendUserMessage(user.UserId(), "");
        user.GrantXP(100, "crossing into North Carolina");
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls steadily through the Nantahala canopy, every leaf dripping.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Fog fills the hollows between ridges. Standing Indian Mountain has vanished into the clouds.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight barely penetrates the dense Nantahala canopy. Even at midday, the forest floor is dim.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Nantahala forest is profoundly dark at night. Barred owls call from every direction.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    return false;
}
