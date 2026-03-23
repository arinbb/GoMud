
// The Tenor Man - the jazz musician who transcends

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("music") >= 0 || question.indexOf("jazz") >= 0 || question.indexOf("saxophone") >= 0 || question.indexOf("play") >= 0) {
        mob.Command("emote wipes his face and looks at you from very far away.");
        mob.Command("say Music. I am not playing music. I stopped playing music two hours ago. What is happening now does not have a word.", 2.0);
        mob.Command("emote raises the saxophone and plays three notes by way of demonstration. The three notes are enough.", 4.0);
        return true;
    }

    if (question.indexOf("bird") >= 0 || question.indexOf("parker") >= 0 || question.indexOf("charlie") >= 0) {
        mob.Command("emote nods once, very slowly.");
        mob.Command("say Bird opened the door. I am walking through it. Everybody out here is walking through it. The question is how far you go.", 2.0);
        mob.Command("emote plays a phrase that is clearly learned from Parker and clearly beyond it.", 4.0);
        return true;
    }

    if (question.indexOf("tired") >= 0 || question.indexOf("stop") >= 0 || question.indexOf("rest") >= 0) {
        mob.Command("emote smiles without stopping playing.");
        mob.Command("say When I stop, I will stop. I will know when.", 2.0);
        return true;
    }

    mob.Command("emote lowers the horn for a moment and looks at you with gentle patience.");
    mob.Command("say I am working right now. You can stay. Just stay.", 2.0);
    mob.Command("emote raises the horn and goes back into it.", 3.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote glances at it between phrases, nods once, keeps playing.");
    return true;
}
