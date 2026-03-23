
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("agnes") >= 0 || question.indexOf("shih tzu") >= 0 || question.indexOf("dog") >= 0) {
        mob.Command("emote turns from the grooming table to face you, which is a significant gesture.");
        mob.Command("say Miss Agnes has been with us for six years. We found her as a puppy. The breeder called us first -- she knew.", 2.0);
        mob.Command("say She has extraordinary bone structure. And her coat -- it's not white. Do you understand the difference?", 4.5);
        mob.Command("emote looks at you as if checking whether you actually understand the difference.", 6.0);
        mob.Command("say White is flat. Hers is -- reflective. Luminous. You can't photograph it, really. You have to be in the room with it.", 8.0);
        mob.Command("emote turns back to Miss Agnes with the satisfaction of a man who has explained this correctly.", 10.5);
        return true;
    }

    if (question.indexOf("catalog") >= 0 || question.indexOf("business") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say Scott and I run a home goods catalog. Twelve years now.");
        mob.Command("emote says this with the tone of someone whose work and life are not separate things.", 2.0);
        mob.Command("say Everything we do is about the image. How things look together. What a room says about the person in it.", 4.0);
        mob.Command("emote gestures at Miss Agnes, the lighting rig, the whole setup.", 6.0);
        mob.Command("say This -- all of this -- is the same thing.", 7.5);
        return true;
    }

    if (question.indexOf("scott") >= 0 || question.indexOf("partner") >= 0) {
        mob.Command("say Scott handles the things I don't notice I'm not handling.");
        mob.Command("emote smiles in the shorthand way of people who know each other entirely.", 2.0);
        mob.Command("say At a show, he has the checklist. He knows when I've missed something before I do. Twelve years of that.", 4.5);
        mob.Command("emote is quiet for a moment.", 6.0);
        mob.Command("say He brought the secondary lighting rig without being asked. That's Scott.", 7.5);
        return true;
    }

    // Default
    mob.Command("emote glances over briefly.");
    mob.Command("say One moment.", 1.0);
    mob.Command("emote adjusts something on Miss Agnes, steps back, and then turns to you.", 3.0);
    mob.Command("say Now. What did you need?", 4.5);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it with the trained eye of someone who looks at things professionally.");
    mob.Command("say The finish on this is interesting. How did they get this color?", 2.0);
    mob.Command("emote tilts it toward the light, which is instinctive.", 3.5);
    return true;
}
