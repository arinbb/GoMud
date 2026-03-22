
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();
    var user = GetUser(eventDetails.sourceId);

    if (question.indexOf("bike") >= 0 || question.indexOf("bicycle") >= 0) {
        mob.Command("say My bike! My beautiful bike! Someone STOLE it!");
        mob.Command("emote 's face crumples with genuine anguish.", 1.5);
        mob.Command("say It's the most beautiful bike in the whole world. Red with white streamers and a horn that goes HONK HONK!", 3);
        mob.Command("say A fortune teller told me it's in the basement of the Alamo. So that's where I'm headed!", 5);
        return true;
    }

    if (question.indexOf("francis") >= 0 || question.indexOf("buxton") >= 0) {
        mob.Command("say Francis Buxton?!");
        mob.Command("emote 's eyes narrow dangerously.");
        mob.Command("say He's been trying to buy my bike forever. He thinks just because his daddy is rich he can have anything he wants!", 1.5);
        mob.Command("say Well I know HE stole it. I just can't prove it... YET.", 3);
        return true;
    }

    if (question.indexOf("adventure") >= 0 || question.indexOf("journey") >= 0 || question.indexOf("trip") >= 0) {
        mob.Command("say I've been on the most AMAZING adventure! I hitchhiked, rode a train, met a ghost trucker...");
        mob.Command("say I danced on a bar! I hid in the Alamo! I drove through a giant dinosaur!", 2);
        mob.Command("emote bounces on his heels with excitement.", 3.5);
        mob.Command("say And I found out there's no basement at the Alamo. Can you BELIEVE that?!", 5);
        return true;
    }

    if (question.indexOf("breakfast") >= 0 || question.indexOf("machine") >= 0 || question.indexOf("rube") >= 0) {
        mob.Command("say Oh, my breakfast machine! It's a masterpiece of engineering!");
        mob.Command("say A Rube Goldberg contraption that makes the PERFECT breakfast. Eggs, pancakes, toast -- all automated!", 2);
        mob.Command("emote mimes pulling a lever and watching something incredible unfold.");
        mob.Command("say Mr. T cereal is the key ingredient. Obviously.", 4);
        return true;
    }

    if (question.indexOf("large marge") >= 0 || question.indexOf("marge") >= 0 || question.indexOf("trucker") >= 0) {
        mob.Command("emote 's eyes go wide with terror.");
        mob.Command("say Large Marge?! She... she picked me up hitchhiking one night...", 1.5);
        mob.Command("say She told me about the worst accident she ever seen. And then her face... her FACE...", 3);
        mob.Command("emote shudders violently.", 4.5);
        mob.Command("say When I got to the truck stop, they told me Large Marge had been DEAD for ten years!", 6);
        return true;
    }

    if (question.indexOf("alamo") >= 0 || question.indexOf("basement") >= 0) {
        mob.Command("say The Alamo! I went all the way to San Antonio because Madame Ruby said my bike was in the basement!");
        mob.Command("emote throws his hands in the air.", 1.5);
        mob.Command("say THERE'S NO BASEMENT AT THE ALAMO!", 3);
        mob.Command("say The tour guide thought I was CRAZY. But who's crazy? I'm not crazy. YOU'RE crazy!", 4.5);
        return true;
    }

    if (question.indexOf("tequila") >= 0 || question.indexOf("dance") >= 0 || question.indexOf("bar") >= 0 || question.indexOf("biker") >= 0) {
        mob.Command("say Oh, the biker bar! Those bikers were going to KILL me!");
        mob.Command("say But then Tequila came on the jukebox and I just... I had to dance.", 2);
        mob.Command("emote starts doing the Tequila dance, hips swaying, arms pumping.", 3.5);
        mob.Command("say And they LOVED it! They loved the Tequila dance! It saved my life!", 5);
        return true;
    }

    var defaults = [
        "say Hmm, I don't know much about that. But ask me about my bike, my adventure, Large Marge, or the Tequila dance!",
        "say I know you are, but what am I?! Ha ha! But seriously, ask me about my bike or the Alamo!",
        "say That's nice. But have you heard about my BIKE?! Someone STOLE it!"
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("bicycle") >= 0 || showText.indexOf("bike") >= 0 || showText.indexOf("miniature") >= 0) {
        mob.Command("emote 's eyes fill with tears of joy.");
        mob.Command("say My bike! Well, a tiny version of my bike! It's BEAUTIFUL!", 1);
        mob.Command("emote honks the tiny horn over and over, giggling uncontrollably.", 2.5);
        return true;
    }

    if (showText.indexOf("film reel") >= 0 || showText.indexOf("reel") >= 0) {
        mob.Command("say Hey, that's MY movie! I'm a big star, you know!");
        mob.Command("emote strikes a dramatic pose.", 1.5);
        mob.Command("say I did all my own stunts. Well, most of them. Okay, some of them.", 3);
        return true;
    }

    mob.Command("say Ooh, what's that?! Can I see? Can I see?!");
    mob.Command("emote bounces up and down trying to get a better look.", 1);
    return true;
}
