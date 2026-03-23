// No Business Knob Shelter - Mile 344, Elev 4600'
// TODO_RESEARCH: Verify exact mile marker and elevation

var TRAIL_DATA = {
    mile: 344,
    elevation: 4600,
    state: "Tennessee",
    section: "Tennessee",
    waterSource: "Seep spring - unreliable in dry weather, carry water",
    shelter: "No Business Knob Shelter - sleeps 6, privy, bear box, very remote",
    nearestTown: "Erwin, TN (14mi S)",
    terrain: "Remote hollow in dark spruce forest. Dense rhododendron. Unreliable water.",
    cellService: "None",
    ahead: "Roan Highlands (10mi), Curley Maple Gap Shelter",
    behind: "Bald Mountain Shelter (6mi), Erwin, TN"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain drips through the spruce. The hollow fills with mist and the sound of water.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Even in daylight, the spruce forest stays dim. Green filtered light is the best it offers.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The hollow is absolutely dark. The silence is broken only by the occasional drip of the seep spring.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Nonahala. Not Business. The Cherokee knew. This place does not want visitors. - Respectful\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Heard footsteps in the forest at 2am. No one there. Sleep well. - Shaken\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring was dry. Had to hike back to the last stream. Carry water. CARRY WATER. - Parched\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Most remote I have felt on the entire trail. Just me and the moss. - Ghost\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You lie on the damp platform in the dark hollow. The spruce forest is utterly silent. Sleep comes uneasily in this place where people were not meant to go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for an uneasy night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You collect what you can from the seep spring. It is barely enough to fill a bottle.</ansi>");
        return true;
    }
    return false;
}
