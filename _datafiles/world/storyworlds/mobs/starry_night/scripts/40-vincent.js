
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("star") >= 0 || question.indexOf("sky") >= 0 || question.indexOf("night") >= 0) {
        mob.Command("say The night! Yes! I often think the night is more alive and richly colored than the day.");
        mob.Command("say Look at the sky — do you see how it moves? The stars are not fixed points. They breathe, they turn, they sing.");
        mob.Command("emote gestures passionately at the swirling sky.", 2.0);
        mob.Command("say I painted this from the window of my room at the asylum. But what I saw... what I SAW was more real than what was there.", 3.5);
        return true;
    }

    if (question.indexOf("paint") >= 0 || question.indexOf("art") >= 0 || question.indexOf("work") >= 0) {
        mob.Command("say I must paint. It is not a choice — it is a necessity, like breathing.");
        mob.Command("say I sometimes work so fast the paint flies from my brush. The canvas cannot hold what I feel quickly enough.");
        mob.Command("emote holds up paint-stained fingers.", 2.0);
        mob.Command("say Theo says I use too much paint. Too much! As if there could be too much truth on a canvas.", 3.5);
        return true;
    }

    if (question.indexOf("theo") >= 0 || question.indexOf("brother") >= 0) {
        mob.Command("say Theo... my brother. My only true friend. He sends me money so I can buy paints.");
        mob.Command("say I write to him every week. I tell him everything — what I see, what I feel, what I dream.");
        mob.Command("emote 's voice softens.", 2.0);
        mob.Command("say Without Theo, there would be no paintings. Without Theo, there would be no Vincent.", 3.5);
        return true;
    }

    if (question.indexOf("ear") >= 0 || question.indexOf("bandage") >= 0) {
        mob.Command("emote touches the bandage over his left ear and winces.");
        mob.Command("say That is... a difficult subject. A moment of madness. Of despair.");
        mob.Command("say But even in the darkest moments, there are stars. There are always stars.", 2.0);
        return true;
    }

    if (question.indexOf("village") >= 0 || question.indexOf("provence") >= 0 || question.indexOf("arles") >= 0) {
        mob.Command("say This village — Saint-Remy — it is my refuge and my prison.");
        mob.Command("say The light here! The light of Provence is like nowhere else. It makes the colors burn.");
        mob.Command("say I paint the olive trees, the wheat fields, the night sky. I paint because the beauty demands it.", 2.0);
        return true;
    }

    if (question.indexOf("postman") >= 0 || question.indexOf("roulin") >= 0 || question.indexOf("friend") >= 0) {
        mob.Command("say Roulin! The postman! He is a good man — rough hands but a gentle heart.");
        mob.Command("say He sits for me without complaint, even when I paint his beard five different colors.");
        mob.Command("emote laughs quietly.", 2.0);
        mob.Command("say He does not understand my paintings, but he believes in me. That is worth more than understanding.", 3.5);
        return true;
    }

    if (question.indexOf("cafe") >= 0 || question.indexOf("night cafe") >= 0) {
        mob.Command("say The Night Cafe! I painted it to express the terrible passions of humanity.");
        mob.Command("say The red and the green — they fight each other. That is deliberate. That is the point.");
        mob.Command("say It is a place where one can ruin oneself, go mad, or commit a crime.", 2.0);
        return true;
    }

    var defaults = [
        "say Ask me about the stars, or my paintings, or this village. I will tell you what I see — which is more than what is there.",
        "say I see you looking at me. Everyone looks at me that way. But I tell you — I am not mad. I simply see differently.",
        "say Come, walk with me. I will show you how the light falls on the olive trees. Ask me about anything — the stars, the cafe, my friend the postman."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("vial") >= 0 || showText.indexOf("starlight") >= 0) {
        mob.Command("emote 's eyes widen with wonder.");
        mob.Command("say You captured it! The light of the stars — in a bottle!");
        mob.Command("say This is what I try to do with paint. You have done it with your hands.", 2.0);
        return true;
    }

    return false;
}
