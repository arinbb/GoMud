// ZONE COMMANDS: read chart (2470 easter egg), welcome/love (2473), diagnose/check (2474),
//   guilty/object (2475), fire/shoot (2478), water/pour (2482), fight/rehabilitate (2480)
//   return (all rooms)
// Idiocracy -- The Hibernation Chamber (entry room 2470)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_idiocracy";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film reel slides into the projector with a click. The projector hums. The screen fills with a bureaucratic grey wall and a row of steel pods and a fluorescent tube flickering in the dark of a military installation five hundred years abandoned. You can feel the cold. You can feel the dust. Then you step forward through the screen and the Screening Room is gone and you are standing in the most average morning in the history of the United States -- which is to say it is the morning of the year 2505 and everything you thought you knew is about thirty seconds from becoming wrong.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (user.HasQuest(460) == false) {
        user.GiveQuest(460);
        }
        
        var step = user.GetMiscCharacterData("idiocracy_quest_step");
        if (step == "" || step == null) {
        user.SetMiscCharacterData("idiocracy_quest_step", "1");
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fluorescent light flickers one last time and the cold underground air loses its grip. The grey concrete wall flattens into projection white and then you are back in the Screening Room and the film reel is clicking to its end and the screen is blank. The projector hum fades. The Screening Room is warm and quiet and smells of popcorn and you stand in it for a moment thinking about crops dying in Brawndo spray and what electrolytes actually are. You do not know what electrolytes are. Neither does anyone in 2505. This turns out to matter.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks around the chamber one last time, and then is simply back in the Library, carrying something unresolved.", user.UserId());
        user.SetTempData("visited_idiocracy", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("chart") >= 0 || target.indexOf("roster") >= 0 || target.indexOf("list") >= 0) {
            handleChartEasterEgg(user, room);
            return true;
        }
    }

    return false;
}

function handleChartEasterEgg(user, room) {
    var key = "easter_idiocracy_chart";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read Joes entry again: BAUERS, J. -- PRIVATE -- MOST AVERAGE AMERICAN -- OVERDUE. You already know how this ends. You lived it.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "Joes military file");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find Joes entry in the subject roster: BAUERS, JOSEPH -- PRIVATE -- OCCUPATIONAL SPECIALTY: MOST AVERAGE AMERICAN -- IQ: 100 (mean) -- HIBERNATION TARGET DURATION: 1 YEAR -- ACTUAL DURATION: 500 YEARS -- STATUS: OVERDUE. Below this, someone has added in pen: ALSO WON A GUN RACK IN THE ARMY RECRUITMENT LOTTERY. The pen annotation is dated three weeks before the whole program was forgotten. Joe Bauers, most average man in America, was selected because he would not be missed. That is in his file too. They wrote it in his file.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You read Joes military file.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " studies the subject roster on the wall with the careful attention of someone who understands what they are reading.", user.UserId());
}
