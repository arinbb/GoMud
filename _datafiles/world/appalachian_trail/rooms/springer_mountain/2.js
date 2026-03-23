// Springer Mountain Shelter - Mile 0.2, Elev 3730'
// Built 1993, maintained by Georgia Appalachian Trail Club
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 0.2,
    elevation: 3730,
    lat: 34.6295,
    lon: -84.1927,
    state: "Georgia",
    section: "Springer Mountain",
    waterSource: "Reliable spring 50 yards downhill to east",
    shelter: "Springer Mountain Shelter (built 1993, sleeps 12, privy, bear box)",
    nearestTown: "Amicalola Falls SP, 9.0 mi S via Approach Trail",
    terrain: "Forested slope, hardwoods, sheltered clearing",
    cellService: "Unreliable",
    ahead: "Stover Creek Shelter (2.6 mi N), Three Forks (4.1 mi N), Hawk Mtn Shelter (7.9 mi N)",
    behind: "Springer Mountain Summit (0.2 mi S)"
};

function onCommand(cmd, rest, user, room) {

    // === MILEAGE ===
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

    // === GUIDE / INFO ===
    if (cmd == "guide" || cmd == "info" || cmd == "trailinfo") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Guide ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Terrain: " + TRAIL_DATA.terrain + "</ansi>");
        if (TRAIL_DATA.waterSource) {
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Water: " + TRAIL_DATA.waterSource + "</ansi>");
        }
        if (TRAIL_DATA.shelter) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">Shelter: " + TRAIL_DATA.shelter + "</ansi>");
        }
        if (TRAIL_DATA.nearestTown) {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Town: " + TRAIL_DATA.nearestTown + "</ansi>");
        }
        if (TRAIL_DATA.cellService) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cell: " + TRAIL_DATA.cellService + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    // === AHEAD / BEHIND ===
    if (cmd == "ahead") {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>");
        return true;
    }
    if (cmd == "behind") {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>");
        return true;
    }

    // === WEATHER ===
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) {
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain patters on the shelter roof. At least you're dry in here.</ansi>");
        } else if (isDay) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight filters through the trees around the shelter clearing.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The shelter is dark. Stars peek through gaps in the canopy overhead.</ansi>");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }

    // === SIGN / REGISTER ===
    if (cmd == "sign" || cmd == "register") {
        var key = "register_s2_" + user.UserId();
        if (room.GetPermData(key) != "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>");
        } else {
            var name = user.GetCharacterName(false);
            room.SetPermData(key, name);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Night 1. Can't believe I'm actually doing this.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }

    // === READ REGISTER ===
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Springer Mountain Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Trail Snail - Day 1. Knees already complaining. 2,189.8 to go.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Blueberry - The mice here are BOLD. One ran across my face at 2am.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Gandalf - First night on trail. Couldn't sleep. Too excited.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Zippy - If found: one left sock, blue. Reward: good karma.\"</ansi>");
        return true;
    }

    // === SLEEP ===
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You unroll your sleeping pad on the wooden platform and crawl into your bag. The shelter creaks in the wind. A mouse investigates your pack. Eventually, sleep comes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles onto the sleeping platform for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }

    // === FILTER WATER ===
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You walk down to the spring and fill your bottles, filtering the cold clear water. It tastes like the mountain itself — clean, mineral, alive.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " heads down to the spring to filter water.", user.UserId());
        return true;
    }

    return false;
}
