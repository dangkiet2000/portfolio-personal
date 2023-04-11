import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  aribnbclone,
  bg_90s,
  marketing,
  music,
  reddit,
  nextjs,
  noteapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ReactJs Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: mobile,
  },
  {
    title: "NodeJS Basic",
    icon: backend,
  },
  {
    title: "Java Basic",
    icon: creator,
  },
  {
    title: "HTML",
    icon: creator,
  },
  {
    title: "CSS",
    icon: creator,
  },
  {
    title: "MONGODB",
    icon: creator,
  },
  {
    title: "SQL",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "CÔNG TY TNHH FBI LOGISTICS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Tháng 4/2022  ->  Tháng 2/2023",
    points: [
      "Sử dụng NextJs và các công nghệ liên quan để xây dựng giao diện website bán hàng.",
      "Sử dụng ReactJs và các công nghệ liên quan để xây dựng giao diện website giới thiệu cho bộ phận Marketing trong công ty.",
    ],
  },
];

const projectsData = [
  {
    title: "Website bán hàng 90S - 90s.vn",
    link: "https://90s.vn/",
    company_name: "CÔNG TY TNHH FBI LOGISTICS",
    icon: backend,
    iconBg: "#383E56",
    date: "7 Người (3 frontend và 4 backend)",
    points: [
      "Mô tả: Website cho phép bộ phận Marketing giới thiệu các dịch vụ, tin tức đến với khách hàng",
      "Công nghệ Front end: NextJs + Typescript + Tailwindcss + Material UI + GraphQL.",
      "Công nghệ Back end: NodeJS + ExpressJs + MongoDB.",
      "Nhiệm vụ của tôi trong dự án (Phần Front end): ",
      "Xây dựng các giao diện của website dựa trên bản thiết kế ở figma",
      "Xây dựng chức năng thêm địa chỉ shop, user (Lấy data của các tỉnh và huyện ở Việt Nam từ API)",
      "Xây dựng chức năng nhắn tin bằng văn bản, hình ảnh, video ở phía front end.",
      "Làm thêm một số chức năng như tìm kiếm, lọc sản phẩm, thống kê doanh thu bằng chart...",
      "Xây dựng chức năng share sản phẩm lên facebook.",
    ],
  },

  {
    title: "Website Marketing (mfmarketing.vn)",
    link: "https://mfmarketing.vn/",
    company_name: "CÔNG TY TNHH FBI LOGISTICS",
    icon: backend,
    iconBg: "#383E56",
    date: "2 Người (1 frontend và 1 backend)",
    points: [
      "Mô tả: Website cho phép bộ phận Marketing giới thiệu các dịch vụ, tin tức đến với khách hàng",
      "Công nghệ sử dụng Front End: : ReactJs + Tailwindcss + Redux Toolkit + Axios và các công nghệ liên quan.",
      "Nhiệm vụ của tôi trong dự án (Phần Front End): ",
      "Xây dựng tất cả các giao diện website trong dự án dựa trên bản thiết kế ở figma (Có Responsive cho website)",
      "Xây dựng chức năng soạn thảo bài viết, nội dung dịch vụ: Dùng thư viện jodit-react để admin có thể soạn thảo các tin tức, bài viết giới thiệu dịch vụ",
      "Dùng thư viện axios để thao tác với API làm các chức năng như CRUD dữ liệu, login",
      "Dùng Redux Toolkit để quản lí tập trung toàn bộ dữ liệu của website",
    ],
  },

  {
    title: "Website Airbnb clone",
    link: "https://dvk-airbnb-clone.vercel.app/",
    company_name: "#TỰ LÀM ĐỂ NÂNG CAO KIẾN THỨC.",
    icon: backend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Công nghệ sử dụng: NextJs + Tailwindcss + MongoDB + Prisma + NextAuth",
      "Login qua email, google github sử dụng next-auth",
      "Create, Delete, Update, Read Listing, Reservation",
      "Thêm các tính năng như like, map, range date",
      "Filter cho các Listings",
    ],
  },
  {
    title: "Website nghe nhạc",
    link: "https://dvk-lyriks.netlify.app/",
    company_name: "#TỰ LÀM ĐỂ NÂNG CAO KIẾN THỨC.",
    icon: backend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Công nghệ sử dụng: ReactJs + Tailwindcss + Redux Toolkit + Axios",
    ],
  },
  {
    title: "Website mạng xã hội reddit-clone",
    link: "https://reddit-clone-dvk.vercel.app/",
    company_name: "#TỰ LÀM ĐỂ NÂNG CAO KIẾN THỨC.",
    icon: backend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Công nghệ sử dụng: NextJs + Chakra UI + Recoil + Firebase.",
      "Có Responsive cho giao diện website",
      "Signup, Login bằng email or google.",
      "Tạo các Community, Post.",
      "Comment, Vote Post.",
      "Join/Leave Community.",
    ],
  },
  {
    title: "Website Note app",
    link: "https://note-app-dvk.netlify.app/",
    company_name: "#TỰ LÀM ĐỂ NÂNG CAO KIẾN THỨC.",
    icon: backend,
    iconBg: "#383E56",
    date: "",
    points: [
      "Công nghệ sử dụng: ReactJs + Material UI + NodeJS + MongoDB + GraphQL",
      "Các chức năng chính: Login, Tạo Folder, Tạo và Cập nhật Note",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "90s",
    description: "Website bán hàng",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "material UI",
        color: "blue-text-gradient",
      },
    ],
    image: bg_90s,
    source_code_link: "https://github.com/",
    link: "https://90s.vn/",
  },

  {
    name: "Marketing",
    description: "Website cho bộ phận Marketing",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: marketing,
    source_code_link: "https://github.com/",
    link: "https://mfmarketing.vn/",
  },
  {
    name: "Spotify clone",
    description: "Website nghe nhạc",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/dangkiet2000/spotify-clone",
    link: "https://dvk-lyriks.netlify.app/",
  },
  {
    name: "Reddit clone",
    description: "Website mạng xã hội",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: reddit,
    source_code_link: "https://github.com/dangkiet2000/reddit-clone",
    link: "https://reddit-clone-dvk.vercel.app/",
  },
  {
    name: "Airbnb clone",
    description: "Website cho phép đặt phòng, tạo phòng",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "pink-text-gradient",
      },

      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: aribnbclone,
    source_code_link: "https://github.com/dangkiet2000/airbnb-clone",
    link: "https://dvk-airbnb-clone.vercel.app/",
  },
  {
    name: "Note app",
    description: "Website cho phép tạo, cập nhật ghi chú",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: noteapp,
    source_code_link: "https://github.com/dangkiet2000/note-app",
    link: "https://note-app-dvk.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  projectsData,
};
