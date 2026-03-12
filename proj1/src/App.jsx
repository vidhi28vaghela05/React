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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RD5VIFE0xBAL9CU627HXf421RTVsl7_YuQ&s"
  },
  {
    id: 3,
    title: "Cute Panda",
    subtitle: "Soft Toy",
    description: "Adorable cartoon panda toy.",
    price: "$35",
    badge: "New",
    brand: "Cartoon",
    image: "hdata:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXEhUVFRUVFRUVFRUWFRUXFhUVFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislHx8tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0rLSstLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIFAgIGCAMHBQAAAAABAAIDBBEFEiExUQZBE2EHInGBkaEUIzJCscHR8DNS4RVDYnKCkvEWc6Ky0v/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAoEQACAgICAgEEAQUAAAAAAAAAAQIRAyESMRNBUQQiMmEUcYGhwfD/2gAMAwEAAhEDEQA/AHmtTrWJULLq0pKK/Zam6NZViIpQjWiGFnhR56AjsuUxaKbKlBqflZqiDVRMVoQGoWTuVANREobARhqdDUeVMIxAagGpzKlNaiKN5ULJ8MQyI2BjAajyp3IjyIijORLaEvKjyphWIyoAJzKhlXCMbshlTuVDKmJsbsgGpwNR5V1iMbyoZU7ZDKmJsbyosqdshlREYzlRp3KgiKQKCK5WtwykCy+GlbHDJBZePkbPpHpE5tOLKJW0osrJrlHq3CykmTTdmMroLFRMqs8SNym6PDnP12bvc9xexstSlS2M0Qg1Cyt3U8EX8R9z8Bumm4jRbEjz/fuXLKvQrjRADUeVWxpYpBeF45A/fuUJ0VtCqxlZJkfIlNYpdNROkIDR3tfstBhmB5HEuN9rfmhLIogoz9HQvkuGjUC+qXHhcjr+rqOy2bYmtN7C9rad0A4DVR87A0YPwDYm22/v0/EJORbh9LGb3A1Fvnf8UwcHhPbzVP5C+BeJj8iGRaWTp4aWd7VTz0bmGxB/oqxyRl0I1RCyIZFMp6UvNh7z2ARVWI0sB1OZw/dv3yullSBHG5dEXKiyJp/WEA+6PgnqbquCSwc0fBcst+gSw0uww1AtVjFTxyC8blGmhLdxZVUkzNJUR8iLKnsqLKnsmxqyGVOZUMqaybG8qCcyo11gKeE5SryhrLKkeU5G4heZJWfTmsjxBMVVbdUbJilF5OiRQoWiZT0/iu1+yN9bKF1J1AI25GaW04UzFZxTw5QbOOpXLcbxEkkkqM58nQ6VKxdfir3nVx+KrJql3KqZqskp9kuZq5Nok3ZaYfj8kJuHHjfsuv8ASdYKuJjpG2sbg/zDgrnPQ3Q5qSJpdI76NIPrDn4rtmH0DY2gNAA8horSzWqIcKdkqmjawWa0BCSfhFImHHVRs5ITUTntwmDIfySpAoxdqPfZMmGiV41u6MVSra2ptYbk6AJp0xI0v2/YTpWIy4FYkurmHRwBvv7FRySEf1UdzyeVaOOyTlRF60xxtPFaHc6k8AC35hclqsVc8kk6rqdfStkBD2hw4PyXN+penxA3OzYb8uJO6EsbTKRyKqRXfSfNIOJEbFU0tV2CZbMU0ItHSdnQOn+pXsIBcbaX1XU6CvjqWCx1t3Xnmmntqt50hi7w5rQ6wvqVoj939THlhW0dJdFZILVMe4OaHg3BATBCZMysj2SmsSi1G1OKweEgl50EtsOilkZqkgIB10oBYD6eg2hTMMhLpBtprqozWqfhRtI3z0XSemBlN1xUG9u1lynGJNV1Lrhln7W0+K5fi0Wqxx7Dk6RUgrbej3pX6a/O8fVNOupGY8ez3rLYNhT6mZkLAbuOptsL6kr0p01g7KaFkbRsBc2AueTZNJ26I3SJdBQtjaGtAAA0AUwo0h5RI3Yy8pl2/uTrymnmyUZDcpsFWEuJPHbnU2/JWFQ0kAeYuok8lpCPL4eaeIGNOgAu5xubfC/CYkqD9xpIvvz7EJvrHkA2YB6x5PHsTb6kB1mgnL2Gnz7BVQjE1Ejh9ofJR2SJqaue87adgizHS/w7f1WmHRnmG625144UGtpA8EEdv3dWLXC2yNzQR+St2S6ON9VdPGJ2cH1SdrbFZx8K7ZjmHCRhBF1ynF6PwXlp147JGi8JJrZVwOWiwGYhwtys5ENVosBju4e0IwX3CZPxO3YG4ug18lJ8IpfTdLaFt+4HdW30cISmk2jE4toonNTTgriopQq2VllSMrIu12R0EuyCcFlMnYwnHRo2tXnWfW0ANTsJsQb7EIAJQC4A31tS52iRuvq6nsuT4pDuu3QBskZjfbyWHxzpNweANQ5wFxwSsklxYO1XwPeh7p+2aqdb1vVZoDYA6m+4XWmtUHA8NbTwsjbs1oGu58yp5KZL2ZJyt6EvKjvehUTBoJJsBuTssjiHXlHG7LnLvNouEGzoo1Lk09yrcF6hp6oXhfcjdp0cPaFYvC4YafLYe5VxhLnZnHZvx1ICmVAVfUS6WHf8v+VSIrI7yGtJO3YfIe9RzLZtu59/ySJlm8Z6pjhcWj1nDcdh5HzV6Js0hk00GvKbJ5+SxEfX2vrR6eRWhwzqCCf7Dtf5TuqRYkkXUZHHxTzWXUVjlKjcqpkZIEsFwuf9eYKS3O1tyPwXSYW3TeI4QJWlpG4TWTTpnnmONbLoyhL5GgDup3/QFQJi3JZmbR3axXQ+munY6QAmznfJNajsM5WqNRQU+RjW+XKk2UaKe+6cMixu7EtUJlCp6oaqzmlVVUPWjEZsm2MWQRIK5PiQQnGhIYFIa1eWmfXsSGpbQlhqUGo2KxUYVnh5JcBuoEbVc4PFu5LIjkdItFHq5gxpc4gAC5J7KQVz/wBJeMlrRA02J1db5BSk6M0FbMf1x1bJUOLGnLECQBsXW7lYZ8uqfrpdVVOn1XRRVsusKxF8EjZYzZzTfyI7tPkV3/D6ts0TJW/ZewOHvGy84U0t9PxXafRdV56LJ3ikc33OOcf+3yQZxo6kaKpqTb4K4qVR1hVcYkil6jrvBgfINw2zfaTYfiuPVEt+/t810L0j1WWBjB96T5NBP5hcuml1V6JjxdqnI5C0gg2I2IRUdG+X+G5jja+S9nfNJIIJa5paRuCLELmqOOjdIdT+JaKU+t2PY2/NbSJy4TBIWkOabEa3XUuksdFQwNd9sb7a+aeMrJzibSlerqkF1QUp81eUbk8+jN7LCqZ6miqHK9Au23kqOQWJHmp4n6DlXTEh9kvxymSkkq1EGhT5FGkKW4ptxVEqJtDSCOyNMChtkafaEoNR5V5SPrGFZGAlAI7JhGKYFoMPBDdRb3KhjC0NKfVCWTM+foKsqAxpcewJXCeqsQMsr3k3uTbyHZdf6tkLad9j5fFcPxk78qPcgQVRsz1U5znBjNSSAANySum9P9BU/i/Q5H5ZG07JamRpAe50l8sEZP2GNAzOI1dcXNtFg+kZ4mYhA+Y/ViTUnYH7pPvstT6WqGRlaZ2F2WZjXMe02DgGBrmgg7jLe3DgqdC1Zj8fhihqHxxWsxxDXD71uV030PS3bUAbHwnD3hwXHZWu3IO/cHVd59EWAvhpvElBaZA2wO+Vt7H4ldP0C6s01TGbLP4iwjstJi2O01N/Ffl7aMe/Xg5QbKkf1LS1APgyMeRu3Zw9rSAQnxp2JKWjk/pLm/hD/MfwUPCaPDm4XNLM4Pq3Fwhbc3ZbRtgOdSSexWk62wX6Uz1NHtuQOx8ly192ktc0hw0ItqDwrzVCRdhU73NeHNOUg3Dh2I2/4WyxuBtTSsqmgB4aM1u9jlePcQVkI49QSLDfXv5BbOjkDaVsNvWsSRxmcXW+aPJcWmdwd2ZqOE22UrDK0wyNe0nQ6i6kVAAFgqqU6qcW7HaO34LWCRjXjYgHstJRPXPug8wgbfuTb2Lf0WoWqS0YZ6Ze0jtFW149YqfRKJif2v6fu6zw/IZ7gV7kgpxybK0oi0IKbcE6QkFqdEmMo0rKgiAtRhxTUtG5qvwEl7AV41s97zOzN2RgKbXQZTcKInUi6doNqvaF92hUTSrLDprGx2XMnlVoTj9MZIntFr2NvguE45TkOItsdl6HlCx3UvSkdRdw9Vx7jupPTsXG7VHCn0ysKfFKgR+CZM8W4jeM7Wnlt9W+4raVHo/ff7YRQdFxsN3uLvIKidh8bIfRWDmqlbnF2N1N9QPJt9iV2yGRrQGjSwsAsRgjmQDK0WCGO17iLtcWnsQbFCqYHBydMouuukJXOfJHWExueX+DLcNa57tcrm9rnuL+aq+nuizSyeNJKHvyloDRZjQ61xrqTpusf1RjFYZXROnkcxwFmki1uNuVWuxGsAt481v+4/8AVNCdbKv6VyW2deqGLG9W4CHEStbrs634q46Klc+ljLySbOFybkgOcBcnfRXE0Ydp2WjyWtmbwqOkcyhoGM1I1876J2esAC3NZgEbxwVnqvo0k+q9KocvYGqMlVVl+6bw+F0sgaBqStXD0OSfWk08gtNg2ARQfZGvcnVaIY0iUppFpgsHhsa3TQBamht7/kqekjV/QRKk3oxy2y4pAq2vfdxVhJJkYqd5WfGt2WrVDZRWRowFcjIJrLqTHQkqRQwX1Vk1qlPJWkCOPlsqP7NQVzZBJ5ZDeFBNS02wo3PWFM3MhYnsqWR6sq+a+gVZIFNy3otB0qDifqp0QVfEzVWUQVYseyfBPcWKKojUVCWuETS55s0DVFicd6IVc+26z9XNf/iyg496QYQS1sDnWP2i6w+Fk5hHWtPU/VlmSTsDYh3sUnyW0aIS2lQ2agdim5pLqzPhXDHAXdewtqbC5/BRpsJBkDgS1gbq251PY3+KHkZsWGN9mdb0yyomDifWbchv84IIc0f4hoRzYqHimEs/hRMdmv62YEZT53C1s2EZntyEsAuXHc2A0A8ye/kmXU5IP1pc4aagfNcpfJSKlHUaf+iFh8AhjZG3ZrQFIbOExRwlxcJXWsQBbuOfJCsZGHBubKSTYZt/ZfdU8qI/xZMkvqAo5qAmPoTPvSuHmMv5hPHBozqJ3Ed/sbfBWhlilZ5v1MJ4/wAkOslUuErB0/VUIcWl/cgHyvpstv0dNHWOLWSNuBcjW9vJekopK2zzpNvovaCG5Wkp2BguVEYxsWlrkdykueXHdQnLkGGOtsVU1GY/gozirGOnFk3UUosbJFlitFHEgXSmlR3vsktmVIzsy5HRoqE6KYqTD6q2hVwx4KhPTKYpJxHESPMiS2WKNmKi26NtaZDYLJMnsrbBqjWyx8WabV0aFjAkVMAI80tjkUsgAXIYgwMubK1jjACpYKkB6uGSXCowsEjbrC9eYhlbkvYDfzW7vdcz9JUJBdv7fwSS9FMXs55iVfm9iphUEOBabEEEEbghLqDunMIoTK/yCvFJInezoGF9WPLo2OjabE2edXjNa4bxfuVu4HNcM2YEWvfcaea5K7DpHDKzR2wPHnotbT+NTw0tNCC4AxscbC2QOGfMewy5iT7FnkktHrZNq0v7moo5xIwSAWBBtzbMRf3jX3qhEWV73Bx9Z17HYZb7fFXgItYbW7cDYLI0TJry+M64MrjGARozt7PZvvypvopiW0mv+omV0jbF1xa17+zdVlW2KUNe4B2Sz2Ov8Doddk9RYT4cJY6R0gJJF7AgEAW09hN/NFTYQBE5kYOziATfUkk/MrqS0mV5vx3OPr/Ji8VxJ73Elxt2A0CRh1Q/Uh7h23OoKgV7S1xBFiCk0k1ivTwJHzGeTk22LqsJDTdu3HBWr9HdSYKuJ2wvld5g6KoilzBWmCx/Wtt/MFuUUZG2dtxfQg9ioVPNZwVsYs8djvb5qilGU2PZYJa0XjK0XzXoPdoqFmJFum6e8V0g4ClRS7IFVN6x9qjCZWEtAOxKqpmZTYrTjp9GD6hSXZMjqrKZFjBb3WellsoUtYmnEzwbXRs/7fQWH+llBS4opzn8ktzkIaotNwjfEVFlak4I9CVqZoYOpABqkT49n0CysgTkF0qxIr5UaaGe6sqescO6oKMlW9Ky58kZRVWzTFpmiwl2a7j2VV1tggqYyWfbAOn839Vh+sOuJIHGGndoNzp8AsZ/1xWsdmLyQR37jyUKcloFcZXZU4xTPieWvaWkHYhK6WxWOGceNcRO0c4bs4fbuOf6K1qeqzUfxMjr/wAwFx7wlYVTUk7sj4yHnYtvYrr1TOnBS6Z13DcKpnC7LG49VwNweDdSZMJIuG66a9tFzegpqikcBTvOUbMJuLcd9PwV9R9V1UZ+uizA7EeqSOCDcXWfjP3sOPJkx6TtGnZhj7H1SLD4+So4sFkc43Fhfvp8E7VekVsYBdBJbY2ym3na6qsW6/sC6OAuO4Dnht/gCjJdUV/n5Yp0jQxYAAPXdp3A/VM4vjVFRMOYjPbSNtjIdNLj7o8yucYn11WTx5Q4Q3GzB6w/1O1+FlkKamfZxde7jclxJc7zN9b+1PHG30jFm+qy5e2FiuKunnke5obd1wBqAOwuozH2KcnjDf3qonhOJ0Bst+NcaRLtF5RS3W56Moc8jXn7LTe/J7LndH9XZxbmt2JstTh/XErLBrGADstsZKtmacW+jvNDMofUVPZviD3/AKrO9I9RioaCbNcN2/mtfVNEkTmnuP3qsuWFM6D1RjIpbuHtV+w6LFvnyu32Kt6PGW2sTYqEosrimumXjnqjxKYZk5PirQNCqGrqMxumxPi7F+olFxomTEEKreBmSJKshQDV6rVOSaPPjGmWeQIKF9KQUKZXRqSLqNNTrUswocJ9uEjhT5HtuETC/QSTspcNCeFs24S3hOtw1o7IqaFcIGWp6UjspNU8xQyO4YbfBaMUI4UHqCgzU8gG+U/gkyyuLQ+Ok0cEqpS5rmGxJcHh1tTmAOX3G4UPEJC8MD2mzQG/6Qf0U+RnhgjvcqG991NIaRT1gDXks2vopmB1xZMxxdYB2p8u6Yqo1B7qiVoldM9A4bExzWuBvcA+5WE9A14sQPasZ0DiofA1jQRksLk7ngLoMRFlGqY92jDYt0+Wk22/XZZ+fDMvYhdXLQdFSV9A1xdYK8ZL2TlE507D7XTFTThrST2F1rqqht8FnMfZaP2kBVcklZPiZp9IS3xCW6utb722lvLZKfR5pjHCbt7Ocd7DU34VyWMY0DKC4jUnW3kONLKsncO2h11GikrY7SQzQvBJY63HOyjTRFjyL7JDXASEjQE7ceSfqHhz7+xa47iZmqkaDpevfFI1zTbX9+1dxoKjPAXctP4bLgeEM9Ye1dx6eafAaCdSPknmvsRKrmYyWidc+1MPoHroDsPHCQcPHCmuJXxIwkdI9KkpHWW2NAOEh1AOEVGIviRz6WheUwMNcuhvw8cJp2HDhPURXiRhPoLkFuP7PHCC7hEXwo1wASsyZzoeIvKs9Kh/MhmTHiIjIusFD5eEmSxBB7hR3PSTKjY3E431vgxp53Aj1HnMx34hZR8JC79jdBFUxGKVtwdjsQeQVzSt9G9QHHwZ2ZO2fMD77AhdF0V7OfVzbKqcugzejCtO8sH+6T/5TY9FVX3mhH+8/krRkiTg2zPdMYs6CQa6HQ8LsGF4y1zRc9gfiFhI/RXUDeaP3Byu6Loqqi2qG9vunt70JUxowkjaip9U2KgTVAGa/wC9P6Kvjwiqb/fM/wBp/VMVOCVTtfFj+DglQ3Bi66qbb8llMdfmZcdiL/v3q4n6aqz/AHkX/l+ihSdLVfd0Z5F3fontVQPGzN1c99eVXSyK8xHpmrjvljLx/hsfkqSpwqrG9NN7o3H8AmgyU4teiAHaqVTi5TceHT3/AIEvvjePyV3hWByE3e0tHmDdbccbMky06cpC5447q8xyuqnSxtgbIAy2UtDvtck7KRhUXhizW+0ncq+p3nhakuJC92aqlqxkZnPrZG5v81hm+ad+ks5WeYTwnASsrwL5LeZ/BdGdvKQZW8qouURJXeJfJ3m/Ral4TbnBVZe5F4rk3j/YPL+iyugq3xSgj4zvKi/EqPxFEFuUrOOV5FHp8SQZEkypgyBMvlHK5ROolmVNmRQjMOUQqByn4Bom5kkqL9IHKH0gco8AkkorKN9IHKH0gcoqALJFkRCZ8ccovHHKPE6xwtSfDReOOUXjjlNxBYZiSPBR+MOUXijlFRO5A+jhLbCEjxRyjEw5TKIrbHwAjsmPGHKUJRymSEbJDGDhPCNvAURkw5TwnHKfZGQ8WDhJLBwkGYcovGHKKsShRjHCbcwIGYcpBmHKZWKwnMCae0JT5BymXSjlUVgoPwwgm/FHKCIKJRRFBBeYemxJUWZBBPE4jptGgqHARFBBEAGpRQQTIAQQQQRCGgEaCDAJKIoIIoVhowggmQGElBBBMLINicajQTCAKBQQTIkxJTSNBFAElNvQQRFG0EEFxx//2Q=="
  },
  {
    id: 4,
    title: "Cute Pikachu",
    subtitle: "Forest Spirit",
    description: "The lovable spirit from the forest.",
    price: "$55",
    badge: "Limited",
    brand: "Ghibli",
    image: "https://i.pinimg.com/236x/e0/ce/42/e0ce423a61a8d26eb307538b2be2007b.jpg"
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
