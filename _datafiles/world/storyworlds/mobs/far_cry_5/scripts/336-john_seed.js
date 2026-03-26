// John Seed - The Baptist
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("yes") >= 0 || question.indexOf("tattoo") >= 0 || question.indexOf("baptism") >= 0) {
        mob.Command("emote opens his shirt collar slightly to show the tattoo. YES, in clean black letters.");
        mob.Command("say This is my confession. My affirmation. My first YES. Joseph asked me to say it and I resisted, and the resistance told me everything I needed to know about myself.", 1.5);
        mob.Command("say When I finally said it, I understood. YES is the only word that matters. Everything else is a longer way of saying no.", 3.0);
        return true;
    }

    if (question.indexOf("confess") >= 0 || question.indexOf("sin") >= 0) {
        mob.Command("say Oh, I love this question.", 0);
        mob.Command("emote leans forward with professional interest.", 1.0);
        mob.Command("say Sin is just the thing you will not name. I have found that when you name it — when you say it out loud in a room with a camera and a witness — it loses its power. Most of the time.", 2.0);
        mob.Command("say What is yours? You don't have to tell me right now. But you will.", 3.5);
        return true;
    }

    if (question.indexOf("lawyer") >= 0 || question.indexOf("law") >= 0 || question.indexOf("before") >= 0) {
        mob.Command("say I was a very good lawyer. I want you to know that.", 0);
        mob.Command("emote adjusts his cufflinks.", 1.0);
        mob.Command("say The law is about leverage. Finding where something bends and applying pressure at the right place. Joseph's work is the same. I am better at it here than I ever was at a desk.", 2.0);
        return true;
    }

    if (question.indexOf("joseph") >= 0 || question.indexOf("father") >= 0) {
        mob.Command("say Joseph saw me before I saw myself. That is not metaphor. That is what happened.");
        mob.Command("emote is briefly, genuinely sincere in a way that makes the charm disappear for a moment.", 1.5);
        mob.Command("say I owed everything I had become to decisions I had made badly. He offered me a different accounting. I took it.", 3.0);
        return true;
    }

    var defaults = [
        "say What are you afraid to say? That is the most interesting thing about you.",
        "say I find people are most themselves when they have nothing left to protect. Let me help you get there.",
        "say Everyone who walks in here eventually says yes. Some of them just need more time to realize they want to."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
