var dateRegex = /(.+) (\d{2}\.\d{2}\.\d{2}) -([^-]*)(?:- (.*))?/;
var episodeRegex = /(.*) E(.*?) -([^-]*)(?:- (.*))?/;

module.exports = ctx => {
    var sceneName = ctx.sceneName;

    var studio, date, actors, name;
    var reResult = dateRegex.exec(sceneName);
    if (reResult){
        date = Date.parse("20" + reResult[2]);
    }
    else {
        reResult = episodeRegex.exec(sceneName);
    }

    if (reResult){
        studio = reResult[1];
        actors = reResult[3].trim().split(", ");
        if (actors[0] == ""){
            actors = null;
        }
        name = reResult[4];
    }

    return {
        name: name,
        description: null,
        releaseDate: date,
        actors: actors,
        labels: null,
        studio: studio
    }
}