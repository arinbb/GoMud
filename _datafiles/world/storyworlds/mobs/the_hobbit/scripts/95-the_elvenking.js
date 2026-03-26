
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("dwarf") >= 0 || question.indexOf("dwarves") >= 0 || question.indexOf("thorin") >= 0) {
        mob.Command("emote 's expression turns cold.");
        mob.Command("say Dwarves. Wandering through my forest without permission, disturbing the peace of my realm.");
        mob.Command("say What were they doing in Mirkwood? What was their purpose? They would not say.", 2.0);
        return true;
    }

    if (question.indexOf("treasure") >= 0 || question.indexOf("gem") >= 0 || question.indexOf("starlight") >= 0 || question.indexOf("jewel") >= 0) {
        mob.Command("emote 's eyes gleam with desire.");
        mob.Command("say There are gems in the hoard of Erebor that belong to my people. White gems of pure starlight.");
        mob.Command("say They were promised to us long ago by the dwarves, and never delivered. I mean to have what is mine.", 2.0);
        return true;
    }

    if (question.indexOf("forest") >= 0 || question.indexOf("mirkwood") >= 0 || question.indexOf("wood") >= 0) {
        mob.Command("say This forest is my realm. I have guarded it for ages beyond your reckoning.");
        mob.Command("emote gazes upward, as if seeing through the stone to the trees above.");
        mob.Command("say It grows darker of late. Something stirs in the south. The spiders multiply.", 2.0);
        return true;
    }

    if (question.indexOf("spider") >= 0) {
        mob.Command("emote 's jaw tightens.");
        mob.Command("say A shadow falls on the southern reaches of my forest. Great spiders breed there, and worse things besides.");
        mob.Command("say We fight them, but they always return. Something feeds their darkness.", 2.0);
        return true;
    }

    if (question.indexOf("wine") >= 0 || question.indexOf("dorwinion") >= 0 || question.indexOf("drink") >= 0) {
        mob.Command("emote raises his crystal goblet.");
        mob.Command("say Dorwinion wine. The finest vintage in Middle-earth. My people have traded for it since before the sun and moon.");
        mob.Command("say Even a single sip would make you drowsy. My butler is particularly fond of it.", 2.0);
        return true;
    }

    if (question.indexOf("prisoner") >= 0 || question.indexOf("dungeon") >= 0 || question.indexOf("cell") >= 0) {
        mob.Command("say My guests are welcome to leave whenever they wish — provided they answer my questions first.");
        mob.Command("emote smiles thinly.");
        mob.Command("say I am patient. I can wait a very long time.", 2.0);
        return true;
    }

    var defaults = [
        "say You stand in the halls of the Woodland Realm. Mind your manners.",
        "say I have little love for the troubles of the outside world. My concern is my forest and my people.",
        "say Speak carefully, stranger. My patience is not without limit."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

function onShow(mob, room, eventDetails) {
    var showText = String(eventDetails);

    if (showText.indexOf("gem") >= 0 || showText.indexOf("starlight") >= 0 || showText.indexOf("arkenstone") >= 0) {
        mob.Command("emote leans forward on his throne, eyes alight with keen interest.");
        mob.Command("say Where did you come by this? Show me. Bring it closer.", 1.5);
        return true;
    }

    if (showText.indexOf("wine") >= 0) {
        mob.Command("emote raises an eyebrow appraisingly.");
        mob.Command("say Acceptable. But nothing compared to Dorwinion.");
        return true;
    }

    return false;
}
