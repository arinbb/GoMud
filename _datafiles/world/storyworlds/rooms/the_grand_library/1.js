// The Grand Library — single home room
// Handles: guestbook, collection tracker, browse hint

var SOUVENIR_ZONES = [
    "wonderland", "beetlejuice", "starry_night", "those_winter_sundays",
    "peewees_big_adventure", "the_shining", "the_hobbit", "in_utero",
    "a_confederacy_of_dunces", "buffalo_66", "matilda", "goodnight_moon",
    "waynes_world", "jurassic_park", "die_die_my_darling", "blonde_on_blonde",
    "the_sopranos", "on_the_road", "crime_and_punishment", "stardew_valley",
    "far_cry_5", "super_mario_bros", "the_monkey_wrench_gang",
    "the_little_prince", "ghostbusters", "back_to_the_future",
    "nineteen_eighty_four", "forbidden_planet", "seinfeld",
    "harold_and_maude", "its_always_sunny", "the_andy_griffith_show",
    "up_in_smoke", "paris_texas", "northern_exposure",
    "the_wire", "six_feet_under", "harvest", "the_office",
    "siamese_dream", "best_in_show", "mtvs_the_state",
    "stand_by_me", "the_sandlot", "tass_times_in_tonetown", "idiocracy",
    "billy_madison"
];

var SOUVENIR_NAMES = [
    "Wonderland", "Beetlejuice", "Starry Night", "Those Winter Sundays",
    "Peewees Big Adventure", "The Shining", "The Hobbit", "In Utero",
    "A Confederacy of Dunces", "Buffalo 66", "Matilda", "Goodnight Moon",
    "Waynes World", "Jurassic Park", "Die Die My Darling", "Blonde on Blonde",
    "The Sopranos", "On the Road", "Crime and Punishment", "Stardew Valley",
    "Far Cry 5", "Super Mario Bros", "The Monkey Wrench Gang",
    "The Little Prince", "Ghostbusters", "Back to the Future",
    "Nineteen Eighty Four", "Forbidden Planet", "Seinfeld",
    "Harold and Maude", "Its Always Sunny", "The Andy Griffith Show",
    "Up in Smoke", "Paris Texas", "Northern Exposure",
    "The Wire", "Six Feet Under", "Harvest", "The Office",
    "Siamese Dream", "Best in Show", "MTVs The State",
    "Stand By Me", "The Sandlot", "Tass Times in Tonetown", "Idiocracy",
    "Billy Madison"
];

function onCommand(cmd, rest, user, room) {

    // Collection tracker
    if (cmd == "collection" || cmd == "collections" || cmd == "souvenirs") {
        var collected = 0;
        var total = SOUVENIR_ZONES.length;
        var found = [];
        var missing = [];

        for (var i = 0; i < SOUVENIR_ZONES.length; i++) {
            var key = "souvenir_" + SOUVENIR_ZONES[i];
            if (user.GetMiscCharacterData(key) == "collected") {
                collected++;
                found.push(SOUVENIR_NAMES[i]);
            } else {
                missing.push(SOUVENIR_NAMES[i]);
            }
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===== Your Souvenir Collection =====</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"stat\">Collected: " + collected + " of " + total + " worlds</ansi>");
        SendUserMessage(user.UserId(), "");

        if (found.length > 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Found:</ansi>");
            for (var j = 0; j < found.length; j++) {
                SendUserMessage(user.UserId(), "  <ansi fg=\"10\">* " + found[j] + "</ansi>");
            }
        }

        if (missing.length > 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Not yet discovered:</ansi>");
            for (var k = 0; k < missing.length; k++) {
                SendUserMessage(user.UserId(), "  <ansi fg=\"8\">- " + missing[k] + "</ansi>");
            }
        }

        SendUserMessage(user.UserId(), "");
        return true;
    }

    // Guestbook signing
    if (cmd == "sign") {
        var signKey = "library_guestbook_signed";
        var playerName = user.GetCharacterName(false);

        if (rest == "" || rest == "guestbook") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">What would you like to write? Type: sign <your message></ansi>");
            return true;
        }

        var message = rest;
        if (message.indexOf("guestbook ") == 0) {
            message = message.substring(10);
        }
        if (message.length > 80) {
            message = message.substring(0, 80);
        }

        var entryKey = "guestbook_" + playerName;
        room.SetPermData(entryKey, message);

        if (user.GetMiscCharacterData(signKey) != "signed") {
            user.SetMiscCharacterData(signKey, "signed");
            user.GrantXP(50, "signing the guestbook");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+50 XP — Welcome to the Library.)</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You write in the guestbook. The ink shimmers, then settles.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + message + "\" -- " + playerName + "</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes something in the guestbook.", user.UserId());
        return true;
    }

    // Guestbook reading
    if (cmd == "read" && rest.indexOf("guestbook") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Names and notes fill the pages:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"I found the heart of gold. Still searching.\" -- N.Y.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"The Overlook remembers.\" -- J.T.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Omar comin.\" -- O.L.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Party on.\" -- W. & G.</ansi>");

        var playerName = user.GetCharacterName(false);
        var myEntry = room.GetPermData("guestbook_" + playerName);
        if (myEntry != null && myEntry != "") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "  <ansi fg=\"10\">\"" + myEntry + "\" -- " + playerName + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    // Browse hint
    if (cmd == "browse") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'look shelves' to see all available titles.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Then 'get <title> shelves' to take one.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Once you have a title, 'use' or 'read' it to enter that world.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'return' inside any world to come back here.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
