// Siler Bald Shelter - Mile 113.3, Elev 4600'

var TRAIL_DATA = {
    mile: 113.3,
    elevation: 4600,
    state: "North Carolina",
    section: "Nantahala National Forest",
    waterSource: "Piped spring 100 yards downhill - reliable year-round",
    shelter: "Siler Bald Shelter - sleeps 12, privy, bear box. Rebuilt 2004.",
    nearestTown: "Franklin, NC (12mi from Winding Stair Gap)",
    terrain: "Just below grassy bald summit. Open views. Northern hardwoods.",
    cellService: "Intermittent on bald summit, none at shelter",
    ahead: "Wayah Shelter (7.3mi), Wayah Bald (8mi)",
    behind: "Carter Gap Shelter (19.6mi), Standing Indian Shelter (27.2mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain sweeps across the exposed bald above. The shelter roof drums steadily.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight pours over the bald summit above. The shelter sits in warm, filtered light.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The sky above the bald is full of stars, visible through the canopy gaps near the shelter.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Watched the sunset from the bald. The ridgelines went from green to blue to black. I sat there until the stars came. This is the trail at its best. - Horizon\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"The bald is shrinking. Trees are taking it back. Come see it while you can. - Treeline\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Franklin tomorrow. Resupply. Shower. Laundry. The holy trinity. - Stinky\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Met a section hiker who has been coming here for 30 years. She says the bald was twice as big when she started. - Witness\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You settle onto the platform in the newer shelter. The wood still smells faintly of cedar. Through the open front, you can see a patch of the bald's grassy summit and the sky above it. The spring murmurs downhill. The open sky makes the stars feel close enough to touch. Sleep comes on a gentle wind from the bald.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the piped spring. Ice cold and clean, with a slight sweetness.</ansi>");
        return true;
    }
    return false;
}
