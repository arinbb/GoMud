// The Grand Atrium — Library hub room script
// Handles the "collection" command to show souvenir tracking

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
    "up_in_smoke", "paris_texas", "northern_exposure"
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
    "Up in Smoke", "Paris Texas", "Northern Exposure"
];

function onCommand(cmd, rest, user, room) {
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
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Visit the Trophy Room (southeast) to display your souvenirs on your personal shelf.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    if (cmd == "sign" || (cmd == "write" && rest.indexOf("guestbook") >= 0)) {
        var signKey = "library_guestbook_signed";
        if (user.GetMiscCharacterData(signKey) != "signed") {
            user.SetMiscCharacterData(signKey, "signed");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pick up the brass pen and sign your name in the guestbook. The ink shimmers briefly, then settles into the page alongside hundreds of other signatures. Yours glows faintly — a new arrival.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " signs the guestbook with a flourish.", user.UserId());
            user.GrantXP(50, "signing the guestbook");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+50 XP — Welcome to the Library.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Your name is already in the guestbook. The ink still shimmers faintly, as if pleased to see you return.</ansi>");
        }
        return true;
    }

    if (cmd == "read" && rest.indexOf("guestbook") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You flip through the pages of the guestbook. Names and notes from countless travelers fill the pages in every color of ink:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"I found the heart of gold. Still searching.\" — N.Y.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"The Overlook remembers.\" — J.T.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Ignatius was right about everything.\" — I.J.R.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Omar comin.\" — O.L.</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"8\">\"Party on.\" — W. & G.</ansi>");
        SendUserMessage(user.UserId(), "");
        var signKey = "library_guestbook_signed";
        if (user.GetMiscCharacterData(signKey) != "signed") {
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'sign' to add your name.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Your name is here, glowing faintly among the others.</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
