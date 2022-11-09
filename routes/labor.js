var express = require ("express");
var router = express.Router();
var cors = require("cors");
var app = express();
app.use(cors());


let labor = [
    {id: 1, name: "Tony Starks", title: "Iron man", gender: "male", age: 38, languages: ["english ", "spanish"]}, 
    {id: 2, name: "Ben Ten", title: "Security consultant", gender: "male", age: 25, languages: ["latin ", "italian"]}, 
    {id: 3, name: "Jessica Alba", title: "Admin Assistant", gender: "female", age: 23, languages: ["english ", "spanish"]}, 
    {id: 4, name: "Pepper Potts", title: "Quality Assurance", gender: "female", age: 32, languages: ["english ", "spanish"]},
    {id: 5, name: "Gilbert Sullivan", title: "Project Manager", gender: "male", age: 27, languages: ["russian ", "english"]},
    {id: 6, name:"Two Dela Cruz", title: "Manager", age: 23, gender: "male", languages: ["russian", "french "]},
    {id: 7, name:"Diego Salvador", title: "Junior Dev", age: 21, gender: "female", languages: ["english ", "french"]},
    {id: 8, name:"Mark Batista", title: "Senior Fullstack Dev", age: 28, gender: "male", languages: ["russion ", "spanish"]},
    {id: 9, name:"Eddie Garcia", title: "CEO", age: 40, gender: "male", languages: ["english ", "latin"]}
];


router.get ("/", (req, res,) => {
    res.send(labor);
});

router.get ("/:id", (req, res,) => {
    const {id} = req.params;
    let union = labor.find((item) => {
        return item.id === Number(id);
    });

    res.status(200).send( union ? union : " Flying Voters Cguro!");

});

router.put("/:id", (req, res)=>{
    const { id } = req.params;
  
    let hr = labor.find((item) => {
        return item.id === Number(id);
    });
  
    hr.name = req.body.name;
    hr.title = req.body.title;
    hr.age = req.body.age;
    hr.gender = req.body.gender;
    hr.languages = req.body.languages;
  
    res.status(200).send( hr );
  
  });
  
  router.post("/:id", (req, res)=>{
    const { id } = req.params;
  
    let hrmanager =labor[labor.length - 1];
    console.log(req.body);
    let unionPresident = {};
  
    unionPresident.id = hrmanager.id + 1;
    unionPresident.name = req.body.name;
    unionPresident.title = req.body.title;
    unionPresident.age = req.body.age;
    unionPresident.gender = req.body.gender;
    unionPresident.languages = req.body.languages;

  
    labor.push(unionPresident);
    res.status(200).send( unionPresident );
  
  });

// router.get("/name/:keyword", (req, res) => {
//     const {keyword} = req.params;
//     const result = labor.filter(item=>item.name.includes(keyword));
    
//     if (result.length > 0) {
//         res.status(200).send(result);
//     } else {
//         res.status(200).send(keyword + " not found!")
//     }
// });

// router.get("/age/:age", (req, res) => {
//     const {age} = req.params;
//     const ageResult = labor.filter(item=>item.age === Number(age));

//     if (ageResult.length > 0) {
//         res.status(200).send(ageResult);
//     }
//     else {
//         res.status(200).send(age + " is too old")
//     }
// });

// router.get ("/gender:gender", (req, res, next) => {
//     const {gender} = req.params;
//     const genderReveal = labor.filter(item=>item.gender === gender);
//     res.status(200).send( result.length > 0 ? result: keyword + " LGBTQ+")
// });

// router.post("labor", (req, res) => {
//     let data = {
//         id:req.body.id,
//         name: req.body.name,
//         title: req.body.title,
//         age: req.body.age,
//         gender: req.body.gender,
//         languages: req.body.languages
//     };

//     res.status(200).send(data);
// });


module.exports = router;