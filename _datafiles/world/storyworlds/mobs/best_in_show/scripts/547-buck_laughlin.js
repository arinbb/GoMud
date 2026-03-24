
var BUCK_COMMENTARY = [
    "say You know, a dog show -- this is really just a beauty pageant for dogs. But dogs. Which is -- you know what, that's actually what it is.",
    "say My neighbor had a Labrador. Different situation entirely. But dogs -- dogs are great. I want to say that.",
    "say The poodle thing -- with the haircut -- I don't want to say anything about it. I just -- I have a question is all.",
    "say Trevor, here's what I want to know. If the dog wins, does the dog know it won? Like, is there a moment for the dog?",
    "say I've been watching the Bloodhound for twenty minutes. That dog is having thoughts. Long, slow, private thoughts.",
    "say Could you theoretically enter yourself in one of these? Like, as the dog? I'm not saying you should. I'm asking could you.",
    "say The handlers -- they've really committed to this. I respect the commitment. Even when I don't fully understand what they've committed to."
];

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dog") >= 0 || question.indexOf("show") >= 0 || question.indexOf("commentat") >= 0) {
        mob.Command("say I'll be honest with you -- and I say this as a professional -- I don't know much about dogs specifically.");
        mob.Command("emote leans toward you with the comfortable candor of a man who has never been embarrassed by his ignorance.", 2.0);
        mob.Command("say But I know what I like. And these dogs -- they're doing something. You can tell they know they're doing something.", 4.5);
        mob.Command("say The Bloodhound in particular. That dog is philosophical.", 7.0);
        return true;
    }

    if (question.indexOf("trevor") >= 0 || question.indexOf("beckwith") >= 0) {
        mob.Command("say Trevor? Great guy. Very knowledgeable. He did his homework.");
        mob.Command("emote says this with the warmth of a man who finds knowledge in others a charming quality he does not need to personally possess.", 2.5);
        mob.Command("say We have a good back-and-forth. I say a thing, he adds context. It works well.", 5.0);
        return true;
    }

    if (question.indexOf("poodle") >= 0 || question.indexOf("haircut") >= 0) {
        mob.Command("say Okay. Here's my question. And I want to be clear -- I'm not saying anything --");
        mob.Command("emote lowers his voice.", 2.0);
        mob.Command("say Why is that specific haircut the show haircut? Is there a reason? Was there ever a reason?", 4.5);
        mob.Command("emote waits for an answer.", 7.0);
        mob.Command("say I asked Trevor. Trevor said it's historical. I said 'historical how' and then Trevor moved on.", 9.0);
        return true;
    }

    var pick = Math.floor(Math.random() * BUCK_COMMENTARY.length);
    mob.Command(BUCK_COMMENTARY[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("say What is this?");
    mob.Command("emote looks at it with the interested attention of a man who responds the same way to most things.", 1.5);
    mob.Command("say Is this -- where does this come from? What's the story with this?", 3.0);
    mob.Command("emote waits. He genuinely wants to know the story.", 4.5);
    return true;
}
