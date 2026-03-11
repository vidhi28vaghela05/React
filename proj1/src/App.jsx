import Card from "./components/Card";

const App = () => {
  const data = [
  {
    "photo": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "Arjun Patel",
    "username": "arjunp",
    "bio": "Tech enthusiast and coffee lover.",
    "points": 1250,
    "friends": 340,
    "joined_at": "January 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Neha Sharma",
    "username": "nehash",
    "bio": "Designer who loves minimal UI.",
    "points": 980,
    "friends": 275,
    "joined_at": "March 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Rahul Mehta",
    "username": "rahulm",
    "bio": "Startup builder and coder.",
    "points": 1540,
    "friends": 412,
    "joined_at": "July 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Priya Desai",
    "username": "priyad",
    "bio": "Travel blogger exploring the world.",
    "points": 1120,
    "friends": 380,
    "joined_at": "November 2020"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "Karan Shah",
    "username": "karans",
    "bio": "Full-stack developer and gamer.",
    "points": 870,
    "friends": 190,
    "joined_at": "May 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/6.jpg",
    "name": "Aisha Khan",
    "username": "aishak",
    "bio": "Photographer capturing everyday beauty.",
    "points": 1340,
    "friends": 421,
    "joined_at": "February 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/7.jpg",
    "name": "Vikram Singh",
    "username": "vikrams",
    "bio": "Fitness coach and nutrition nerd.",
    "points": 760,
    "friends": 210,
    "joined_at": "August 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/8.jpg",
    "name": "Riya Kapoor",
    "username": "riyakk",
    "bio": "Marketing strategist and reader.",
    "points": 1025,
    "friends": 305,
    "joined_at": "June 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/9.jpg",
    "name": "Dev Verma",
    "username": "devv",
    "bio": "AI explorer building cool tools.",
    "points": 1680,
    "friends": 450,
    "joined_at": "December 2020"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/10.jpg",
    "name": "Sneha Iyer",
    "username": "snehai",
    "bio": "Food lover and home chef.",
    "points": 890,
    "friends": 230,
    "joined_at": "September 2022"
  }
];
  return (
    <>
   <section className="flex flex-wrap justify-center">
    {/* <Card name={data}/> */}
  {data.map(function(user){
    return <Card data = {user}/>;
  })}

   </section>
    </>
  );
};

export default App;
