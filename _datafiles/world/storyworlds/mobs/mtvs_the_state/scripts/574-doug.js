function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("wrong") >= 0 || question.indexOf("weird") >= 0 || question.indexOf("creep") >= 0) {
        mob.Command("emote tilts their head with gentle confusion.");
        mob.Command("say Wrong? Nothing's wrong! Everything's great. You're great. The snacks are great. This is a great apartment.", 1.5);
        mob.Command("say Can I get you something? I can get you something. What would you like.", 3.0);
        return true;
    }

    if (question.indexOf("snack") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("say Oh, I'm so glad you asked!");
        mob.Command("emote immediately gestures to the snack bowl.", 1.5);
        mob.Command("say I have pretzels. And crackers. And those little cheese things. I got them because you seem like someone who would like the little cheese things.", 3.0);
        return true;
    }

    if (question.indexOf("apartment") >= 0 || question.indexOf("home") >= 0 || question.indexOf("place") >= 0) {
        mob.Command("say It's nice, right? I fixed it up.");
        mob.Command("emote smiles at the walls with total satisfaction.", 1.5);
        mob.Command("say I really like it here. I like having people over. You should stay as long as you want. You can stay. That would be fine.", 3.5);
        return true;
    }

    mob.Command("say That's such a good question!");
    mob.Command("emote smiles at you with the full warmth of someone who finds your presence very specifically wonderful.", 1.5);
    mob.Command("say Can I answer that for you over snacks?", 3.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at the item with immediate enthusiasm.");
    mob.Command("say Oh, that's great! Where did you get that? I love that.");
    mob.Command("say Could I hold it for a second? I won't keep it. I just want to hold it.", 2.0);
    return true;
}
