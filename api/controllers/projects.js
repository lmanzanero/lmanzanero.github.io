const mongoose = require("mongoose");
const Projects = require('../models/Post');

exports.all_projects = (req, res, next ) => {
    res.json(
      [
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },
        {id: 1,
          title: "JavaScript Calculator",
          category: [
            "Web Design",
            "Mobile Development"
          ],
          image_url: "https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg",
          link: "https://lmanzanero.github.io/functional-js-calculator/"
        },

      ]
    );
    //  projects.find()
    //     .then(projects => res.json(projects))
    //     .catch(err => res.status(404).json({ nopostsfound: 'No projects found' }));
}