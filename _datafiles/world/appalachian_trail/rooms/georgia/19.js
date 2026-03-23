// Plumorchard Gap Shelter - Mile 73.9, Elev 3050'
// Last Georgia shelter before NC border
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 73.9,
    elevation: 3050,
    state: "Georgia",
    section: "Georgia",
    waterSource: "Spring nearby - reliable year-round",
    shelter: "Plumorchard Gap Shelter - last in GA, sleeps 12, privy, bear box",
    nearestTown: "Franklin, NC (18mi north)",
    terrain: "Mountain gap. Thick rhododendron. Lush hardwoods. Near GA/NC border.",
    cellService: "None",
    ahead: "Muskrat Creek Shelter NC (7.3mi) - across the state line",
    behind: "Deep Gap Shelter (8.1mi)"
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
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Last shelter in Georgia. NC border is just ahead.</ansi>");
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
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Last AT shelter in Georgia. NC border ahead.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    // AHEAD/BEHIND
    if (cmd == "ahead") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>"); return true; }
    if (cmd == "behind") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>"); return true; }
    // WEATHER
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain drips through the rhododendron canopy. The spring is flowing strong.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight filters through the lush canopy. The forest feels different here\x97thicker, wetter, hinting at the Smokies ahead.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Spring peepers chorus in the darkness. Your last night in Georgia.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " was here. Last night in Georgia.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    // READ REGISTER
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Last shelter in Georgia! One state down, thirteen to go. - State Counter\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"73.9 miles. My body is wrecked. My spirit is soaring. NC tomorrow. - Broken But Happy\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring peepers sang me to sleep. Best lullaby on trail. - Frogger\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Georgia tried to break me. Georgia failed. See you never. (Just kidding, I love you GA.)\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"If you started at Springer, you have walked almost 74 miles. Be proud. - Trail Dad\"</ansi>");
        return true;
    }
    // SLEEP
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You settle onto the platform for your last night in Georgia. Spring peepers sing in the wet areas around the gap. The rhododendron rustles in the breeze. Tomorrow, North Carolina. You have walked nearly seventy-four miles from Springer Mountain. Sleep comes with a quiet sense of accomplishment.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for their last night in Georgia.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    // FILTER
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the spring. Cold and clean\x97the last Georgia water you will drink on the AT.</ansi>");
        return true;
    }
    return false;
}
