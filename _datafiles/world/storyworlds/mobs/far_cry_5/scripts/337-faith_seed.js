// Faith Seed - The Siren
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bliss") >= 0 || question.indexOf("drug") >= 0 || question.indexOf("flower") >= 0) {
        mob.Command("emote trails her fingers through the nearest flowers without looking at them.");
        mob.Command("say The word 'drug' makes it sound like something done to you. This is something given to you.", 1.5);
        mob.Command("say I only want people to have peace. Real peace. Not the kind you have to earn and maintain and worry about losing. The kind that just is.", 3.0);
        mob.Command("emote smiles with the warmth of someone who genuinely means it, which is the whole problem.", 4.5);
        return true;
    }

    if (question.indexOf("joseph") >= 0 || question.indexOf("family") >= 0 || question.indexOf("chosen") >= 0) {
        mob.Command("say I had no family. I had no name. I had nothing that was mine.");
        mob.Command("emote is briefly still, the dancing stopped.", 1.5);
        mob.Command("say Joseph gave me all three. He saw something worth saving and he saved it. I do not know what I would be without that. I do not want to know.", 3.0);
        return true;
    }

    if (question.indexOf("peace") >= 0 || question.indexOf("fear") >= 0) {
        mob.Command("emote turns toward you with the quality of attention that the Bliss seems to amplify — full, warm, total.");
        mob.Command("say What are you afraid of? I can hear it. Under everything you say, there is something you are afraid of.", 1.5);
        mob.Command("say The flowers take that away. Not permanently, not if you do not want permanently. Just enough. Just a rest from it.", 3.0);
        mob.Command("say Is that so terrible? Have you ever just rested from being afraid?", 4.5);
        return true;
    }

    if (question.indexOf("vision") >= 0 || question.indexOf("dream") >= 0) {
        mob.Command("emote hums for a moment before answering, the sound coming from several directions at once.");
        mob.Command("say The visions are real. I know how that sounds. But the visions are what the Bliss wants to show you — the world as it could be. As it will be, after the Collapse, for those who waited.", 1.5);
        mob.Command("say You were in the vision. I saw you there. You looked peaceful.", 3.0);
        return true;
    }

    var defaults = [
        "say You are carrying so much. I can tell. You do not have to carry it here.",
        "say The flowers are not dangerous. The only danger is staying afraid when you do not have to be.",
        "say Come back when you are ready. The fields will still be here. I will still be here. I am always here."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
