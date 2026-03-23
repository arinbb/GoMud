// Whitley Gap Shelter - Mile 38.0, Elev 3370'
// 1.2 miles off AT via blue-blazed side trail
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 38.0,
    elevation: 3370,
    state: "Georgia",
    section: "Georgia",
    waterSource: "Dependable spring at midpoint of side trail to shelter",
    shelter: "Whitley Gap Shelter - 1.2mi off AT, privy, bear box, dependable spring",
    nearestTown: "Blairsville, GA (12mi)",
    terrain: "Mountain gap. Quiet and remote. 1.2mi side trail off AT.",
    cellService: "None",
    ahead: "Low Gap Shelter (5.0mi from AT junction)",
    behind: "Blood Mountain Shelter (9.1mi)"
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Note: Shelter is 1.2mi off the AT via blue-blazed side trail.</ansi>");
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls softly in the remote gap. The spring should be flowing well.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight reaches the gap floor. A peaceful day, far from the trail crowds.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gap is dark and quiet. You are 1.2 miles from the nearest white blaze.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"1.2 miles off trail. Legs said no. Heart said yes. No regrets. - Detour Dan\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Quietest shelter so far. Just me and the woodpeckers. - Solitude\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring at the midpoint is legit. Filled all my bottles. Worth the walk.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Deer walked right through camp at dawn. Barely looked at me. Peace.\"</ansi>");
        return true;
    }
    // SLEEP
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You settle onto the platform in the quiet gap. No other hikers tonight\x97the 1.2-mile side trail kept them away. The forest settles around you, undisturbed and still. Sleep comes easy in the solitude.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    // FILTER
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the dependable spring. Cold and clear, well worth the walk.</ansi>");
        return true;
    }
    return false;
}
