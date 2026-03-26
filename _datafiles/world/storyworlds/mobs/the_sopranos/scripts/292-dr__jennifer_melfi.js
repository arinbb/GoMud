
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("tony") >= 0 || question.indexOf("patient") >= 0 || question.indexOf("treatment") >= 0) {
        mob.Command("emote looks at you over her notepad with a measured expression.");
        mob.Command("say I can't discuss my patients. I think you know that.", 2.0);
        mob.Command("emote writes something brief and looks up again.", 3.5);
        mob.Command("say What I can say is that the work is... ongoing. The work is always ongoing.", 5.0);
        return true;
    }

    if (question.indexOf("duck") >= 0 || question.indexOf("birds") >= 0) {
        mob.Command("say The ducks. Yes.", 1.0);
        mob.Command("emote sets her pen down on the notepad with careful attention.", 2.5);
        mob.Command("say What do you think it means -- that someone could be so moved by the departure of a family of ducks?", 4.5);
        mob.Command("emote waits. She is very good at waiting.", 6.0);
        return true;
    }

    if (question.indexOf("anxiet") >= 0 || question.indexOf("panic") >= 0 || question.indexOf("depression") >= 0 || question.indexOf("sad") >= 0) {
        mob.Command("say Anxiety is often the body's way of signaling something the mind has chosen not to examine directly.", 1.5);
        mob.Command("emote crosses her legs and resettles the notepad.", 3.0);
        mob.Command("say What does it feel like, when it happens? Where do you feel it first?", 5.0);
        return true;
    }

    if (question.indexOf("therapy") >= 0 || question.indexOf("help") >= 0 || question.indexOf("better") >= 0) {
        mob.Command("say That's a good question.", 1.0);
        mob.Command("emote 's expression shifts almost imperceptibly.", 2.5);
        mob.Command("say What would 'better' look like for you? Can you describe it?", 4.0);
        return true;
    }

    if (question.indexOf("yourself") >= 0 || question.indexOf("you") >= 0 || question.indexOf("feel") >= 0) {
        mob.Command("emote pauses and then says, almost gently:");
        mob.Command("say What makes you ask about me?", 2.0);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
