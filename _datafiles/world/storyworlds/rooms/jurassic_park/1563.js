
// Jurassic Park - The DNA Lab
// Easter egg: "look amber" then "extract dna" - first time = 150 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(130) && !user.GetMiscCharacterData("jp_quest_dnalab")) {
        user.SetMiscCharacterData("jp_quest_dnalab", "true");
        // Quest step 3: Visit the DNA lab
        user.Command("quest advance 130");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: You have visited the DNA lab.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The amber specimens catch the light one last time and the amber becomes projector amber and the sequencing machines hum their last base-pair notation and the lab dissolves into the warm amber light of the Grand Library reading lamps.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is last seen in the amber light of the specimen case before vanishing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("amber") >= 0 || rest.indexOf("mosquito") >= 0 || rest.indexOf("specimen") >= 0)) {
        user.SetTempData("jp_looked_amber", "true");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The amber specimens are lit from below, each one golden and translucent. You press your face close to the glass. Beetles, gnats, ants — and there in the center case, the mosquito. You can see it clearly through the magnifying element in the case: compound eye, proboscis, the delicate geometry of its legs. Forty million years old. Still here. Inside that frozen body, in the blood it never digested, the code for something that no longer exists. Except that it does. You've seen it. You heard it in the meadow.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(If only you could extract the DNA...)</ansi>");
        return true;
    }

    if (cmd == "extract" && (rest.indexOf("dna") >= 0 || rest.indexOf("blood") >= 0 || rest.indexOf("sample") >= 0)) {
        var easterKey = "jp_dna_extract";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(150, "following the DNA extraction process");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Mr. DNA springs to life on the presentation screen behind you, cartoon helix bouncing with enthusiasm.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">\"Hello! I'm Mr. DNA! From your first day at school you've been taught that the nucleus of every living cell contains a blueprint for that creature's genetic code — its DNA! Now scientists have discovered that the blood of a dinosaur can be preserved in amber for millions of years!\"</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The cartoon shows: mosquito, amber, needle, test tube, helix. Then: gaps in the helix, labeled MISSING GENETIC INFORMATION.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">\"Using the incomplete strands of dino DNA, our scientists have created a computer program to fill in the gaps — using the DNA of a modern animal, the frog!\" A cartoon frog waves at you. The frog seems very pleased about this.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP — You understood how to do it.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Mr. DNA explains the process again with undiminished enthusiasm. Mosquito. Amber. Needle. Test tube. Frog DNA. The frog waves. You already know all of this. The frog doesn't care.</ansi>");
        }
        return true;
    }

    if (cmd == "watch" && (rest.indexOf("mr") >= 0 || rest.indexOf("dna") >= 0 || rest.indexOf("presentation") >= 0 || rest.indexOf("screen") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The presentation runs on loop. Mr. DNA bounces across the screen in his cheerful way, explaining the most audacious scientific project in human history in terms suitable for a nine-year-old. The remarkable thing is that the explanation is essentially correct. The scientists really did this. It really worked. The cartoon is not simplifying a hypothetical — it is describing something that actually happened. That is the most frightening thing in the lab.</ansi>");
        return true;
    }

    return false;
}
