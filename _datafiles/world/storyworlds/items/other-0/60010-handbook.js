
// Handbook for the Recently Deceased
// Readable item - delivers excerpted "text" in bureaucratic afterlife style

EXCERPTS = [
    "",
    "You flip to a random page and squint at the dense text...",
    "",
    "  HANDBOOK FOR THE RECENTLY DECEASED",
    "  Revised Edition — Afterlife Administrative Bureau, Division of Spectral Affairs",
    "",
    "  CHAPTER 1: CONGRATULATIONS ON YOUR DEATH",
    "  Welcome to the hereafter. If you are reading this, you are dead. Do not panic.",
    "  Panic is for the living, who have things to lose. You, on the other hand, have",
    "  already lost everything. This handbook will guide you through the transitional",
    "  period between your former biological existence and your new bureaucratic one.",
    "",
    "  NOTE: This handbook reads like stereo instructions. This is intentional. The",
    "  afterlife is not meant to be user-friendly. It is meant to be comprehensive.",
    "",
    "  SECTION 2.4: GEOGRAPHICAL AND POLITICAL SUBDIVISIONS",
    "  The afterlife is divided into Sectors, each governed by a Regional Caseworker.",
    "  Your assigned Sector is based on cause of death, zip code at time of expiration,",
    "  and a complex formula involving your shoe size. Do not attempt to relocate to a",
    "  different Sector. Form 27-B/6 is required and takes 300 to 400 years to process.",
    "",
    "  SECTION 5.1: REGULATIONS ON HAUNTING THE LIVING",
    "  Haunting is a privilege, not a right. All haunting activities must be filed with",
    "  the Bureau of Spectral Disturbances no fewer than 90 days in advance. Unlicensed",
    "  haunting may result in penalties including (but not limited to) exorcism, forced",
    "  community service in Limbo, or reassignment to the Waiting Room.",
    "",
    "  SECTION 7.3: SANDWORM AVOIDANCE PROTOCOLS",
    "  Under NO circumstances should the deceased venture onto the dusty plains of",
    "  Saturn (see Appendix F: Interdimensional Topography). The sandworms native to",
    "  this region are classified as Extremely Dangerous and are not covered by your",
    "  afterlife insurance policy. If you encounter a sandworm: do not run, do not",
    "  scream, and above all do not smell like fear. They can taste your panic.",
    "",
    "  SECTION 9.9: BIO-EXORCISTS (SEE ALSO: 'FREELANCE TROUBLEMAKERS')",
    "  The Bureau strongly advises against hiring unlicensed bio-exorcists. While their",
    "  services may seem appealing, the Bureau assumes no liability for chaos, property",
    "  damage, interpersonal catastrophes, or involuntary marriages that may result.",
    "  If you have already spoken a bio-exorcist's name three times, please report to",
    "  your caseworker immediately. Do not make eye contact with the bio-exorcist.",
    "",
    "  (The remaining 4,000 pages are printed in a font size visible only to the dead.)",
    ""
];

function onCommand_read(user, item, room) {

    SendRoomMessage(room.RoomId(), user.GetCharacterName(true)+" opens their <ansi fg=\"item\">"+item.Name(true)+"</ansi> and begins reading.", user.UserId());

    SendUserMessage(user.UserId(), "");
    for (var i=0; i<EXCERPTS.length; i++) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">"+EXCERPTS[i]+"</ansi>");
    }

    return true;
}
