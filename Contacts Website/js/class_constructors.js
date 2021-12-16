// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 }
// ]

// console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@gmail.com',
  location: 'berlin',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
  login(){
    console.log(`${user.name} logged in`);
  },
  logout(){
    console.log('${user.name} logged out');
  },
  logBlogs() {
    console.log(user.blogs);
    this.blogs.forEach(blogs => {
       console.log(blogs.title, blogs.likes);
    })
  }
};

user.logBlogs();

// random numbers
const random = Math.random();

console.log(Math.round(random * 100))

// primitive values 
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;

// reference values

const userOne = {name: 'tyu', age: 30 };
const userTwo = userOne;

