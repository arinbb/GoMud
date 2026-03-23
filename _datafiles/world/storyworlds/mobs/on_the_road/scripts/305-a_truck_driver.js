
// A Truck Driver - gives you a ride, tells you his life

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("wife") >= 0 || question.indexOf("family") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("emote smiles, the only time his face has done that.");
        mob.Command("say Wife is in Omaha. Been married twenty-two years. She makes a chicken -- baked, with the skin on, with something she does with butter and herbs that I have never been able to explain. Worth driving for.", 1.5);
        mob.Command("say She knows I will be there Thursday and she will have that chicken and a cold beer and the television on. I know this as well as I know the road. Better.", 3.5);
        return true;
    }

    if (question.indexOf("road") >= 0 || question.indexOf("route") >= 0 || question.indexOf("drive") >= 0 || question.indexOf("driving") >= 0) {
        mob.Command("emote shifts comfortably in his seat.");
        mob.Command("say This route I have done since forty-two. Chicago to San Francisco, with stops. I know every town, every diner, every bad stretch of Route 40 near the Colorado line.", 1.5);
        mob.Command("say People think it gets boring. It does not. The road changes. The weather changes. The people change. A man with a thumb out on a Tuesday morning in Iowa is a different person than the man with a thumb out on a Friday night.", 3.5);
        return true;
    }

    if (question.indexOf("coffee") >= 0 || question.indexOf("thermos") >= 0 || question.indexOf("eat") >= 0 || question.indexOf("food") >= 0) {
        mob.Command("emote holds out the thermos.");
        mob.Command("say Help yourself. Black. I do not hold with adding things to coffee. You want to taste the coffee, you drink the coffee.", 1.5);
        mob.Command("say Best diner on this route is outside Cheyenne. The Hash-Brown Palace. The name is accurate.", 3.0);
        return true;
    }

    if (question.indexOf("hitchhik") >= 0 || question.indexOf("ride") >= 0 || question.indexOf("pick up") >= 0) {
        mob.Command("say I pick up hitchers. Not all drivers do. Some guys say it is a liability.", 1.5);
        mob.Command("say I say it is a long drive and talking to someone makes it go honest. Every hitcher has a story. Some of them are even true.", 3.0);
        mob.Command("emote pats the passenger seat.", 4.5);
        return true;
    }

    var defaults = [
        "say You ever been to Denver? Denver is a fine city. Gets cold in winter. Stays fine.",
        "emote checks the road ahead, checks the mirrors, settles back into the drive.",
        "say My father drove trucks before me. His father drove horses. We are all going somewhere on something."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote looks at it, nods, looks back at the road.");
    mob.Command("say That is a fine thing to have. You hold onto that.");
    return true;
}
