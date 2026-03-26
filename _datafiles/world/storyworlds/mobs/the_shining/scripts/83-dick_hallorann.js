
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("shining") >= 0 || question.indexOf("shine") >= 0 || question.indexOf("gift") >= 0 || question.indexOf("power") >= 0) {
        mob.Command("say The shining. That's what my grandmother called it.");
        mob.Command("say Some people can see things. Feel things. Things that other people can't.");
        mob.Command("emote taps his temple thoughtfully.", 2.0);
        mob.Command("say Not everybody with the shining knows they have it. And not all of them shine the same way.", 3.5);
        return true;
    }

    if (question.indexOf("danny") >= 0 || question.indexOf("boy") >= 0) {
        mob.Command("say That boy has the shining. Real strong. Stronger than anyone I've ever met.");
        mob.Command("emote 's expression turns serious.");
        mob.Command("say He needs to be careful in this place. The hotel can feel him. It WANTS him.", 2.0);
        return true;
    }

    if (question.indexOf("hotel") >= 0 || question.indexOf("overlook") >= 0) {
        mob.Command("say This hotel has its own kind of shine. A dark one.");
        mob.Command("say It's full of bad memories. Bad things happened here, and the hotel... remembers.");
        mob.Command("emote shakes his head slowly.", 2.0);
        mob.Command("say Some places are just like people. Some shine and some don't. This place shines. But it doesn't shine good.", 3.5);
        return true;
    }

    if (question.indexOf("room") >= 0 || question.indexOf("237") >= 0) {
        mob.Command("emote 's face goes deadly serious.");
        mob.Command("say Room 237. Listen to me carefully.");
        mob.Command("say Stay out of Room 237. There is nothing good in there. NOTHING.", 2.0);
        mob.Command("say I mean it. Whatever you think is in there — it's worse.", 3.5);
        return true;
    }

    if (question.indexOf("jack") >= 0 || question.indexOf("torrance") >= 0 || question.indexOf("caretaker") >= 0) {
        mob.Command("say Something in this hotel is getting to Jack Torrance.");
        mob.Command("emote lowers his voice.");
        mob.Command("say The hotel wants the boy. And it's using the father to get to him.", 2.0);
        mob.Command("say I've seen this before. This place gets inside your head. It finds the cracks and it pushes.", 3.5);
        return true;
    }

    var defaults = [
        "say You need anything, you just give old Dick a holler. Kitchen's always open.",
        "say This hotel has a lot of history. Not all of it good. Keep your eyes open.",
        "say Some things in this world can't be explained. Doesn't mean they aren't real."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("key") >= 0 || showText.indexOf("237") >= 0) {
        mob.Command("emote 's eyes widen.");
        mob.Command("say Where did you find that? That key should have been lost a long time ago.");
        mob.Command("say Be careful with it. Some doors are better left locked.", 2.0);
        return true;
    }

    return false;
}
