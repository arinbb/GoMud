
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("rhapsody") >= 0 || question.indexOf("poodle") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote's composure softens in the specific way it softens only for Rhapsody.");
        mob.Command("say She's exceptional. I don't think I'm being biased -- she is genuinely exceptional.", 2.0);
        mob.Command("say Her structure is correct in every dimension. Her movement is effortless. And she has a quality in the ring that --", 4.5);
        mob.Command("emote searches for the word.", 6.5);
        mob.Command("say Presence. She has presence. You notice her before you decide to notice her.", 8.5);
        return true;
    }

    if (question.indexOf("leslie") >= 0 || question.indexOf("husband") >= 0) {
        mob.Command("say Leslie is very supportive.");
        mob.Command("emote delivers this sentence precisely as it always sounds when she delivers it.", 1.5);
        mob.Command("say He can't be here this year. He has commitments.", 3.5);
        mob.Command("emote picks up her phone. Sets it down again.", 5.5);
        mob.Command("say He's very supportive of Rhapsody. That's the important thing.", 7.0);
        return true;
    }

    if (question.indexOf("christy") >= 0 || question.indexOf("handler") >= 0) {
        mob.Command("say Christy is dedicated.");
        mob.Command("emote says this as the complete sentence it is.", 1.5);
        mob.Command("say She knows Rhapsody. She knows the ring. She knows exactly what needs to happen and she makes it happen.", 3.5);
        mob.Command("say I've worked with other handlers. There's no comparison.", 6.0);
        mob.Command("emote glances toward where Christy would be.", 7.5);
        mob.Command("say She's important to this. She's important to us.", 9.0);
        return true;
    }

    if (question.indexOf("last year") >= 0 || question.indexOf("westminster") >= 0 || question.indexOf("win") >= 0) {
        mob.Command("say Last year was very close.");
        mob.Command("emote says this with the composed smile of a woman who has processed last year entirely.", 2.0);
        mob.Command("say The judge had a different -- he was looking for something specific. We'll be ready for that this time.", 4.5);
        mob.Command("emote is quiet a beat.", 6.0);
        mob.Command("say This year is different.", 7.5);
        return true;
    }

    // Default
    mob.Command("emote looks at you with polished, warm attention.");
    mob.Command("say Of course. What would you like to know?", 1.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it briefly with the evaluating look of a woman who assesses things quickly.");
    mob.Command("say That's lovely.", 2.0);
    mob.Command("emote means it, which is notable because she doesn't say things she doesn't mean.", 3.5);
    return true;
}
