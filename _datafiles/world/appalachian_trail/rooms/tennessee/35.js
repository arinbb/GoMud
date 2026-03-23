// Hot Springs, NC Area - Mile 274, Elev 1326'
// Data sourced from ATC publications and USFS

var TRAIL_DATA = {
    mile: 274,
    elevation: 1326,
    state: "North Carolina / Tennessee",
    section: "Tennessee",
    waterSource: "French Broad River (not for drinking), town water spigot at outfitter",
    shelter: "Groundhog Creek Shelter (side trail), Roaring Fork Shelter (side trail), Deer Park Mountain Shelter (side trail)",
    nearestTown: "Hot Springs, NC (on trail)",
    terrain: "Trail passes through town. French Broad River crossing. Low elevation river valley.",
    cellService: "Good - in town",
    ahead: "Max Patch (14mi), Spring Mountain Shelter",
    behind: "Davenport Gap / Great Smoky Mountains NP boundary"
};

function onEnter(user, room) {
    var lastRoom = user.GetTempData("lastRoomId");
    if (lastRoom == "65") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You descend from the high Smokies through Davenport Gap, leaving the national park behind. The mountains soften as you drop into the French Broad River valley. After days in the backcountry, the sight of a road\x97and a town\x97feels almost surreal.</ansi>");
        SendUserMessage(user.UserId(), "");
    }
    return false;
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain dimples the surface of the French Broad. Steam still rises from the hot springs.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">River fog fills the valley, softening the town into a dream.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunshine warms the little town. A perfect day for soaking in the springs.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The town is quiet after dark. Steam from the springs ghosts along the riverbank.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "soak" || cmd == "swim" || cmd == "bathe") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You ease into one of the stone-lined soaking pools along the French Broad. The mineral-rich water is hot\x97almost too hot\x97and your trail-weary muscles unknot one by one. The Cherokee soaked here. Soldiers soaked here. Now you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " soaks in the natural hot springs, sighing contentedly.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "resupply" || cmd == "shop" || cmd == "buy") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The outfitter in town has everything a hiker needs\x97fuel canisters, freeze-dried meals, replacement gear, and cold drinks. The post office holds resupply boxes.</ansi>");
        return true;
    }
    return false;
}
