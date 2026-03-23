
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("food") >= 0 || question.indexOf("cook") >= 0 || question.indexOf("recipe") >= 0 || question.indexOf("menu") >= 0) {
        mob.Command("say Tonight I have a braise. Short ribs, six hours, red wine, the good wine. Not the house wine.", 1.0);
        mob.Command("emote gestures toward the kitchen with the spoon he is still holding.", 2.5);
        mob.Command("say My grandmother's recipe but I adjusted it. She would have opinions about my adjustments.", 4.0);
        mob.Command("say She would be right. But I made the adjustments anyway.", 5.5);
        return true;
    }

    if (question.indexOf("tony") >= 0 || question.indexOf("soprano") >= 0) {
        mob.Command("say Tony is my oldest friend. Since we were kids in the neighborhood.", 1.0);
        mob.Command("emote 's expression becomes carefully composed.", 2.5);
        mob.Command("say He's a loyal friend. Always has been.", 4.0);
        mob.Command("emote does not mention the fire. He never mentions the fire.", 5.5);
        return true;
    }

    if (question.indexOf("fire") >= 0 || question.indexOf("old vesuvio") >= 0 || question.indexOf("insurance") >= 0) {
        mob.Command("emote goes very still for a moment.");
        mob.Command("say The original Vesuvio burned down in 1995. We rebuilt.", 2.0);
        mob.Command("emote is a man who has decided something and does not revisit it.", 3.5);
        mob.Command("say Tony helped with the rebuild. He was very generous.", 5.0);
        return true;
    }

    if (question.indexOf("business") >= 0 || question.indexOf("restaurant") >= 0 || question.indexOf("money") >= 0) {
        mob.Command("say You know what a restaurant is? It is a machine for losing money very slowly while creating beauty.", 1.5);
        mob.Command("emote waves the spoon philosophically.", 3.0);
        mob.Command("say I do it anyway. What choice do I have? This is what I am.", 4.5);
        return true;
    }

    var defaults = [
        "say You eaten? Sit down. I'll bring you something.",
        "emote looks at you with the slightly distracted expression of someone mentally in the kitchen.",
        "say The secret to Italian cooking is time. You cannot buy time. You can only spend it."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote examines it with a cook's interest in materials and quality.");
    mob.Command("say That's well made. I respect things that are well made.", 1.5);
    return true;
}
