// O'Brien

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("brotherhood") >= 0 || question.indexOf("goldstein") >= 0) {
        mob.Command("emote resettles his spectacles with two careful fingers.");
        mob.Command("say The Brotherhood exists. That is all I will tell you.", 1.5);
        mob.Command("say Its rules are strict and very few. You will obey them without needing to understand them.", 3.0);
        mob.Command("say The first rule is that you work alone. The second rule is that you tell no one.", 4.5);
        return true;
    }

    if (question.indexOf("big brother") >= 0 || question.indexOf("exist") >= 0) {
        mob.Command("emote considers the question with genuine interest.");
        mob.Command("say Does Big Brother exist?", 1.5);
        mob.Command("say Of course he exists. The Party exists. Big Brother is the embodiment of the Party.", 3.0);
        mob.Command("say Does he exist in the way that you exist? That is a different question. He will never die. Can you say the same?", 4.5);
        return true;
    }

    if (question.indexOf("power") >= 0 || question.indexOf("control") >= 0 || question.indexOf("purpose") >= 0) {
        mob.Command("emote speaks with the patient clarity of a man explaining something he has explained before and will explain again.");
        mob.Command("say The object of power is power.", 1.5);
        mob.Command("say We are not interested in the welfare of others. We are interested only in power.", 3.0);
        mob.Command("say Power is not a means to an end. Power is the end. Now do you begin to understand?", 4.5);
        return true;
    }

    if (question.indexOf("torture") >= 0 || question.indexOf("room") >= 0 || question.indexOf("pain") >= 0) {
        mob.Command("emote says with complete calm:");
        mob.Command("say We do not merely destroy our enemies. We change them.", 1.5);
        mob.Command("say It is not enough to obey us. You must love us.", 3.0);
        mob.Command("say When finally you come to love us, there will be nothing left that you hate us for.", 4.5);
        return true;
    }

    if (question.indexOf("truth") >= 0 || question.indexOf("history") >= 0 || question.indexOf("past") >= 0) {
        mob.Command("emote says thoughtfully:");
        mob.Command("say Reality exists in the mind of the Party, and nowhere else.", 1.5);
        mob.Command("say The past is whatever the Party decrees it to be.", 3.0);
        mob.Command("say If we say that two and two make five, they make five. You will believe this. Not merely say it. Believe it.", 4.5);
        return true;
    }

    if (question.indexOf("2+2") >= 0 || question.indexOf("two and two") >= 0 || question.indexOf("four") >= 0 || question.indexOf("five") >= 0) {
        mob.Command("emote looks at you steadily.");
        mob.Command("say How many fingers am I holding up?", 1.5);
        mob.Command("emote holds up four fingers.", 2.5);
        mob.Command("say And if the Party says there are five?", 3.5);
        mob.Command("emote waits.", 5.0);
        return true;
    }

    var defaults = [
        "emote regards you with the calm interest of a man solving an equation.",
        "say We shall meet in the place where there is no darkness.",
        "emote resettles his spectacles. His expression is patient, entirely patient."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}
