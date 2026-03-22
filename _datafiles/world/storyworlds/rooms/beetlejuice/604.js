
// Living Room - Beetlejuice summoning mechanic + physical comedy
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The living room flickers like a TV losing signal. Static fills your vision, then clears to reveal the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into static and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Beetlejuice summoning - say his name 3 times
    if (cmd == "say") {
        var words = rest.toLowerCase();
        if (words.indexOf("beetlejuice") >= 0 || words.indexOf("betelgeuse") >= 0) {
            var count = user.GetTempData("bj_count");
            if (count == "") {
                count = 0;
            } else {
                count = parseInt(count);
            }
            count = count + 1;
            user.SetTempData("bj_count", String(count));

            if (count == 1) {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The lights flicker. Just once, but hard -- like the house flinched. A fat black fly lands on the mantle, rubs its legs together, and watches you. The fire dims for a heartbeat. Somewhere in the walls, something shifts.</ansi>");
                SendRoomMessage(room.RoomId(), "The lights flicker hard as " + user.GetCharacterName(true) + " speaks that name. A fly appears from nowhere.", user.UserId());
            } else if (count == 2) {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fire in the fireplace turns blue -- cold blue, corpse blue. Delia's sculptures rattle on their bases like they're trying to run. The temperature plummets. Your breath fogs. More flies. They're gathering on the ceiling, dozens of them, buzzing in a pattern that almost sounds like laughter. The air smells of grave dirt.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">One more time. If you dare.</ansi>");
                SendRoomMessage(room.RoomId(), "The fireplace flares blue. Sculptures rattle. Flies swarm the ceiling. Something is coming.", user.UserId());
            } else if (count >= 3) {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"green\">The floor CRACKS open -- a jagged split right through the living room hardwood, green light pouring up from below like radioactive lava. Delia's sculptures explode off their pedestals. The flies on the ceiling form a screaming face. Every light in the house shatters simultaneously.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"green\">And rising from the crack, riding a column of green smoke like a surfboard, arms spread wide, black-and-white striped suit covered in grave dirt, grin splitting his face literally ear to ear --</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"IT'S SHOWTIME!\"</ansi>");
                SendUserMessage(user.UserId(), "");
                SendRoomMessage(room.RoomId(), "The floor CRACKS open. Green light. Exploding sculptures. And rising from the chaos -- BEETLEJUICE, grinning from ear to ear!", user.UserId());

                room.SpawnMob(22);
                room.AddTemporaryExit("crack in the floor", ":green", 615, "10 real minutes");
                user.SetTempData("bj_count", "0");
                user.SetTempData("bj_summoned", "true");

                // Post-summoning monologue (delayed commands from the spawned mob)
                var mobs = room.GetMobs(22);
                if (mobs.length > 0) {
                    var bj = mobs[0];
                    bj.Command("say Well WELL well! Look who finally grew a spine!", 2);
                    bj.Command("emote dusts grave dirt off his striped suit. A centipede falls out of his pocket.", 4);
                    bj.Command("say You got living people problems? Dead people problems? People problems in GENERAL?", 6);
                    bj.Command("emote pulls a business card out of thin air and flicks it toward " + user.GetCharacterName(true) + ".", 8);
                    bj.Command("say Betelgeuse, Bio-Exorcist, at your SERVICE! I scare 'em, I freak 'em, I make their heads do the full three-sixty!", 10);
                    bj.Command("emote 's head rotates 360 degrees to demonstrate. He grins even wider when it's facing forward again.", 12);
                    bj.Command("say Only catch is -- you gotta let me OUT. Out of this house, out of the afterlife, out of this PRISON. We got a deal?", 14);
                    bj.Command("emote rubs his hands together, leaving a trail of green slime.", 16);
                    bj.Command("say Oh, and if you get bored, check out my place through that crack in the floor. Mi casa es su casa. Emphasis on the CASA-ket! Ha! Get it? Casket?", 18);
                    bj.Command("emote cackles at his own joke. Nobody else laughs. He doesn't notice.", 20);
                }
            }
            return false;
        }
    }

    // Physical comedy - interact with Beetlejuice if he's here
    if (cmd == "poke") {
        var mobs = room.GetMobs(22);
        if (mobs.length > 0 && rest.indexOf("betelgeuse") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">You poke Betelgeuse in the shoulder. Your finger sinks in about three inches -- his flesh has the consistency of cold pudding. He doesn't seem to mind.</ansi>");
            mobs[0].Command("say Hey hey HEY! Buy me dinner first! Actually don't, I eat bugs.", 1);
            mobs[0].Command("emote 's shoulder inflates back to normal with a wet popping sound.", 2);
            return true;
        }
    }

    if (cmd == "shake" && rest.indexOf("hand") >= 0) {
        var mobs = room.GetMobs(22);
        if (mobs.length > 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">You reach out to shake Betelgeuse's hand. He grabs yours enthusiastically -- and his hand comes clean off at the wrist. He's still shaking yours, but his hand is no longer attached to his arm.</ansi>");
            mobs[0].Command("emote looks at his handless wrist, looks at his detached hand still shaking yours, and shrugs.");
            mobs[0].Command("say Happens all the time. Just... just give that back when you're done.", 2);
            mobs[0].Command("emote reattaches his hand with a squelching sound. It's on backwards. He doesn't fix it.", 4);
            return true;
        }
    }

    if (cmd == "high" && rest.indexOf("five") >= 0) {
        var mobs = room.GetMobs(22);
        if (mobs.length > 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">You raise your hand for a high five. Betelgeuse's hand stretches on a rubber-band arm, sailing past your hand, across the room, and slapping the far wall before snapping back.</ansi>");
            mobs[0].Command("say NAILED IT!", 1);
            return true;
        }
    }

    return false;
}

function onIdle(room) {
    if (!UtilIsDay()) {
        var messages = [
            "Delia's sculptures cast grotesque shadows that seem to move independently of the sculptures.",
            "The fire burns green for a moment, then returns to orange. Did you imagine it?",
            "Scratching sounds from inside the walls. Rats? Or something trying to get out?"
        ];
        var pick = Math.floor(Math.random() * messages.length);
        // 40% chance to show a night message vs normal idle
        if (Math.random() < 0.4) {
            room.SendText(messages[pick]);
            return true;
        }
    }
    return false;
}
