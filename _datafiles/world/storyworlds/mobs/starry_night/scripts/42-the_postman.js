
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("vincent") >= 0 || question.indexOf("painter") >= 0 || question.indexOf("artist") >= 0) {
        mob.Command("say Monsieur Vincent? Ah, he is a strange one, but I like him.");
        mob.Command("say He painted my portrait six times! My wife's too, and the children. He says my beard has 'magnificent color.'");
        mob.Command("emote strokes his enormous beard proudly.", 2.0);
        mob.Command("say The other people in Arles, they think he is mad. But I think he sees things the rest of us miss.", 3.5);
        return true;
    }

    if (question.indexOf("mail") >= 0 || question.indexOf("letter") >= 0 || question.indexOf("post") >= 0) {
        mob.Command("say The mail! Yes, I deliver it faithfully, every day.");
        mob.Command("say Monsieur Vincent receives many letters from his brother in Paris. And he sends just as many back.");
        mob.Command("say A man who writes so many letters has much to say. I respect that.", 2.0);
        return true;
    }

    if (question.indexOf("village") >= 0 || question.indexOf("arles") >= 0) {
        mob.Command("say Arles is a good town. Simple people, good wine, fine weather.");
        mob.Command("say The light here is special — even a postman can see that. Everything glows.");
        return true;
    }

    if (question.indexOf("star") >= 0 || question.indexOf("sky") >= 0 || question.indexOf("night") >= 0) {
        mob.Command("say The sky tonight? It is... unusual. More so than normal.");
        mob.Command("say Vincent would say it is alive. I just say it is a good night for stargazing.");
        mob.Command("emote looks up, his beard silhouetted against the swirling stars.", 2.0);
        return true;
    }

    if (question.indexOf("studio") >= 0 || question.indexOf("hidden") >= 0 || question.indexOf("paint") >= 0) {
        mob.Command("say Vincent's studio? He keeps to himself mostly. Works at all hours.");
        mob.Command("say I have heard there is a place he works in the village, behind the cafe somewhere. In the alleys, perhaps.");
        mob.Command("emote lowers his voice.", 2.0);
        mob.Command("say If you look carefully in the darker parts of the village, you might find where the light seeps out from under a door.", 3.5);
        return true;
    }

    var defaults = [
        "say I am a simple postman. Ask me about the mail, about Vincent, or about our village.",
        "say What can old Roulin tell you? I know the roads, the people, and the best wine in Arles.",
        "say Ask me about Vincent — I could tell you stories about that painter all night."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}
