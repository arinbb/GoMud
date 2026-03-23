
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("duck") >= 0 || question.indexOf("birds") >= 0) {
        mob.Command("emote 's expression shifts. Something opens briefly in his face, then closes.");
        mob.Command("say The ducks? What about the ducks.", 1.5);
        mob.Command("emote looks away. The cigar stays unlit in his hand.", 3.0);
        mob.Command("say They were... I had a family of ducks. In the pool. They just -- they showed up one day.", 5.0);
        mob.Command("emote 's voice has gone quiet. This is unusual.", 7.0);
        mob.Command("say And then they left. That's what ducks do. They leave.", 9.0);
        mob.Command("emote does not elaborate. He does not need to.", 11.0);
        return true;
    }

    if (question.indexOf("therapy") >= 0 || question.indexOf("melfi") >= 0 || question.indexOf("doctor") >= 0 || question.indexOf("shrink") >= 0) {
        mob.Command("say I see a therapist. It's not -- look, it's for work stress.", 1.0);
        mob.Command("emote waves the cigar dismissively.", 2.5);
        mob.Command("say Lotta guys in my position, they got stress. She helps with that. That's all it is.", 4.0);
        mob.Command("emote does not look convinced by his own explanation.", 5.5);
        return true;
    }

    if (question.indexOf("family") >= 0 || question.indexOf("carmela") >= 0 || question.indexOf("kids") >= 0 || question.indexOf("children") >= 0) {
        mob.Command("say My family is my family. They're good. We're good.", 1.0);
        mob.Command("emote shifts his weight, a small, complicated movement.", 2.5);
        mob.Command("say Carmela's a great woman. The kids -- AJ's having a rough time, but what kid isn't.", 4.5);
        mob.Command("say Meadow's at Columbia. That's something. That's something real.", 6.5);
        return true;
    }

    if (question.indexOf("business") >= 0 || question.indexOf("mob") >= 0 || question.indexOf("mafia") >= 0 || question.indexOf("waste") >= 0) {
        mob.Command("emote looks at you with an expression of patient, dangerous blankness.");
        mob.Command("say I'm in waste management.", 2.0);
        mob.Command("emote 's tone closes the subject like a door.", 3.5);
        return true;
    }

    if (question.indexOf("depression") >= 0 || question.indexOf("panic") >= 0 || question.indexOf("attack") >= 0 || question.indexOf("sad") >= 0) {
        mob.Command("emote 's jaw tightens.");
        mob.Command("say I don't get depressed. That's not -- I get tired sometimes. That's different.", 2.0);
        mob.Command("say Everybody gets tired.", 4.0);
        mob.Command("emote lights his cigar with more focus than the task requires.", 5.5);
        return true;
    }

    var defaults = [
        "say What do you want from me? I'm trying to relax here.",
        "emote looks at you steadily for a moment that goes on a little too long.",
        "say Ask me something else."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it.");
    mob.Command("say What am I supposed to do with that.", 1.5);
    return true;
}
