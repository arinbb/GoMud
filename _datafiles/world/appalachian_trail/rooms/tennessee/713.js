// Roan High Knob Shelter - Mile 379.3, Elev 6275'
// HIGHEST SHELTER ON THE APPALACHIAN TRAIL
// Former CCC fire warden cabin, built 1933

var TRAIL_DATA = {
    mile: 379.3,
    elevation: 6275,
    state: "North Carolina / Tennessee",
    section: "Tennessee",
    waterSource: "Piped spring - 100 yards downhill, reliable and ice-cold",
    shelter: "Roan High Knob Shelter - HIGHEST ON AT (6,275'). Enclosed CCC cabin (1933). Sleeps 15. Door, windows, bunks.",
    nearestTown: "Roan Mountain, TN (8mi by road from Carvers Gap)",
    terrain: "Dense balsam fir forest near summit of Roan High Knob. Cloud-level elevation. Exposed.",
    cellService: "None",
    ahead: "Mountaineer Falls Shelter (21mi), Watauga Lake",
    behind: "Clyde Smith Shelter (6mi)"
};

function onCommand(cmd, rest, user, room) {
    if (cmd == "mileage" || cmd == "mile" || cmd == "miles") {
        var toKatahdin = 2190.0 - TRAIL_DATA.mile;
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Position ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Mile " + TRAIL_DATA.mile + " | Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">*** HIGHEST SHELTER ON THE APPALACHIAN TRAIL ***</ansi>");
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind batter the cabin. The heavy door holds. Inside, it is cold but dry. At 6,275 feet, storms are serious business.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The cabin is inside a cloud. Visibility is zero. Moisture beads on every surface.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Pale sunlight filters through the balsam fir. The air is thin and cool at 6,275 feet.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The cabin is dark and cold at this elevation. Wind shakes the old logs. The door creaks on its iron hinges.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft - highest shelter on the AT</ansi>");
        return true;
    }
    if (cmd == "history") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Roan High Knob Shelter History ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">This cabin was built in 1933 by the Civilian Conservation Corps as a fire warden's station. The fire warden who manned this post would watch for smoke from the summit, relaying fire reports by telephone line to the ranger station below.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">At 6,275 feet, it is the highest shelter on the Appalachian Trail\x97higher than anything between the Smokies and New Hampshire's White Mountains. The cabin was converted to a hiker shelter and has served thru-hikers since the AT was completed through this section.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The CCC built it to last. Hand-hewn logs, tight-fitting joints, a proper door and windows. Ninety years later, the cabin still stands, still shelters hikers, still smells of balsam fir and mountain wind.</ansi>");
        SendUserMessage(user.UserId(), "");
        // Easter egg XP for learning the history
        var histKey = "roan_history_" + user.UserId();
        if (user.GetMiscCharacterData(histKey) != "learned") {
            user.SetMiscCharacterData(histKey, "learned");
            user.GrantXP(25, "learning the history of the highest AT shelter");
        }
        return true;
    }
    if (cmd == "sign" || cmd == "register") {
        var key = "register_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(key) != "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>");
        } else {
            var name = user.GetCharacterName(false);
            room.SetPermData(key, name);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register at the highest shelter on the Appalachian Trail: \"" + name + " was here. 6,275 feet.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the register at the highest shelter on the AT.", user.UserId());
            user.GrantXP(25, "signing the register at the highest AT shelter");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register: Roan High Knob ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">*** Highest Shelter on the Appalachian Trail - 6,275 ft ***</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Sleeping in a cloud. Literally. The cabin was inside a cloud all night. Woke up wet from condensation but grinning. - Cloud Walker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Highest shelter on the AT. Smells like Christmas. The CCC knew how to build. This cabin will outlive us all. - Historian\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Found a carving from 1952 on the bunk frame. Someone was here 70 years ago, looking at the same walls. Humbling. - Time Traveler\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Door. Windows. Four walls. A DOOR. After months of three-sided shelters, this is the Ritz-Carlton. - Luxury Hiker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Wind was so strong last night the cabin shook. But it held. Thank you, CCC boys of 1933. - Grateful\"</ansi>");
        return true;
    }
    if (cmd == "read" && rest.indexOf("carving") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You trace your fingers over the old carvings in the bunk frames. Names and dates scratched with pocket knives: \"JW 1947\", \"NOBO 1952\", \"PCT-AT-CDT 1978\", \"SOBO THRU 1986\". Decades of hikers, all sheltered by these same walls.</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You claim a bunk in the highest shelter on the Appalachian Trail. The heavy door is latched against the wind. The cabin smells of balsam fir and old wood\x97like Christmas in a museum. Cloud presses against the wavy glass windows. The CCC built this cabin in 1933, and tonight, ninety years later, it shelters you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " claims a bunk in the historic CCC cabin.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the piped spring below the cabin. At 6,275 feet, it may be the coldest water on the AT.</ansi>");
        return true;
    }
    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Balsam fir. The cabin is saturated with the scent\x97sharp, clean, resinous. Like walking into a Christmas tree lot, but real. The logs themselves have absorbed ninety years of mountain air and fir resin.</ansi>");
        return true;
    }
    return false;
}
