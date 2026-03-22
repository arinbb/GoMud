
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("art") >= 0 || question.indexOf("artist") >= 0) {
        mob.Command("say Art is not a hobby. Art is a CALLING. A spiritual imperative.");
        mob.Command("emote gestures passionately, her oversized jewelry clanking.");
        mob.Command("say My work explores the tension between form and void, between presence and absence, between the tangible and the ineffable.", 2.0);
        mob.Command("say Most people don't understand it. That's how you know it's good.", 4.0);
        return true;
    }

    if (question.indexOf("house") >= 0 || question.indexOf("home") >= 0 || question.indexOf("decor") >= 0) {
        mob.Command("say When we bought this house it had absolutely NO character. None! It was like living inside a greeting card.");
        mob.Command("say All those pastels and florals and little country touches. Hideous. Absolutely hideous.");
        mob.Command("say I'm giving it a SOUL. A vision. Every room is becoming a statement.", 2.0);
        mob.Command("emote waves her hand dismissively at the original wallpaper.", 3.5);
        return true;
    }

    if (question.indexOf("otho") >= 0) {
        mob.Command("say Otho is a brilliant man. A true visionary. He understands space and energy like no one else.");
        mob.Command("say He's the one who convinced me to move past neo-expressionism into something more primal. More raw.");
        mob.Command("say Without Otho, I would still be making representational art like some kind of AMATEUR.", 2.0);
        return true;
    }

    if (question.indexOf("charles") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("say Charles means well. He really does. But the man has absolutely no aesthetic sense.");
        mob.Command("say He wanted to keep the ORIGINAL WALLPAPER. Can you imagine? Those little flowers?");
        mob.Command("emote shudders theatrically.", 2.0);
        mob.Command("say He'll come around. He always does. Eventually.", 3.0);
        return true;
    }

    if (question.indexOf("sculpt") >= 0 || question.indexOf("piece") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say Each of my sculptures is a journey. A statement. A rebellion against the mundane.");
        mob.Command("emote caresses a nearby sculpture with reverence.");
        mob.Command("say This piece here? It represents the existential dread of suburban domesticity filtered through the lens of post-modern anxiety.", 2.0);
        mob.Command("say Or it's a horse. Depending on the angle.", 4.0);
        return true;
    }

    mob.Command("say Hmm. You should ask me about my art, my sculptures, or what I've done with this dreadful house.");
    return true;
}
