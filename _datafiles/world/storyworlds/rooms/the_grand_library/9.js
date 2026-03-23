// The Trophy Room — Souvenir collection tracker
// Also an item storage room (isstorage: true in YAML)

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
    "the_wire", "six_feet_under", "harvest", "mtvs_the_state"
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
    "The Wire", "Six Feet Under", "Harvest", "MTVs The State"
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
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Use 'storage add <item>' to display a souvenir on your shelf.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
