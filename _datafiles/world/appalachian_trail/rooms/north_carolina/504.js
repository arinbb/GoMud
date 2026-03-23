// Wesser Bald Shelter - Mile 131.2, Elev 4115'
// Fire tower on summit, steep descent to NOC ahead

var TRAIL_DATA = {
    mile: 131.2,
    elevation: 4115,
    state: "North Carolina",
    section: "Nantahala National Forest",
    waterSource: "Spring 60 yards downhill - reliable, slow flow",
    shelter: "Wesser Bald Shelter - sleeps 12, privy, bear box. Fire tower on summit.",
    nearestTown: "Bryson City, NC (24mi), Wesser/NOC (6mi north)",
    terrain: "Ridgeline near bald summit. Mountain laurel and oak. Fire tower accessible.",
    cellService: "Intermittent on bald summit from fire tower",
    ahead: "NOC/Wesser (6.1mi), Sassafras Gap Shelter (12.8mi)",
    behind: "Wayah Shelter (10.6mi), Siler Bald Shelter (17.9mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain hammers the ridgeline. The fire tower above creaks and sways in the wind.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear views from the ridgetop. The Nantahala Gorge is a dark shadow to the east.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The ridgeline is exposed to the wind. The fire tower is a dark silhouette against the stars.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Climbed the fire tower at sunset. Could see forever. Worth every rung of that sketchy ladder. - Heights\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"My knees are not ready for the descent to NOC. They are filing a formal complaint. - Kneecap\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Made it up from Wesser. 3000 feet of climb. I have ascended. My calves have not. - Vertical\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Watched a storm roll through the gorge from the fire tower. Lightning hitting the ridgelines. Went back down fast. - Sparky\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You claim a spot on the platform and listen to the wind moving along the ridgeline. The fire tower creaks above. Mountain laurel rustles around the clearing. At this elevation, the night air has a bite to it even in summer. Sleep comes with the wind and the faint metallic song of the tower.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the spring. Cool and clean, though the flow is slow enough to require patience.</ansi>");
        return true;
    }
    return false;
}
