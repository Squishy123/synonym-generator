const fetch = require('node-fetch');

const Search = {
    method: "GET",
    enabled: true,
    path: "/search",
    handler: [
      async (req, res) => {
        let results = await fetch(
          `https://api.datamuse.com/words?rel_syn=${req.params.search}`
        ).then(r => r.json());
        res.render("index", { word: req.params.search, results: results });
        return true;
      }
    ]
}

export default Search;