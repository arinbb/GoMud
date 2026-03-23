// Low Gap Shelter - Mile 43.0, Elev 3050'
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 43.0,
    elevation: 3050,
    state: "Georgia",
    section: "Georgia",
    waterSource: "Via side trail east into cove - seep/spring, filter required",
    shelter: "Low Gap Shelter - sleeps 12, privy, bear box",
    nearestTown: "Hiawassee, GA (10mi via Unicoi Gap)",
    terrain: "Low gap between ridges. Good airflow. Hardwood forest.",
    cellService: "None",
    ahead: "Blue Mountain Shelter (7.3mi)",
    behind: "Whitley Gap Shelter (5.0mi)"
};

function onCommand(cmd, rest, user, room) {
    // MILEAGE
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
    // GUIDE
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
    // AHEAD/BEHIND
    if (cmd == "ahead") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>"); return true; }
    if (cmd == "behind") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>"); return true; }
    // WEATHER
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain drips from the canopy and patters on the tin roof.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The gap is bright and breezy. A good day to dry out gear.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gap is dark. Wind channels between the ridges overhead.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    // REGISTER
    if (cmd == "sign" || cmd == "register") {
        var key = "register_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(key) != "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>");
        } else {
            var name = user.GetCharacterName(false);
            room.SetPermData(key, name);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " was here.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    // READ REGISTER
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Low gap, high spirits. 43 miles from Springer. Getting my trail legs. - Cruiser\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Water source is a hike but worth it. Fill up here.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Hawk screaming above the gap at 5am. Nature's alarm clock. Thanks, hawk. - Groggy\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Towhee stole a piece of my granola bar right off the platform. Bold.\"</ansi>");
        return true;
    }
    // SLEEP
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You claim a spot on the platform and stretch out. The gap breeze keeps the shelter cool. Leaves rustle overhead. Another day on the trail done.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    // FILTER
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the seep in the cove. It runs slow but clear.</ansi>");
        return true;
    }
    return false;
}
