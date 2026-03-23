// Blood Mountain Shelter - Mile 28.9, Elev 4450'
// CCC-built 1930s stone shelter - highest point on AT in Georgia
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 28.9,
    elevation: 4450,
    state: "Georgia",
    section: "Georgia",
    waterSource: "NONE at shelter. Nearest: creek at Slaughter Creek trail junction (steep descent)",
    shelter: "Blood Mountain Shelter - CCC stone construction 1930s, sleeps 8, NO water, NO privy",
    nearestTown: "Neels Gap/Mountain Crossings (4mi north), Blairsville GA (15mi)",
    terrain: "Exposed summit. Rocky. Wind-swept. Highest point on AT in Georgia.",
    cellService: "Intermittent - sometimes a bar or two on the summit",
    ahead: "Whitley Gap Shelter (9.1mi)",
    behind: "Woods Hole Shelter (1.2mi)"
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
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Highest point on the AT in Georgia.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    // GUIDE
    if (cmd == "guide" || cmd == "info" || cmd == "trailinfo") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Guide ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Terrain: " + TRAIL_DATA.terrain + "</ansi>");
        if (TRAIL_DATA.waterSource) { SendUserMessage(user.UserId(), "<ansi fg=\"red\">Water: " + TRAIL_DATA.waterSource + "</ansi>"); }
        if (TRAIL_DATA.shelter) { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Shelter: " + TRAIL_DATA.shelter + "</ansi>"); }
        if (TRAIL_DATA.nearestTown) { SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Town: " + TRAIL_DATA.nearestTown + "</ansi>"); }
        if (TRAIL_DATA.cellService) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cell: " + TRAIL_DATA.cellService + "</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">WARNING: No water at this shelter. Carry water up or plan to descend to Slaughter Creek.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    // AHEAD/BEHIND
    if (cmd == "ahead") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>"); return true; }
    if (cmd == "behind") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>"); return true; }
    // WEATHER
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) {
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind lash the exposed summit. The stone walls provide some protection, but water seeps through every crack in the mortar.</ansi>");
        } else if (isDay) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Wind sweeps across the summit at 4,450 feet. The views stretch for miles in every direction. On a clear day like this, you can see into three states.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The wind howls across Blood Mountain in the darkness. The stone shelter is cold and dim. Stars blaze overhead through gaps in the wind-stunted trees.</ansi>");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft - highest on AT in Georgia</ansi>");
        return true;
    }
    // HISTORY - special command for Blood Mountain
    if (cmd == "history") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Blood Mountain History ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">This stone shelter was built by the Civilian Conservation Corps in the 1930s,</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">part of the New Deal program that employed young men during the Great Depression.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">The CCC crews hauled stone up the mountain by hand and mule to build this</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">structure on the highest point of the AT in Georgia at 4,450 feet.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The mountain's name comes from a battle between Cherokee and Creek nations</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">fought on these slopes, said to have been so fierce that the creek below</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">ran red with blood\x97hence Slaughter Creek at the base.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Nearly a century later, the shelter still stands\x97repaired many times,</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">its walls carved with the names of tens of thousands of hikers.</ansi>");
        SendUserMessage(user.UserId(), "");
        user.GrantXP(10, "learning Blood Mountain history");
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"The wind never stops up here. Slept in all my layers and was still cold. - Polar Bear\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"NO WATER. I repeat, NO WATER. Carry it up or suffer. Learn from my mistake. - Dry Throat\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Carved my name next to one from 1952. History. - Summit Seeker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Woke up at 3am to the most incredible stars I have ever seen. Worth the wind. Worth the cold.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Mouse count: 0. Too windy even for the mice. First shelter without them.\"</ansi>");
        return true;
    }
    // CARVE - special command for Blood Mountain
    if (cmd == "carve") {
        var carveKey = "carve_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(carveKey) != "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Your name is already carved into the stone here.</ansi>");
        } else {
            var name = user.GetCharacterName(false);
            room.SetPermData(carveKey, name);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You scratch your name into the soft mortar between stones, joining decades of hikers before you. \"" + name + "\" now sits among names dating back to the 1940s.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " carves their name into the shelter wall.", user.UserId());
            user.GrantXP(25, "carving your name in Blood Mountain Shelter");
        }
        return true;
    }
    // SLEEP
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You lay out your pad on the cold stone platform and crawl into your bag. The wind howls through cracks in the mortar. The blackened ceiling presses low overhead. The stone walls hold the cold. Sleep comes in restless fragments between gusts, but when it comes, it is deep\x97the exhaustion of climbing Georgia's highest peak.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night in the stone shelter.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    // FILTER - warn about no water
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">There is no water source at Blood Mountain Shelter. The nearest water is a steep descent to the creek at Slaughter Creek trail junction. You should have carried water up.</ansi>");
        return true;
    }
    return false;
}
