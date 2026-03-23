// Roaring Fork Shelter - Mile 260, Elev 3480'
// TODO_RESEARCH: Verify exact mile marker and elevation

var TRAIL_DATA = {
    mile: 260,
    elevation: 3480,
    state: "North Carolina",
    section: "Tennessee",
    waterSource: "Roaring Fork - reliable, filter required",
    shelter: "Roaring Fork Shelter - sleeps 6, privy, bear box",
    nearestTown: "Hot Springs, NC (14mi N)",
    terrain: "Steep slope above creek. Limited tent sites. Hardwood forest.",
    cellService: "None",
    ahead: "Hot Springs, NC (14mi)",
    behind: "Groundhog Creek Shelter (10mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain hammers the tin roof. Roaring Fork is really roaring now.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Light filters down through the canopy. The creek sparkles below.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Darkness fills the hollow. The creek is a constant rush in the blackness.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Roof leaks on the left side. Sleep right. Trust me. - Drip Drop\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"The roaring is real. Bring earplugs or embrace it. - Light Sleeper\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Found the biggest salamander I have ever seen near the creek. Orange as a traffic cone.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Hot Springs is so close I can almost smell the pizza. - Pilgrim\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You claim a spot on the platform, mindful of the known leak zones. The roar of the creek fills your ears as you drift off.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from Roaring Fork. Fast-flowing and cold.</ansi>");
        return true;
    }
    return false;
}
