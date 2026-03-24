function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("gramps") >= 0 || question.indexOf("inventor") >= 0 || question.indexOf("old") >= 0) {
        mob.Command("emote turns from the instrument bank.");
        mob.Command("say The old fool. Yes. He is here. He is comfortable. He has paper to write on. I am not unkind.", 1.5);
        mob.Command("say He would not see reason. I offered him a partnership on my terms. He refused.", 2.5);
        mob.Command("say He wanted Tonetown to remain chaotic. I want it to work. These are not compatible positions.", 3.5);
        mob.Command("emote turns back to his chart.", 4.5);
        return true;
    }

    if (question.indexOf("tass") >= 0 || question.indexOf("color") >= 0 || question.indexOf("style") >= 0) {
        mob.Command("emote turns to face you with the expression of a man who has given this speech before.");
        mob.Command("say Tass is a disease. A cultural pathology that tells people their most extreme impulses are correct.", 1.5);
        mob.Command("say A city where everyone is simultaneously performing maximum individuality is a city of noise.", 2.5);
        mob.Command("say Order. Predictability. Calm surfaces. These are values. They are not the enemy of creativity.", 3.5);
        mob.Command("say They are the conditions under which creativity becomes useful rather than merely loud.", 4.5);
        return true;
    }

    if (question.indexOf("plan") >= 0 || question.indexOf("ray") >= 0 || question.indexOf("device") >= 0) {
        mob.Command("emote does not look up from the instruments.");
        mob.Command("say The untass ray neutralizes the chromatic resonance that produces the tass effect.", 1.5);
        mob.Command("say At full coverage, the city normalizes. People stop performing. They simply -- are.", 2.5);
        mob.Command("say A Tonetown where nobody is judged for being ordinary is a better Tonetown.", 3.5);
        mob.Command("emote makes a small adjustment to the ray's angle.", 4.5);
        return true;
    }

    if (question.indexOf("hoop") >= 0 || question.indexOf("portal") >= 0) {
        mob.Command("emote's expression is the first complicated thing you have seen on his face.");
        mob.Command("say The hoop was my work too. Equally. The history that says otherwise has been written by Gramps.", 1.5);
        mob.Command("say I wanted to control access. A managed gateway is a safe gateway.", 2.5);
        mob.Command("say An uncontrolled portal between dimensions, operated by one old man from a cabin, is not engineering. It is a hazard.", 3.5);
        mob.Command("emote turns back to his instruments.", 4.5);
        return true;
    }

    var defaults = [
        "say I have work to do. The instruments require constant monitoring.",
        "emote makes a note in his chart without looking at you.",
        "say If you have come to argue about tass, I have had this argument. I won it. The data is on the wall."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("shades") >= 0 || showText.indexOf("sunglasses") >= 0) {
        mob.Command("emote looks at the sunglasses with the specific weariness of a man who expected this.");
        mob.Command("say You went to the market. Of course you did.", 1.5);
        mob.Command("say The market will be closed in six months when the neutralization is complete. Until then.", 2.5);
        mob.Command("emote turns back to his work.", 3.5);
        return true;
    }

    mob.Command("emote looks at what you are showing with the neutrality of a man who has decided not to be affected by objects.");
    mob.Command("say Interesting. A souvenir. People do like their souvenirs.", 1.5);
    return true;
}
