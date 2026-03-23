// Double Springs Shelter - Mile 460, Elev 3200'
// TODO_RESEARCH: Verify exact mile marker and elevation
// Last shelter before Damascus, VA

var TRAIL_DATA = {
    mile: 460,
    elevation: 3200,
    state: "Tennessee / Virginia border",
    section: "Tennessee",
    waterSource: "Double springs - both reliable, 50 yards from shelter",
    shelter: "Double Springs Shelter - sleeps 8, privy, bear box, LAST BEFORE DAMASCUS",
    nearestTown: "Damascus, VA (10mi N) - Trail Town, USA!",
    terrain: "Rolling descent along Iron Mountain toward Damascus. Mixed hardwoods. Easy terrain.",
    cellService: "Weak/intermittent",
    ahead: "Damascus, VA (10mi) - Trail Town, USA!",
    behind: "Iron Mountain Shelter (10mi)"
};

function onCommand(cmd, rest, user, room) {
    if (cmd == "mileage" || cmd == "mile" || cmd == "miles") {
        var toKatahdin = 2190.0 - TRAIL_DATA.mile;
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Position ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Mile " + TRAIL_DATA.mile + " | Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">From Springer: " + TRAIL_DATA.mile + " mi | To Katahdin: " + toKatahdin.toFixed(1) + " mi</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">State: " + TRAIL_DATA.state + " | Section: " + TRAIL_DATA.section + "</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Damascus, VA - Trail Town, USA - is just 10 miles ahead!</ansi>");
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls on the ridge. Damascus will be there rain or shine.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A fine day on the ridge. Perfect weather for walking into Damascus tomorrow.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Last night before Damascus. Hard to sleep with the anticipation.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "sign" || cmd == "register") {
        var key = "register_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(key) != "") { SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>"); }
        else { var name = user.GetCharacterName(false); room.SetPermData(key, name); SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Damascus tomorrow!\"</ansi>"); SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId()); user.GrantXP(15, "signing a shelter register"); }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"DAMASCUS TOMORROW!!! Pizza. Beer. Shower. Laundry. In that order. Probably. - Excited\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Last shelter before Trail Town USA. 460 miles from Springer. Virginia is calling. - Almost There\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Double springs = double the water. No rationing tonight. Luxury. - Hydro\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"If you are reading this, you are so close to Damascus. Keep walking. It is worth it. - Been There\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Tennessee has been wild. Roan Highlands, Laurel Fork, Watauga Lake. What a state. Now... VIRGINIA! - State Counter\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You try to sleep but the anticipation of Damascus keeps you awake. Tomorrow you walk into Trail Town, USA. Both springs murmur their steady song. Eventually, excitement gives way to exhaustion, and sleep comes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the last night before Damascus.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from one of the double springs. Might as well top off everything\x97Damascus has running water.</ansi>"); return true; }
    return false;
}
