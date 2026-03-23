// Vandeventer Shelter - Mile 438, Elev 3600'
// TODO_RESEARCH: Verify exact mile marker and elevation

var TRAIL_DATA = {
    mile: 438,
    elevation: 3600,
    state: "Tennessee",
    section: "Tennessee",
    waterSource: "Spring - 300 yards downhill, can slow in dry weather",
    shelter: "Vandeventer Shelter - sleeps 8, privy, bear box, incredible sunset views",
    nearestTown: "Hampton, TN (10mi by road)",
    terrain: "Rocky overlook on Iron Mountain. Exposed. West-facing sunset views.",
    cellService: "Weak/intermittent on overlook",
    ahead: "Iron Mountain Shelter (8mi), Damascus approaching",
    behind: "Watauga Lake Shelter (12mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Wind-driven rain lashes the exposed overlook. No sunset tonight.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies over the overlook. The western view stretches forever.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars blaze above the overlook. The western ridges are dark silhouettes.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "sign" || cmd == "register") {
        var key = "register_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(key) != "") { SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>"); }
        else { var name = user.GetCharacterName(false); room.SetPermData(key, name); SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " was here.\"</ansi>"); SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId()); user.GrantXP(15, "signing a shelter register"); }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Best sunset on the AT. I will die on this hill (pun intended). - Golden Hour\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Wind almost blew my stove off the rock. Cook inside or not at all. - Windy\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Damascus is close. Virginia is close. I can feel it. - State Line\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You claim a spot on the platform. The wind buffets the shelter but the sunset makes up for everything. You watch the light die over the Cherokee National Forest before pulling your bag tight.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for a windy night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the spring. The climb back up is a workout.</ansi>"); return true; }
    return false;
}
