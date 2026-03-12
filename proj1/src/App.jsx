// import Card from "./components/Card";
import Card1 from "./components/Card1";

const App = () => {
  // const data = [
  //   {
  //     photo: "https://randomuser.me/api/portraits/men/1.jpg",
  //     name: "Arjun Patel",
  //     username: "arjunp",
  //     bio: "Tech enthusiast and coffee lover.",
  //     points: 1250,
  //     friends: 340,
  //     joined_at: "January 2023",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/women/2.jpg",
  //     name: "Neha Sharma",
  //     username: "nehash",
  //     bio: "Designer who loves minimal UI.",
  //     points: 980,
  //     friends: 275,
  //     joined_at: "March 2022",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/men/3.jpg",
  //     name: "Rahul Mehta",
  //     username: "rahulm",
  //     bio: "Startup builder and coder.",
  //     points: 1540,
  //     friends: 412,
  //     joined_at: "July 2021",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/women/4.jpg",
  //     name: "Priya Desai",
  //     username: "priyad",
  //     bio: "Travel blogger exploring the world.",
  //     points: 1120,
  //     friends: 380,
  //     joined_at: "November 2020",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/men/5.jpg",
  //     name: "Karan Shah",
  //     username: "karans",
  //     bio: "Full-stack developer and gamer.",
  //     points: 870,
  //     friends: 190,
  //     joined_at: "May 2023",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/women/6.jpg",
  //     name: "Aisha Khan",
  //     username: "aishak",
  //     bio: "Photographer capturing everyday beauty.",
  //     points: 1340,
  //     friends: 421,
  //     joined_at: "February 2022",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/men/7.jpg",
  //     name: "Vikram Singh",
  //     username: "vikrams",
  //     bio: "Fitness coach and nutrition nerd.",
  //     points: 760,
  //     friends: 210,
  //     joined_at: "August 2023",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/women/8.jpg",
  //     name: "Riya Kapoor",
  //     username: "riyakk",
  //     bio: "Marketing strategist and reader.",
  //     points: 1025,
  //     friends: 305,
  //     joined_at: "June 2021",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/men/9.jpg",
  //     name: "Dev Verma",
  //     username: "devv",
  //     bio: "AI explorer building cool tools.",
  //     points: 1680,
  //     friends: 450,
  //     joined_at: "December 2020",
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/women/10.jpg",
  //     name: "Sneha Iyer",
  //     username: "snehai",
  //     bio: "Food lover and home chef.",
  //     points: 890,
  //     friends: 230,
  //     joined_at: "September 2022",
  //   },
  // ];

  const Cdata = [
  {
    id: 1,
    title: "Cute Pikachu",
    subtitle: "Electric Friend",
    description: "A cute cartoon Pikachu holding a teddy.",
    price: "$50",
    badge: "Best Seller",
    brand: "Pokemon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bQJmUE9JgxWCDBXOOGJS_MREVxMN2FDNMA&s"
  },
  {
    id: 2,
    title: "Doraemon Toy",
    subtitle: "Future Cat",
    description: "Blue robot cat from the future.",
    price: "$40",
    badge: "Popular",
    brand: "Doraemon",
    image: "https://i.imgur.com/jTq6F5L.png"
  },
  {
    id: 3,
    title: "Cute Panda",
    subtitle: "Soft Toy",
    description: "Adorable cartoon panda toy.",
    price: "$35",
    badge: "New",
    brand: "Cartoon",
    image: "https://i.imgur.com/2DhmtJ4.png"
  },
  {
    id: 4,
    title: "Happy Totoro",
    subtitle: "Forest Spirit",
    description: "The lovable spirit from the forest.",
    price: "$55",
    badge: "Limited",
    brand: "Ghibli",
    image: "https://i.imgur.com/XVtYkEj.png"
  },
  {
    id: 5,
    title: "Snoopy Smile",
    subtitle: "Beagle Buddy",
    description: "Classic beagle dog with a happy smile.",
    price: "$30",
    badge: "Classic",
    brand: "Peanuts",
    image: "https://i.imgur.com/0Q98IQj.png"
  },
  {
    id: 6,
    title: "Mickey Mouse",
    subtitle: "Disney Legend",
    description: "The iconic Disney character.",
    price: "$60",
    badge: "Best Seller",
    brand: "Disney",
    image: "https://i.imgur.com/lsj1Coq.png"
  },
  {
    id: 7,
    title: "Hello Kitty",
    subtitle: "Cute Kitty",
    description: "Adorable white cat with a red bow.",
    price: "$45",
    badge: "Popular",
    brand: "Sanrio",
    image: "https://i.imgur.com/LfR88Mw.png"
  },
  {
    id: 8,
    title: "Totoro Family",
    subtitle: "Forest Friends",
    description: "Group of cute Totoro spirits.",
    price: "$75",
    badge: "Limited",
    brand: "Ghibli",
    image: "https://i.imgur.com/Vc5VRDX.png"
  },
  {
    id: 9,
    title: "SpongeBob",
    subtitle: "Sea Sponge",
    description: "The optimistic sea sponge from Bikini Bottom.",
    price: "$35",
    badge: "New",
    brand: "Nickelodeon",
    image: "https://i.imgur.com/RTVpT8W.png"
  },
  {
    id: 10,
    title: "Minions",
    subtitle: "Yellow Helpers",
    description: "The silly little helpers from Despicable Me.",
    price: "$50",
    badge: "Popular",
    brand: "Illumination",
    image: "https://i.imgur.com/R4uX3Jl.png"
  },
  {
    id: 11,
    title: "Pokemon Eevee",
    subtitle: "Evolution Friend",
    description: "The adaptable and cute Pokemon Eevee.",
    price: "$42",
    badge: "Best Seller",
    brand: "Pokemon",
    image: "https://i.imgur.com/F4l91Vq.png"
  },
  {
    id: 12,
    title: "Garfield",
    subtitle: "Lazy Cat",
    description: "The famous lasagna-loving cat.",
    price: "$30",
    badge: "Classic",
    brand: "Garfield",
    image: "https://i.imgur.com/lfRoCFC.png"
  },
  {
    id: 13,
    title: "Simba Cub",
    subtitle: "Lion King",
    description: "The young cub from the Pride Lands.",
    price: "$38",
    badge: "New",
    brand: "Disney",
    image: "https://i.imgur.com/c0F3DjX.png"
  },
  {
    id: 14,
    title: "Pusheen Cat",
    subtitle: "Chubby Cat",
    description: "The adorable chubby gray cat.",
    price: "$44",
    badge: "Popular",
    brand: "Pusheen",
    image: "https://i.imgur.com/IM9r8dv.png"
  },
  {
    id: 15,
    title: "Tom and Jerry",
    subtitle: "Famous Duo",
    description: "Classic cat and mouse cartoon duo.",
    price: "$55",
    badge: "Classic",
    brand: "Warner Bros",
    image: "https://i.imgur.com/POQX4dZ.png"
  },
  {
    id: 16,
    title: "Stitch",
    subtitle: "Alien Friend",
    description: "The mischievous alien from Lilo & Stitch.",
    price: "$47",
    badge: "Limited",
    brand: "Disney",
    image: "https://i.imgur.com/j4T4jBh.png"
  },
  {
    id: 17,
    title: "Olaf",
    subtitle: "Snowman Buddy",
    description: "The friendly snowman from Frozen.",
    price: "$40",
    badge: "Popular",
    brand: "Disney",
    image: "https://i.imgur.com/6LuupwV.png"
  },
  {
    id: 18,
    title: "Pikachu Sleepy",
    subtitle: "Electric Friend",
    description: "Pikachu taking a peaceful nap.",
    price: "$48",
    badge: "Best Seller",
    brand: "Pokemon",
    image: "https://i.imgur.com/yRXpMwJ.png"
  },
  {
    id: 19,
    title: "Jerry Mouse",
    subtitle: "Clever Mouse",
    description: "The sneaky mouse from Tom & Jerry.",
    price: "$35",
    badge: "Classic",
    brand: "Warner Bros",
    image: "https://i.imgur.com/VkTKpkn.png"
  },
  {
    id: 20,
    title: "Chipmunks",
    subtitle: "Singing Trio",
    description: "Alvin and friends in cartoon form.",
    price: "$50",
    badge: "Popular",
    brand: "Chipmunks",
    image: "https://i.imgur.com/4TGvX1n.png"
  }
];

  return (
    <>
      <section className="flex flex-wrap justify-center">
        <Card1 name={Cdata} />
        {Cdata.map(function (cartoon){
          return <Card1 cdata={cartoon}/>
        })}
        {/* <Card name={data}/> */}
        {/* {data.map(function (user) {
          return <Card data={user} />;
        })} */}
      </section>
    </>
  );
};

export default App;
