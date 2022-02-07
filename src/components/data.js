import {FaAndroid,
    FaApple,
    FaWindows,
    FaBug,
    FaEdit,
    FaTable,
    FaChartPie,
    FaSignInAlt,
    FaUserPlus,
    FaHome,

} from 'react-icons/fa';


export const cards=[
    {
      classname:'android',
      icon:<FaAndroid />,
      number:'785K',
      des:'Weekly Sales'
    },
    {
      classname:'apple',
      icon:<FaApple />,
      number:'1.35m',
      des:'New Users'
    },
    {
      classname:'window',
      icon:<FaWindows />,
      number:'1.72m',
      des:'Item Orders'
    },
    {
      classname:'bug',
      icon:<FaBug />,
      number:'234',
      des:'Bug Reports'
    },
  ]


export const tasks=[
    {
      id:0,
      taskname:'Create FireStone Logo',
      isChecked:false
    },
    {
      id:1,
      taskname:'Add SCSS and JS files if required',
      isChecked:false
    },
    {
      id:2,
      taskname:'Stakeholder Meeting',
      isChecked:false
    },
    {
      id:3,
      taskname:'Scoping & Estimations',
      isChecked:false
    },
    {
      id:4,
      taskname:'Sprint Showcase',
      isChecked:false
    },
  ]


export const sliders=[
    {
      url:'/dashboard',
      icon:<FaHome />,
      name:'Dashboard',
    },
    {
      url:'/forms',
      icon:<FaEdit />,
      name:'Forms',
    },
    {
      url:'/tables',
      icon:<FaTable />,
      name:'Tables',
    },
    {
      url:'/charts',
      icon:<FaChartPie />,
      name:'Charts',
    },
    {
      url:'/login',
      icon:<FaSignInAlt />,
      name:'Login',
    },
    {
      url:'/register',
      icon:<FaUserPlus />,
      name:'Register',
    },
]

export const projects = [
    {
        name:'Antonia Reichel',
        nameProject:'Vue Paper UI Kit PRO',
        budgut: 2200,
        status: 'active',
        className:'success'
    },
    {
        name:'Antonia Reichel',
        nameProject:'Argon Design System',
        budgut: 2500,
        status: 'Banned',
        className:'danger'
    },
    {
        name:'Antonia Reichel',
        nameProject:'Black Dashboard',
        budgut: 3150,
        status: 'active',
        className:'success'

    },
    {
        name:'Antonia Reichel',
        nameProject:'React Material Dashboard',
        budgut: 4400,
        status: 'Banned',
        className:'danger'

    }
]