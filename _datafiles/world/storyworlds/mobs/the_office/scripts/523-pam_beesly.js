
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("art") >= 0 || question.indexOf("drawing") >= 0 || question.indexOf("painting") >= 0) {
        mob.Command("emote looks down at the notepad.");
        mob.Command("say I went to Pratt for a semester. I'm hoping to go back.", 1.5);
        mob.Command("say I like watercolors. I've done some paintings of the office and the parking lot and the Scranton skyline.", 3.5);
        mob.Command("emote tucks the notepad away slightly.", 5.0);
        mob.Command("say They're not -- I mean, they're just things I do. But I like doing them.", 6.5);
        return true;
    }

    if (question.indexOf("jim") >= 0 || question.indexOf("halpert") >= 0) {
        mob.Command("emote is quiet for a moment with an expression that is hard to read and completely legible at the same time.");
        mob.Command("say Jim is my best friend.", 2.5);
        mob.Command("emote looks toward the bullpen.", 4.0);
        mob.Command("say He was my best friend for a really long time before he was -- yeah.", 6.0);
        mob.Command("emote picks up a pen. Puts it down.", 7.5);
        mob.Command("say I'm really lucky.", 9.0);
        return true;
    }

    if (question.indexOf("michael") >= 0 || question.indexOf("scott") >= 0) {
        mob.Command("say Michael is -- Michael means well. He genuinely does.", 1.0);
        mob.Command("emote pauses in a way that contains nine years of incidents.", 2.5);
        mob.Command("say He threw me a baby shower once. It wasn't my baby shower. It was for someone else. But he also threw me a real one later and it was actually really sweet.", 4.5);
        mob.Command("emote smiles a real smile.", 6.5);
        mob.Command("say He's the kind of person who surprises you.", 8.0);
        return true;
    }

    if (question.indexOf("reception") >= 0 || question.indexOf("job") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say I've been at this desk for nine years.", 1.0);
        mob.Command("emote looks at the desk.", 2.5);
        mob.Command("say I didn't plan to be here this long. I also didn't plan for a lot of things that happened.", 4.0);
        mob.Command("emote glances at the drawing pinned to the partition.", 5.5);
        mob.Command("say It's a good office. It's really a good office.", 7.0);
        return true;
    }

    // Default

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
