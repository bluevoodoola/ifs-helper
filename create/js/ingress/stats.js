function GetAgentStats(tsv) {
    var lines = tsv.split("\n");
    var headers = lines[0].split("\t");
    var columns = lines[1].split("\t");
    var stats = {};
    for (var iLp = 0; iLp < headers.length; iLp++) {
        var columnname = headers[iLp];
        var columnvalue = columns[iLp];
        var StatDef = StatsDefs.find(e => e.NianticName === columnname && e.AgentStatsName != '');
        if ( StatDef != null ) {
            var Translation = FactionTranslation.find(e => e.NianticName === columnvalue);
            stats[StatDef.AgentStatsName] = Translation != null ? Translation.AgentStatsName : columnvalue;
        }
    }

    stats.Medals = { Bronze: 0, Silver: 0, Gold: 0, Platinum: 0, Onyx: 0};

    for (var member in stats) {
        var stat = StatsDefs.find(e => e.AgentStatsName === member);
        if ( stat != null && "Medals" in stat ) {
            for (var tier in stat.Medals) {
                if ( stats[member] >= stat.Medals[tier] ) {
                    stats.Medals[tier]++;
                }
            }
        }
    }

    stats.level = IngressLevels.sort((a, b) => b.AP - a.AP).find(
            e => stats.ap >= e.AP
            && stats.Medals.Bronze >= e.Medals.Bronze
            && stats.Medals.Silver >= e.Medals.Silver
            && stats.Medals.Gold >= e.Medals.Gold
            && stats.Medals.Platinum >= e.Medals.Platinum
            && stats.Medals.Onyx >= e.Medals.Onyx
        ).Level;

    return (stats);
}

function FilterStatsForIFS(stats) {
    ifs = {};

    for (var member in stats) {
        stat = StatsDefs.find( e => e.AgentStatsName === member && e.IFSInclude === true && e.IFSName != null ) ;
        if ( stat != null ) {
            ifs[stat.IFSName] = stats[member];
        }
    }

    return ifs;
}
