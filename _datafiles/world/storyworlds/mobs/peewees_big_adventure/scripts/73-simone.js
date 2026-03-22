
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("paris") >= 0 || question.indexOf("france") >= 0 || question.indexOf("eiffel") >= 0) {
        mob.Command("say Paris... oh, Paris.");
        mob.Command("emote gazes at the postcard with eyes full of longing.", 1.5);
        mob.Command("say I've never been, but I know every street from the postcards. The Seine, Montmartre, the little cafes...", 3);
        mob.Command("say Someday I'll save up enough to get there. Someday.", 5);
        mob.Command("emote touches the faded Eiffel Tower postcard gently.", 6.5);
        return true;
    }

    if (question.indexOf("dinosaur") >= 0 || question.indexOf("cabazon") >= 0 || question.indexOf("work") >= 0 || question.indexOf("job") >= 0) {
        mob.Command("say I work at the gift shop inside the big dinosaurs at Cabazon.");
        mob.Command("say You know, the giant ones you can see from the highway? You can go inside them.", 2);
        mob.Command("emote adjusts her brontosaurus name tag.", 3.5);
        mob.Command("say It's not exactly Paris, but the sunsets here are something else.", 5);
        return true;
    }

    if (question.indexOf("andy") >= 0 || question.indexOf("boyfriend") >= 0) {
        mob.Command("emote 's smile falters slightly.");
        mob.Command("say Andy? He's... he's fine. He just gets jealous sometimes.", 1.5);
        mob.Command("say He doesn't understand why I look at the postcards so much. He says I should be happy with what I have.", 3);
        mob.Command("say But you can love where you are and still dream about somewhere else, right?", 5);
        return true;
    }

    if (question.indexOf("pee-wee") >= 0 || question.indexOf("peewee") >= 0 || question.indexOf("pee wee") >= 0) {
        mob.Command("say Pee-wee? Oh, that strange little man who came through here.");
        mob.Command("emote smiles warmly.", 1.5);
        mob.Command("say He was so kind. He listened to me talk about Paris. Nobody ever listens.", 3);
        mob.Command("say He told me I should follow my dream. Just get on a plane and GO.", 4.5);
        mob.Command("say Maybe he's right. Maybe someday I will.", 6);
        return true;
    }

    mob.Command("say Oh, I'm sorry, I was daydreaming. You can ask me about Paris, or the dinosaurs, or... well, mostly Paris.");
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("bicycle") >= 0 || showText.indexOf("bike") >= 0) {
        mob.Command("say Oh, how cute! A little bicycle. You could ride that all the way to Paris!");
        mob.Command("emote laughs softly.", 1);
        return true;
    }

    mob.Command("say Oh, that's lovely! It reminds me of something you'd find in a little Parisian shop.");
    return true;
}
