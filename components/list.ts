//navbar

interface list {
    id: number;
    value: string;
    link:string;
    list?:list[]
  }
interface listMenuHeader {
    id:number;
    value:string;
    type:boolean //true: have dropdown, false: don't have dropdown
    link:string;
    list?:list[];
    width?:number;// use for dropdown 
    height?:number; // use for dropdown
}
 const _listCategory: list[] = [
    {
      id: 1,
      value: "Phim Hành Động",
      link:'#'
    },
    {
      id: 2,
      value: "Phim Tình Cảm",
      link:'#'
    },
    {
      id: 3,
      value: "Phim Hài Hước",
      link:'#'
    },
    {
      id: 4,
      value: "Phim Cổ Trang",
      link:'#'
    },
    {
      id: 5,
      value: "Phim Tâm Lý",
      link:'#'
    },
    {
      id: 6,
      value: "Phim Hình sự",
      link:'#'
    },
    {
      id: 7,
      value: "Phim Chiến Tranh",
      link:'#'
    },
    {
      id: 8,
      value: "Phim Thể Thao",
      link:'#'
    },
    {
      id: 9,
      value: "Game Show",
      link:'#'
    },
    {
      id: 10,
      value: "Phim Chiếu Rạp",
      link:'#'
    },
    {
      id: 11,
      value: "Phim Sắp Chiếu",
      link:'#'
    },
    {
      id: 12,
      value: "Phim Võ Thuật",link:'#'
    },
    {
      id: 13,
      value: "Phim Hoạt Hình",
      link:'#'
    },
    {
      id: 14,
      value: "Phim Viễn Tưởng",
      link:'#'
    },
    {
      id: 15,
      value: "Phim Phiêu Lưu",
      link:'#'
    },
    {
      id: 16,
      value: "Phim Khoa Học",
      link:'#'
    },
    {
      id: 17,
      value: "Phim Ma - Kinh Dị",
      link:'#'
    },
    {
      id: 18,
      value: "Phim Âm Nhạc",
      link:'#'
    },
    {
      id: 19,
      value: "Phim Thần Thoại",
      link:'#'
    },
    {
      id: 20,
      value: "Phim Truyền Hình",
      link:'#'
    },
    {
      id: 21,
      value: "Phim Anime",
      link:'#'
    },
    {
      id: 22,
      value: "Phim Thuyết Minh",
      link:'#'
    },
  ];
  

 const _listCountry:list[]=[{
    id:1,
    value:'Phim Trung Quốc',
    link:'#'
},{
    id:2,
    value:'Phim Nhật Bản',link:'#'
},{
    id:3,
    value:'Phim Thái Lan',link:'#'
},{
    id:4,
    value:'Phim Tổng Hợp',link:'#'
},{
    id:5,
    value:'Phim Ấn Độ',link:'#'
},{
    id:6,
    value:'Phim Hàn Quốc',link:'#'
},{
    id:7,
    value:'Phim Âu Mỹ',link:'#'
},{
    id:8,
    value:'Phim Đài Loan',link:'#'
},{
    id:9,
    value:'Phim Hồng Kông',link:'#'
}]

 const _listYearRelease:list[]=[{
    id:1,
    value:'Năm 2021',link:'#'
},{
    id:2,
    value:'Năm 2020',link:'#'
},{
    id:3,
    value:'Năm 2019',link:'#'
},{
    id:4,
    value:'Năm 2018',link:'#'
},{
    id:5,
    value:'Năm 2017',link:'#'
},{
    id:6,
    value:'Năm 2016',link:'#'
},{
    id:7,
    value:'Năm 2015',link:'#'
},{
    id:8,
    value:'Năm 2014',link:'#'
},{
    id:9,
    value:'Năm 2013',link:'#'
},{
    id:10,
    value:'Năm 2012',link:'#'
},{
    id:11,
    value:'Năm 2011',link:'#'
},{
    id:12,
    value:'Năm 2010',link:'#'
}]

 export const _listMenuHeader:listMenuHeader[]=[{
    id:1,
    value:'PHIMMOI',
    type:false,
    link:'#'

},{
    id:2,
    value:'PHIM LẺ',
    type:false,
    link:'#'
},{
    id:3,
    value:'PHIM BỘ',
    type:false,
    link:'#'
},{
    id:4,
    value:'Thể Loại',
    type:true, //have dropdown
    list:_listCategory,
    link:'#',
    width:300,
    height:340,
    
},{
    id:5,
    value:'Quốc Gia',
    type:true, //have dropdown
    list:_listCountry,
    link:'#',
    width:300,
    height:160,
},{
    id:6,
    value:'Năm Phát Hành',
    type:true, //have dropdown
    list:_listYearRelease,
    link:'#',
    width:180,
    height:190,
},{
    id:7,
    value:'Phim Chiếu Rạp',
    type:false,
    link:'#'
},{
    id:8,
    value:'Trailer',
    type:false,
    link:'#'
}];


