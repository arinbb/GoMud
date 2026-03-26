
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("basement") >= 0) {
        mob.Command("emote 's smile becomes very, very patient.");
        mob.Command("say THERE'S NO BASEMENT AT THE ALAMO!", 1.5);
        mob.Command("emote laughs the practiced laugh of someone who has heard this question a thousand times.", 3);
        mob.Command("say I get that question more than you'd think. You'd be surprised how many people show up looking for a basement.", 4.5);
        mob.Command("say There is no basement. There has never been a basement. There will never be a basement. The Alamo is built on a slab!", 6);
        return true;
    }

    if (question.indexOf("alamo") >= 0 || question.indexOf("history") >= 0 || question.indexOf("mission") >= 0) {
        mob.Command("say Oh, I'm SO glad you asked!");
        mob.Command("emote 's eyes light up with genuine excitement.", 1.5);
        mob.Command("say The Alamo was originally built as Mission San Antonio de Valero in 1718.", 3);
        mob.Command("say It served as a fortress during the Texas Revolution. The famous battle lasted thirteen days!", 4.5);
        mob.Command("say Remember the Alamo! That's not just our gift shop slogan, it's HISTORY!", 6);
        return true;
    }

    if (question.indexOf("tour") >= 0 || question.indexOf("guide") >= 0) {
        mob.Command("say I've been giving tours here for seven years and I love every single day!");
        mob.Command("emote waves her little flag.", 1.5);
        mob.Command("say Every tour group is different. Last week a man came in asking if we had a bicycle in the basement.", 3);
        mob.Command("say Ha ha! The basement! Classic!", 4.5);
        return true;
    }

    if (question.indexOf("bicycle") >= 0 || question.indexOf("bike") >= 0) {
        mob.Command("say A bicycle? Here at the Alamo?");
        mob.Command("emote looks genuinely puzzled.", 1.5);
        mob.Command("say We have cannons, muskets, historical artifacts, a lovely gift shop...", 3);
        mob.Command("say But no bicycles. And DEFINITELY not in a basement, because there IS no basement!", 4.5);
        return true;
    }

    if (question.indexOf("gift") >= 0 || question.indexOf("shop") >= 0 || question.indexOf("souvenir") >= 0) {
        mob.Command("say Our gift shop has the BEST selection of Alamo memorabilia in all of San Antonio!");
        mob.Command("say Coonskin caps, replica muskets, Remember the Alamo bumper stickers...", 2);
        mob.Command("emote holds up her little flag proudly.", 3.5);
        mob.Command("say These flags are actually from the gift shop. I bought twelve.", 5);
        return true;
    }

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("bicycle") >= 0 || showText.indexOf("bike") >= 0) {
        mob.Command("say Oh, how adorable! A little bike!");
        mob.Command("say But it's definitely not FROM the Alamo. We don't have bikes here. Or a basement.", 2);
        return true;
    }

    return false;
}
