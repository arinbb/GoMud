// Tray Mountain Shelter - Mile 58.4, Elev 4200'
// One of the higher shelters in Georgia, good views
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 58.4,
    elevation: 4200,
    state: "Georgia",
    section: "Georgia",
    waterSource: "Spring downhill from shelter - steep descent, reliable",
    shelter: "Tray Mountain Shelter - sleeps 12, privy, bear box, good views",
    nearestTown: "Hiawassee, GA (14mi)",
    terrain: "High elevation slope. Wind-stunted oaks. Mountain laurel. Exposed.",
    cellService: "Intermittent - occasional signal at elevation",
    ahead: "Deep Gap Shelter (7.4mi)",
    behind: "Blue Mountain Shelter (8.1mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind lash Tray Mountain. The clouds are at eye level.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies at 4,200 feet. The views stretch for miles across the Blue Ridge.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Wind howls across the exposed mountain in the darkness. Stars blaze overhead.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Sunset from Tray Mountain is the best thing I have seen on trail. Period. - Vista\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Wind blew my cook pot off the rock. Ate cold ramen. Fine. Everything is fine. - Windblown\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Clouds rolled in at eye level. Felt like standing in the sky. - Cloud Walker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring is steep but worth it. Carry extra water up if you can.\"</ansi>");
        return true;
    }
    // SLEEP
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You hunker down on the platform as wind buffets the shelter. The tin roof creaks and pops. Through the open front, you can see stars wheeling between wind-bent branches. Sleep comes in waves, interrupted by gusts, but each rest is deep.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    // FILTER
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You scramble down to the spring and filter water. Ice cold at 4,200 feet.</ansi>");
        return true;
    }
    return false;
}
