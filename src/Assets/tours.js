import spot1 from './featuredspots/spot1.jpg'
import spot2 from './featuredspots/spot2.jpg'
import spot3 from './featuredspots/spot3.jpg'
import spot4 from './featuredspots/spot4.jpg'
import spot5 from './featuredspots/spot5.jpg'
import spot6 from './featuredspots/spot6.jpg'
import spot7 from './featuredspots/spot7.jpg'
import spot8 from './featuredspots/spot8.jpg'
import spot9 from './featuredspots/spot9.jpg'
import spot10 from './featuredspots/spot10.jpg'
import spot11 from './featuredspots/spot11.jpg'
import spot12 from './featuredspots/spot12.jpg'

export const tourData = [
    {
        id:1,
        title:'Charminar',
        city:'Hyderabad',
        distance:500,
        price:1500,
        address:'somewhere',
        maxGroupSize:8,
        desc:'description',
        reviews:[{
            name:'Amal Raj',
            rating:4.5
        }],
        avgRating:4.5,
        photo:spot1,
        featured:true,
        height: '590px'
    },
    {
        id:2,
        title:'Eiffel Tower',
        city:'Paris',
        distance:54789,
        price:65000,
        address:'somewhere',
        maxGroupSize:10,
        desc:'description',
        reviews:[{
            name:'Aswin Mohan',
            rating:4.8
        },
        {
            name:'Rakesh Varma',
            rating:4.5
        }],
        avgRating:0,
        photo:spot2,
        featured:true,
        height: '590px'
    },
    {
        id:3,
        title:'The Great Wall of China',
        city:'China',
        distance:4578965,
        price:80005,
        address:'somewhere',
        maxGroupSize:4,
        desc:'description',
        reviews:[{
            name:'Abhiraj Venu',
            rating:4.2
        }],
        avgRating:4.7,
        photo:spot3,
        featured:true,
        height: '590px'
    },
    {
        id:4,
        title:'Kuramathi',
        city:'Maldives',
        distance:3254,
        price:30000,
        address:'somewhere',
        maxGroupSize:2,
        desc:'description',
        reviews:[{
            name:'John Doe',
            rating:5
        }],
        avgRating:5,
        photo:spot4,
        featured:true,
        height: '590px'
    },
    {
        id:5,
        title:'Tanah Lot',
        city:'Bali',
        distance:4567,
        price:25000,
        address:'somewhere',
        maxGroupSize:6,
        desc:'description',
        reviews:[{
            name:'Saino Mariam',
            rating:4.7
        }],
        avgRating:4.8,
        photo:spot5,
        featured:false,
        height: '385px'
    },
    {
        id:6,
        title:'Statue of Liberty',
        city:'New York',
        distance:4567841,
        price:250000,
        address:'somewhere',
        maxGroupSize:5,
        desc:'description',
        reviews:[{
            name:'Vikram Bhatra',
            rating:4.2
        }],
        avgRating:4.8,
        photo:spot6,
        featured:false,
        height: '385px'
    },
    {
        id:7,
        title:'Cologne Cathedral',
        city:'Germany',
        distance:4578,
        price:75000,
        address:'somewhere',
        maxGroupSize:4,
        desc:'description',
        reviews:[],
        avgRating:0,
        photo:spot7,
        featured:false,
        height: '385px'
    },
    {
        id:8,
        title:'Sydney Opera House',
        city:'Sydney',
        distance:4512,
        price:45780,
        address:'somewhere',
        maxGroupSize:3,
        desc:'description',
        reviews:[],
        avgRating:0,
        photo:spot8,
        featured:false,
        height: '385px'
    },
    {
        id:9,
        title:'Vostok Station',
        city:'Antartica',
        distance:4578,
        price:45212,
        address:'somewhere',
        maxGroupSize:8,
        desc:'description',
        reviews:[{
            name:'Johny Jacob',
            rating:3.5
        }],
        avgRating:3.9,
        photo:spot9,
        featured:false,
        height: '335px'
    },
    {
        id:10,
        title:'Amsterdam',
        city:'Netherlands',
        distance:85455,
        price:65452,
        address:'somewhere',
        maxGroupSize:6,
        desc:'description',
        reviews:[{
            name:'Blake Swift',
            rating:4.5
        }],
        avgRating:4.8,
        photo:spot10,
        featured:false,
        height: '335px'
    },
    {
        id:11,
        title:'Niagara Falls',
        city:'Canada',
        distance:4562,
        price:25634,
        address:'somewhere',
        maxGroupSize:4,
        desc:'description',
        reviews:[{
            name:'Max Miller',
            rating:4.3
        }],
        avgRating:4.2,
        photo:spot11,
        featured:false,
        height: '335px'
    },
    {
        id:12,
        title:'Tarangire National Park',
        city:'tanzania',
        distance:4577,
        price:5642,
        address:'somewhere',
        maxGroupSize:5,
        desc:'description',
        reviews:[{
            name:'Helen Rose',
            rating:3.9
        }],
        avgRating:3.9,
        photo:spot12,
        featured:false,
        height: '335px'
    }
]