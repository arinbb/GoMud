// Back to the Future -- Inside the DeLorean
// Easter egg: "set date" or type "88" triggers time circuit display
var LIBRARY_ROOM = 1;
var EASTER_KEY = "bttf_egg_timecircuit";

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You touch the time circuit display. The digits blur into a cascade of red numbers -- years, months, dates, scrolling faster than you can read -- and then the car interior dissolves around you. You are in the Grand Library. The DeLorean is a film on a screen behind you, and it is still raining in 1955.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs into a streak of red digits and vanishes from the DeLorean.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    var cmdLower = cmd.toLowerCase();
    var restLower = rest.toLowerCase();

    if (cmdLower == "set" && (restLower.indexOf("date") >= 0 || restLower.indexOf("time") >= 0)) {
        triggerTimecircuit(user, room);
        return true;
    }

    if (cmdLower == "88" || (cmdLower == "type" && restLower.indexOf("88") >= 0)) {
        triggerTimecircuit(user, room);
        return true;
    }

    if (cmdLower == "push" || cmdLower == "press") {
        if (restLower.indexOf("88") >= 0 || restLower.indexOf("button") >= 0 || restLower.indexOf("keypad") >= 0) {
            triggerTimecircuit(user, room);
            return true;
        }
    }

    return false;
}

function triggerTimecircuit(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach for the time circuit keypad. Your fingers find the keys.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The display clears. The destination time blinks.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">You type: 1 1 - 0 5 - 1 9 5 5</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The red digits settle:</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">DESTINATION TIME:    NOV 05 1955  06:00</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">PRESENT TIME:        NOV 12 1955  21:58</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"red\">LAST TIME DEPARTED:  OCT 26 1985  01:24</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The flux capacitor pulses three times, faster. Roads? Where you're going, you don't need roads.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " punches a date into the time circuits. The DeLorean hums louder.", user.UserId());

    if (user.GetMiscCharacterData(EASTER_KEY) != "found") {
        user.SetMiscCharacterData(EASTER_KEY, "found");
        user.GrantXP(200, "time circuit activation");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">(+200 XP -- you set the time circuits yourself)</ansi>");
    }
}
