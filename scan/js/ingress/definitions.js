const IngressLevels = [
    { Level: 2, AP: 2500, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0} }
    , { Level: 3, AP: 20000, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0 } }
    , { Level: 4, AP: 70000, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0 } }
    , { Level: 5, AP: 150000, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0 } }
    , { Level: 6, AP: 300000, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0 } }
    , { Level: 7, AP: 600000, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0 } }
    , { Level: 8, AP: 1200000, Medals: {Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0 } }
    , { Level: 9, AP: 2400000, Medals: {Bronze: 0, Silver: 4, Gold: 1, Platinum: 0, Onyx: 0 } }
    , { Level: 10, AP: 4000000, Medals: {Bronze: 0, Silver: 5, Gold: 2, Platinum: 0, Onyx: 0 } }
    , { Level: 11, AP: 6000000, Medals: {Bronze: 0, Silver: 6, Gold: 4, Platinum: 0, Onyx: 0 } }
    , { Level: 12, AP: 8400000, Medals: {Bronze: 0, Silver: 7, Gold: 6, Platinum: 0, Onyx: 0 } }
    , { Level: 13, AP: 12000000, Medals: {Bronze: 0, Silver: 7, Gold: 7, Platinum: 1, Onyx: 0 } }
    , { Level: 14, AP: 17000000, Medals: {Bronze: 0, Silver: 7, Gold: 7, Platinum: 2, Onyx: 0 } }
    , { Level: 15, AP: 24000000, Medals: {Bronze: 0, Silver: 7, Gold: 7, Platinum: 3, Onyx: 0 } }
    , { Level: 16, AP: 40000000, Medals: {Bronze: 0, Silver: 7, Gold: 7, Platinum: 4, Onyx: 2 } }
];

const StatsDefs = [
    { NianticName: 'Time Span', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Agent Name', AgentStatsName: 'username', IFSName: 'ag', IFSInclude: true }
    , { NianticName: '', AgentStatsName: 'level', IFSName: 'l', IFSInclude: true }
    , { NianticName: 'Agent Faction', AgentStatsName: 'faction', IFSName: 'f', IFSInclude: true }
    , { NianticName: 'Date (yyyy-mm-dd)', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Time (hh:mm:ss)', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Lifetime AP', AgentStatsName: 'lifetimeap', IFSName: 'lap', IFSInclude: true }
    , { NianticName: 'Current AP', AgentStatsName: 'ap', IFSName: 'ap', IFSInclude: true }
    , { NianticName: 'Unique Portals Visited', AgentStatsName: 'explorer', Medals: {Bronze: 100, Silver: 1000, Gold: 2000, Platinum: 10000, Gold: 30000}, IFSInclude: false }
    , { NianticName: 'Portals Discovered', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Seer Points', AgentStatsName: 'seer', Medals: {Bronze: 10, Silver: 50, Gold: 200, Platinum: 500, Onyx: 5000}, IFSInclude: false }
    , { NianticName: 'XM Collected', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'OPR Agreements', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Distance Walked', AgentStatsName: 'trekker', IFSName: 't', Medals: {Bronze: 10, Silver: 100, Gold: 300, Platinum: 1000, Onyx: 2500}, IFSInclude: true }
    , { NianticName: 'Resonators Deployed', AgentStatsName: 'builder', Medals: {Bronze: 2000, Silver: 10000, Gold: 30000, Platinum: 100000, Onyx: 200000}, IFSInclude: false }
    , { NianticName: 'Links Created', AgentStatsName: 'connector', Medals: {Bronze: 50, Silver: 1000, Gold: 5000, Platinum: 25000, Onyx: 100000}, IFSInclude: false }
    , { NianticName: 'Control Fields Created', AgentStatsName: 'mind-controller', Medals: {Bronze: 100, Silver: 500, Gold: 2000, Platinum: 10000, Onyx: 40000}, IFSInclude: false }
    , { NianticName: 'Mind Units Captured', AgentStatsName: 'illuminator', Medals: {Bronze: 5000, Silver: 50000, Gold: 250000, Platinum: 1000000, Onyx: 4000000}, IFSInclude: false }
    , { NianticName: 'Longest Link Ever Created', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Largest Control Field', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'XM Recharged', AgentStatsName: 'recharger', Medals: {Bronze: 100000, Silver: 1000000, Gold: 3000000, Platinum: 10000000, Onyx: 25000000}, IFSInclude: false }
    , { NianticName: 'Portals Captured', AgentStatsName: 'liberator', Medals: {Bronze: 100, Silver: 1000, Gold: 5000, Platinum: 15000, Onyx: 40000}, IFSInclude: false }
    , { NianticName: 'Unique Portals Captured', AgentStatsName: 'pioneer', Medals: {Bronze: 20, Silver: 200, Gold: 1000, Platinum: 5000, Onyx: 20000}, IFSInclude: false }
    , { NianticName: 'Mods Deployed', AgentStatsName: 'engineer', Medals: {Bronze: 150, Silver: 1500, Gold: 5000, Platinum: 20000, Onyx: 50000}, IFSInclude: false }
    , { NianticName: 'Resonators Destroyed', AgentStatsName: 'purifier', Medals: {Bronze: 2000, Silver: 10000, Gold: 30000, Platinum: 100000, Onyx: 300000}, IFSInclude: false }
    , { NianticName: 'Portals Neutralized', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Enemy Links Destroyed', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Enemy Fields Destroyed', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Max Time Portal Held', AgentStatsName: 'guardian', Medals: {Bronze: 3, Silver: 10, Gold: 20, Platinum: 90, Onyx: 150}, IFSInclude: false }
    , { NianticName: 'Max Time Link Maintained', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Max Link Length x Days', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Max Time Field Held', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Largest Field MUs x Days', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Unique Missions Completed', AgentStatsName: 'specops', Medals: {Bronze: 5, Silver: 25, Gold: 100, Platinum: 200, Onyx: 500}, IFSInclude: false }
    , { NianticName: 'Hacks', AgentStatsName: 'hacker', Medals: {Bronze: 2000, Silver: 10000, Gold: 30000, Platinum: 100000, Onyx: 200000}, IFSInclude: false }
    , { NianticName: 'Glyph Hack Points', AgentStatsName: 'translator', Medals: {Bronze: 200, Silver: 2000, Gold: 6000, Platinum: 20000, Onyx: 50000}, IFSInclude: false }
    , { NianticName: 'Longest Hacking Streak', AgentStatsName: 'sojourner', Medals: {Bronze: 15, Silver: 30, Gold: 60, Platinum: 180, Onyx: 360}, IFSInclude: false }
    , { NianticName: 'Mission Day(s) Attended', AgentStatsName: 'missionday', Medals: {Bronze: 1, Silver: 3, Gold: 6, Platinum: 10, Onyx: 20}, IFSInclude: false }
    , { NianticName: 'NL-1331 Meetup(s) Attended', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'First Saturday Events', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Intel Ops Missions', AgentStatsName: '', IFSInclude: false }
    , { NianticName: 'Recursions', AgentStatsName: 'recursions', IFSName: 'r', IFSInclude: true }
];

const FactionTranslation = [
    { NianticName: 'Resistance', AgentStatsName: 'res', IFSName: 'r', color: 'blue' }
    , { NianticName: 'Enlightened', AgentStatsName: 'enl', IFSName: 'e', color: 'green' }
];
