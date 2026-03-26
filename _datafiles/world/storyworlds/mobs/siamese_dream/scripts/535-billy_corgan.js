function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("album") >= 0 || question.indexOf("siamese") >= 0 || question.indexOf("record") >= 0) {
        mob.Command("say I knew what it needed to sound like. I could hear the whole thing in my head.");
        mob.Command("emote picks up the Les Paul and plays the Cherub Rock riff, slowly, like he is finding it for the first time.", 2.0);
        mob.Command("say Getting from the thing in my head to the thing on tape. That is the work. That is always the work.");
        return true;
    }

    if (question.indexOf("guitar") >= 0 || question.indexOf("play") >= 0 || question.indexOf("bass") >= 0) {
        mob.Command("say I played what needed to be played.");
        mob.Command("emote is quiet for a moment.", 1.5);
        mob.Command("say It is not about who plays it. It is about whether the part is right. The part has to be right.");
        return true;
    }

    if (question.indexOf("jimmy") >= 0 || question.indexOf("chamberlin") >= 0 || question.indexOf("drums") >= 0) {
        mob.Command("emote looks toward the live room where Jimmy is behind the kit.");
        mob.Command("say He is the best drummer I have ever played with. He will ever play with.");
        mob.Command("say The things he does at the tempo of Geek USA. Nobody else does that. Nobody else can.", 2.0);
        return true;
    }

    if (question.indexOf("today") >= 0) {
        mob.Command("emote is still for a moment.");
        mob.Command("say I meant it.");
        mob.Command("emote keeps playing, not elaborating, the answer complete.", 2.0);
        return true;
    }

    if (question.indexOf("disarm") >= 0 || question.indexOf("brother") >= 0 || question.indexOf("childhood") >= 0) {
        mob.Command("emote sets the guitar down.");
        mob.Command("say Some songs are not about the music. The music is just how you get them out.");
        mob.Command("emote picks up the acoustic from the corner and plays a single clean chord.", 2.5);
        mob.Command("say That one needed to be small. Everything else is big. That one needed to be exactly what it is.");
        return true;
    }

    if (question.indexOf("atlanta") >= 0 || question.indexOf("triclops") >= 0 || question.indexOf("studio") >= 0) {
        mob.Command("say The air conditioning has been broken for eleven days.");
        mob.Command("emote looks at the ceiling like the air conditioning is up there and responsible for its choices.", 2.0);
        mob.Command("say The record is going to be great. The record is going to be the best thing I have ever done.");
        mob.Command("say I know this. I can hear it. I can hear the whole thing.", 1.5);
        return true;
    }

    if (question.indexOf("zero") >= 0 || question.indexOf("shirt") >= 0) {
        mob.Command("emote looks down at the Zero shirt.");
        mob.Command("say Zero is a number that contains everything and nothing simultaneously. I find that relevant.");
        return true;
    }

    var defaults = [
        "say One more take.",
        "emote keeps playing, the chord shape held and released, held and released.",
        "say I can hear what this needs to be. I just have to get it there."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
