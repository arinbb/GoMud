function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("shazam") >= 0) {
        mob.Command("say SHAZAM!");
        mob.Command("emote beams at you with the full power of a man for whom this is a complete sentence.", 1.5);
        mob.Command("say That is my word when something is just -- well, when it is just something, you know? You cannot always say what something IS, exactly. But shazam gets the point across.", 3.0);
        mob.Command("say Goober says I say it too much. I do not think you can say shazam too much.", 5.5);
        return true;
    }

    if (question.indexOf("golly") >= 0 || question.indexOf("surprise") >= 0) {
        mob.Command("say Surprise surprise surprise!");
        mob.Command("emote seems genuinely delighted that you asked.", 1.5);
        mob.Command("say That is from Sergeant Carter. I am doing an impression of how he sounds when something surprises him. Which I -- well, I am in the Marines now technically. Or I will be. But right now I am here.", 3.0);
        mob.Command("emote thinks about this timeline confusion briefly and decides it is fine.", 6.0);
        return true;
    }

    if (question.indexOf("marines") >= 0 || question.indexOf("military") >= 0) {
        mob.Command("say Oh, I join the Marines! Is that not something?");
        mob.Command("emote finds this remarkable about himself.", 1.5);
        mob.Command("say I will be under Sergeant Carter, who is very strict. But I think it will work out all right.", 3.5);
        mob.Command("say Goober says I am not exactly the military type. I think I might surprise people.", 5.5);
        mob.Command("emote nods with quiet confidence.", 7.0);
        return true;
    }

    if (question.indexOf("gas") >= 0 || question.indexOf("fill") >= 0 || question.indexOf("car") >= 0) {
        mob.Command("emote comes to immediate full attention.");
        mob.Command("say You need a fill-up? I will do that! I will check the oil AND the tires! Goober showed me how to do the tires and it has really improved my whole approach to tires.", 1.0);
        mob.Command("emote is already moving toward the pumps.", 4.0);
        return true;
    }

    // Default: genuine wonder
    var responses = [
        "say Well golly! That is a real interesting thing to think about.",
        "emote looks at you with the open attention of someone who has never learned to be bored.",
        "say Shazam. I do not know the answer to that. But now I am going to be thinking about it all day.",
        "say Is that right? That is just amazing to me. Truly amazing."
    ];
    var pick = Math.floor(Math.random() * responses.length);

    return false;
}
