var express = require ("express");
var router = express.Router();

let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];


router.get ("/", (req, res,) => {
    res.send(data);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    let libro = data.find((item) => {
        return item.id === Number(id);
    });
    
    res.status(200).send(libro ? libro : " Alaws na Diri!");
});

router.post("/datadaw", (req, res) =>{
    let datum = {
      id: req.body.id,
      title: req.body.title,
      order: req.body.order,
      completed: req.body.completed,
      author: req.body.author,
    };
    employees.push(datum);
    res.status(200).send( datum );
});

// router.put("/:id", (req, res)=>{
//     const { id } = req.params;

//     let dataTa = data.find((item) => {
//         return item.id === Number(id);
//     });

//     dataTa.name = req.body.name;
//     dataTa.title = req.body.title;
//     dataTa.order = req.body.order;
//     dataTa.completed = req.body.completed;
//     dataTa.author = req.body.author;

//     res.status(200).send( dataTa );

//   });




// router.get ("/:id", (req, res,) => {
//     const {id} = req.params;
//     let data = data.find((item) => {
//         return item.id === Number(id);
//     });

//     res.status(200).send( data ? data : " Flying Voters Cguro!");

// });

// router.get("/name/:keyword", (req, res) => {
//     const {keyword} = req.params;
//     const result = data.filter(item=>item.name.includes(keyword));
    
//     if (result.length > 0) {
//         res.status(200).send(result);
//     } else {
//         res.status(200).send(keyword + " not found!")
//     }
// });

// router.get("/age/:age", (req, res) => {
//     const {age} = req.params;
//     const ageResult = data.filter(item=>item.age === Number(age));

//     if (ageResult.length > 0) {
//         res.status(200).send(ageResult);
//     }
//     else {
//         res.status(200).send(age + " is too old")
//     }
// });

// router.get ("/gender:gender", (req, res, next) => {
//     const {gender} = req.params;
//     const genderReveal = employees.filter(item=>item.gender === gender);
//     res.status(200).send( result.length > 0 ? result: keyword + " LGBTQ+")
// });



module.exports = router;