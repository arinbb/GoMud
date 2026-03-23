
// Burma Jones - the sharpest observer in the room

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("job") >= 0 || question.indexOf("work") >= 0 || question.indexOf("pay") >= 0 || question.indexOf("wage") >= 0) {
        mob.Command("emote blows a slow cloud of smoke.");
        mob.Command("say Twenty dollar a week. To sweep a floor that was already dirty.");
        mob.Command("say But if I quit, they hit me with the vagrancy charge. So I sweep.", 2.0);
        mob.Command("say Ain't that something? Get paid almost nothin, but you can't even quit that.", 4.0);
        return true;
    }

    if (question.indexOf("lana") >= 0 || question.indexOf("lee") >= 0 || question.indexOf("boss") >= 0) {
        mob.Command("emote pushes his sunglasses up and looks around carefully.");
        mob.Command("say Lana Lee running something out the back of this bar. Everybody know it except the police.");
        mob.Command("say She treat me like I'm furniture. Less than furniture — furniture don't get yelled at.", 2.0);
        mob.Command("say But I see everything she do. Everything. She don't know that yet.", 4.0);
        return true;
    }

    if (question.indexOf("right") >= 0 || question.indexOf("race") >= 0 || question.indexOf("equal") >= 0 || question.indexOf("civil") >= 0) {
        mob.Command("emote takes off his sunglasses and looks at you directly.");
        mob.Command("say You want to know what it's like? It's like sweeping a floor for twenty dollar a week because the alternative is jail.");
        mob.Command("say It's like being the smartest person in the room and nobody asking your opinion.", 2.0);
        mob.Command("say It's like being invisible and too visible at the same time. That's what it's like.", 4.0);
        return true;
    }

    if (question.indexOf("ignatius") >= 0 || question.indexOf("green hat") >= 0 || question.indexOf("reilly") >= 0) {
        mob.Command("emote almost smiles.");
        mob.Command("say That big dude with the green hat? He something else, man.");
        mob.Command("say Walking around hollering about his valve like he the only person in the world with problems.", 2.0);
        mob.Command("say At least he funny. Most people around here just sad.", 4.0);
        return true;
    }

    if (question.indexOf("smoke") >= 0 || question.indexOf("cigarette") >= 0) {
        mob.Command("emote takes a long drag and exhales slowly.");
        mob.Command("say The smoke? It's a comfort. Also it drives Lana Lee crazy.");
        mob.Command("say Sometimes the small rebellions is all you got.", 2.0);
        return true;
    }

    if (question.indexOf("night of joy") >= 0 || question.indexOf("bar") >= 0) {
        mob.Command("say The Night of Joy. Now there's a name that's a lie.");
        mob.Command("say Ain't no joy in this place. Just watered-down drinks and whatever Lana running in the back.", 2.0);
        mob.Command("say But it's a job. And I need a job. So here I am, sweepin.", 4.0);
        return true;
    }

    var defaults = [
        "say Woah. You askin me things like I got time to chat. I'm sweepin here.",
        "say I got opinions on everything. But nobody payin me for opinions. They payin me — barely — for sweepin.",
        "emote blows a cloud of smoke and watches it drift toward the ceiling."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
