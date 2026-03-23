// Jerry Cabin Shelter - Mile 300, Elev 4150'
// TODO_RESEARCH: Verify exact mile marker, elevation, and cabin history

var TRAIL_DATA = {
    mile: 300,
    elevation: 4150,
    state: "North Carolina / Tennessee",
    section: "Tennessee",
    waterSource: "Piped spring - reliable year-round",
    shelter: "Jerry Cabin Shelter - enclosed log cabin with loft, sleeps 6, privy, bear box",
    nearestTown: "Erwin, TN (30mi N)",
    terrain: "Grassy clearing at edge of spruce grove. Good tent sites. Remote.",
    cellService: "None",
    ahead: "Erwin, TN (30mi), Flint Mountain Shelter",
    behind: "Max Patch (12mi), Little Laurel Shelter"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain drums on the cabin roof. At least you have four walls and a door.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight warms the grassy clearing around the cabin.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The cabin is dark inside. Stars fill the clearing above.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
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
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"A real cabin with a real door. Luxury. The mice still get in though. - Grateful\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Loft is cozy. Watch your head on the rafters. Ask me how I know. - Bump\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Sunset from the clearing was incredible. Stayed an extra hour just watching. - Golden Hour\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"300 miles down. 1890 to go. Starting to feel like a real thru-hiker. - Mile Marker\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You climb the rough ladder into the loft and spread out your sleeping bag on the old wood. The cabin walls creak in the wind. It feels like sleeping in a piece of trail history.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs into the loft for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the piped spring. Cold and clean.</ansi>");
        return true;
    }
    return false;
}
