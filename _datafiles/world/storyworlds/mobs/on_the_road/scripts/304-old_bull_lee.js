
// Old Bull Lee - languid, dangerous, knows things. Based on Burroughs.

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("road") >= 0 || question.indexOf("travel") >= 0 || question.indexOf("journey") >= 0) {
        mob.Command("emote turns a page without looking up.");
        mob.Command("say The road. Yes. Dean's religion. The American religion. The belief that motion is meaning and distance is virtue.", 1.5);
        mob.Command("say I have been stationary in New Orleans for two years and I have learned more about the nature of things than Dean has learned crossing the continent six times.", 3.0);
        mob.Command("say But I understand the pull. The road is a drug. All the best things are drugs.", 4.5);
        return true;
    }

    if (question.indexOf("drug") >= 0 || question.indexOf("heroin") >= 0 || question.indexOf("morphine") >= 0 || question.indexOf("junk") >= 0) {
        mob.Command("emote looks up from his book for the first time.");
        mob.Command("say I have conducted extensive research in this area. The conclusions are not cheerful but they are accurate.", 1.5);
        mob.Command("say The body learns what it needs and it needs more. That is the law. Everything that feels like freedom has a price and the price compounds.", 3.0);
        mob.Command("say I am aware of the irony. I proceed anyway. This is called free will.", 4.5);
        return true;
    }

    if (question.indexOf("dean") >= 0 || question.indexOf("moriarty") >= 0) {
        mob.Command("emote sets his book down and considers.");
        mob.Command("say Dean is a force of nature in human form. Forces of nature are not moral or immoral. They are simply what they are.", 1.5);
        mob.Command("say I find him exhausting. I also find him interesting. In my experience these two things are often the same person.", 3.0);
        return true;
    }

    if (question.indexOf("burroughs") >= 0 || question.indexOf("write") >= 0 || question.indexOf("book") >= 0) {
        mob.Command("emote looks at you with flat attention.");
        mob.Command("say I am not aware of writing any books. I am conducting research. The distinction matters.", 1.5);
        mob.Command("say However. If I were to write a book, it would be about the things I have learned. The cost of them. The accuracy of them.", 3.0);
        mob.Command("say It would not be a comfortable book.", 4.5);
        return true;
    }

    if (question.indexOf("guns") >= 0 || question.indexOf("shoot") >= 0 || question.indexOf("pistol") >= 0) {
        mob.Command("emote produces the pistol and examines it.");
        mob.Command("say Guns are useful for thinking about death. The weight of one in your hand is a clarifying experience.", 1.5);
        mob.Command("say I shoot tin cans. I am not dangerous.", 3.0);
        mob.Command("emote shoots a can off a fence rail without appearing to aim. The can disappears.", 4.5);
        return true;
    }

    if (question.indexOf("new orleans") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("say New Orleans is a good city for this kind of work. It is not interested in what you are doing in private.", 1.5);
        mob.Command("say The climate promotes a certain philosophical resignation. And the food is acceptable.", 3.0);
        return true;
    }

    var defaults = [
        "say I have a theory about that. Several theories. They are in conflict.",
        "emote regards you with the cool attention of a scientist observing a specimen that has become aware of being observed.",
        "say The most interesting things are always the things people do not want to discuss."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {

    return false;
}