export const listMenu:list[] = [{
  id:1,
  value:'HOME',
  link:'#'
},{
  id:2,
  value:'GENRE',
  link:'#'
},{
  id:3,
  value:'MOVIES',
  link:'#'
},{
  id:4,
  value:'SERIES',
  link:'#'
},{
  id:5,
  value:'ABOUT',
  link:'#'
}]


/*footer */


//List Item Footer

//Flix
const listFlix: list[]=[{
  id:1,
  value:'About us',
  link:'#'
},{
  id:2,
  value:'My profile',
  link:'#'
},{
  id:3,
  value:'Pricing plans',
  link:'#'
},{
  id:4,
  value:'Contacts',
  link:'#'
}]
//Browse
const listBrowse:list[]=[{
  id:1,
  value:'Live TV',
  link:'#'
},{
  id:2,
  value:'Live Movies',
  link:'#'
},{
  id:3,
  value:'Live Series',
  link:'#'
},{
  id:4,
  value:'Streaming Library',
  link:'#'
}]
//Help
const listHelp:list[]=[{
  id:1,
  value:'Account & Billing',
  link:'#'
},{
  id:2,
  value:'Plans & Pricing',
  link:'#'
},{
  id:3,
  value:'Supported devices',
  link:'#'
},{
  id:4,
  value:'Accessibility',
  link:'#'
}]

export const listFooter:list[]=[
  {
    id:1,
    value:'Flix',
    link:'#',
    list:listFlix
  },  {
    id:2,
    value:'Browse',
    link:'#',
    list:listBrowse,

  },  {
    id:3,
    value:'Help',
    link:'#',
    list:listHelp,
  }
]


interface listIntroduce{
  id:number,
  src:string,
  link:string,
  description?:string,
  star?:string,
  type?:string,
  age?:string,
}

export const _listIntroduce:listIntroduce[]=[{
  id:1,
  src:"/images/black-banner.png",
  link:"#",
  description:'Black Panther'
},{
  id:2,
  src:"/images/supergirl-banner.jpg",
  link:"#",
  description:'Supergirl'
},{
  id:3,
  src:"/images/transformer-banner.jpg",
  link:"#",
  description:'Transformer'
},{
  id:4,
  src:"/images/wanda-banner.jpg",
  link:"#",
  description:'Wanda Vision'
}]


export const _listTopFilm:listIntroduce[]=[{
  id:1,
  src:"/images/cartoons/demon-slayer.jpg",
  link:"#",
  description:"Infinity Train"
},{
  id:2,
  src:"/images/movies/blood-shot.jpg",
  link:"#",
  description:"Bloodshot",
},{
  id:3,
  src:"/images/movies/call.jpg",
  link:"#",
  description:"Wanda Vision"
},{
  id:4,
  src:"/images/movies/captain-marvel.png",
  link:"#",
  description:"The Dark Knight"
},{
  id:5,
  src:"/images/movies/end-game.jpg",
  link:"#",
  description:"Supergirl"
},{
  id:6,
  src:"/images/movies/hunter-killer.jpg",
  link:"#",
  description:"Captain Marvel"
}]