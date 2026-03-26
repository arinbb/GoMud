
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("album") >= 0 || question.indexOf("utero") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("say Raw. No polish. That was the whole point.");
        mob.Command("emote looks at the tape machine running behind the glass.", 2.0);
        mob.Command("say Nevermind was cleaned up until it could have been on the radio. This one is what we actually sound like in a room.");
        mob.Command("say Albini understands that. He does not try to fix what is not broken.");
        return true;
    }

    if (question.indexOf("frances") >= 0 || question.indexOf("bean") >= 0 || question.indexOf("daughter") >= 0) {
        mob.Command("emote goes quiet. Not cold -- just somewhere else for a moment.");
        mob.Command("emote looks at the notebook in his lap.", 2.5);
        mob.Command("say She is the only thing I have gotten completely right.");
        mob.Command("emote does not say anything else about it.");
        return true;
    }

    if (question.indexOf("music") >= 0 || question.indexOf("industry") >= 0 || question.indexOf("label") >= 0 || question.indexOf("business") >= 0) {
        mob.Command("emote makes a short, humorless sound.");
        mob.Command("say They want the same thing you already made but louder and on a schedule.");
        mob.Command("emote picks at a guitar string, the note dull and brief.", 1.5);
        mob.Command("say The music is not about that. It has never been about that. I do not know how many ways to say it.");
        return true;
    }

    if (question.indexOf("albini") >= 0 || question.indexOf("steve") >= 0 || question.indexOf("engineer") >= 0 || question.indexOf("recording") >= 0) {
        mob.Command("say He just records. That is the thing. He sets up the mics and rolls tape and captures what is there.");
        mob.Command("emote glances through the glass at the control room.", 2.0);
        mob.Command("say He does not have opinions about what we should be. He has opinions about mic placement. I can work with that.");
        return true;
    }

    if (question.indexOf("pain") >= 0 || question.indexOf("sick") >= 0 || question.indexOf("stomach") >= 0 || question.indexOf("hurt") >= 0) {
        mob.Command("emote is quiet for a moment, the guitar still under his hands.");
        mob.Command("say Everyone has their thing.");
        mob.Command("emote shifts slightly, finding a different position.", 2.0);
        mob.Command("say Mine is chronic. Nobody can tell me what it is. I have learned to work inside of it.");
        return true;
    }

    if (question.indexOf("dave") >= 0 || question.indexOf("grohl") >= 0 || question.indexOf("drum") >= 0) {
        mob.Command("say He hits harder than anyone I have ever played with. No pretense. Just impact.");
        mob.Command("emote almost smiles.", 1.5);
        mob.Command("say He is genuinely happy to be doing this. I find that useful. Necessary, actually.");
        return true;
    }

    if (question.indexOf("krist") >= 0 || question.indexOf("novoselic") >= 0 || question.indexOf("bass") >= 0) {
        mob.Command("say Krist is the one who worries. I am glad someone does.");
        mob.Command("emote picks at the guitar strap absently.", 2.0);
        mob.Command("say He is my oldest friend in this. He has been watching out for me since before either of us knew watching out was necessary.");
        return true;
    }

    if (question.indexOf("punk") >= 0 || question.indexOf("seattle") >= 0 || question.indexOf("grunge") >= 0) {
        mob.Command("emote makes a dismissive gesture.");
        mob.Command("say Grunge is a word other people use. We are a band.");
        mob.Command("say We were playing in basements in Olympia because we had things to say. The word came later. It belongs to the people who said it, not us.");
        return true;
    }

    var defaults = [
        "emote keeps playing the fragment, the two chords and the bend, over and over, not resolving.",
        "say I am working.",
        "emote looks at you steadily, then back at the notebook."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
