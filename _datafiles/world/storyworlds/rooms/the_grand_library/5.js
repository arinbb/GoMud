// The Overlook Tower — collection room
// Handles: collection tracker, storage hints

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

        for (var i = 0; i < SOUVENIR_ZONES.length; i++) {
            var key = "souvenir_" + SOUVENIR_ZONES[i];
            if (user.GetMiscCharacterData(key) == "collected") {
                collected++;
                found.push(SOUVENIR_NAMES[i]);
            }
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===== Souvenir Collection =====</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"stat\">Souvenirs found: " + collected + " of " + total + "</ansi>");
        SendUserMessage(user.UserId(), "");

        if (found.length > 0) {
            for (var j = 0; j < found.length; j++) {
                SendUserMessage(user.UserId(), "  <ansi fg=\"10\">* " + found[j] + "</ansi>");
            }
        }

        if (collected == 0) {
            SendUserMessage(user.UserId(), "  <ansi fg=\"8\">None yet. Explore a world and complete its quest to earn a souvenir.</ansi>");
        }

        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}
