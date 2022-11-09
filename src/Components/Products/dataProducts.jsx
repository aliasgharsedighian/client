import '../../flexboxgrid.css'

const dataProducts =[
    {
       images : './Imgs/Product/Product1.jpg' ,
       hotOffer: 'پیشنهاد ویژه',
       offerPer: '45%',
       stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
       title : 'کیف چرم بند دار',
       price : '8,000,000R'
    } ,
    {
        images : './Imgs/Product/Product2.jpg' ,
        hotOffer : '' ,
        offerPer: '',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'لپ تاپ ایسوس 16 اینچ',
        price : '230,000,000R'
    } ,
    {
        images : './Imgs/Product/Product3.jpg' ,
        hotOffer: '',
        offerPer: '',
        stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title: 'ژاکت مردانه ایزی دو',
        price : '4,500,000R'
    } ,
    {
        images : './Imgs/Product/Product4.jpg' , 
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '25%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title: 'مجموعه 19 عددی دریل ساتا',
        price: '25,000,000R'
    } ,
    {
        images : './Imgs/Product/Product5.jpg' , 
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '15%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title: 'نیم بوت مردانه مدل چرم مصنوعی',
        price: '4,290,000R'
    } ,
    {
        images : './Imgs/Product/Product6.jpg' , 
        hotOffer: '',
        offerPer: '',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title: 'هدست مخصوص بازی جدل مدل GH-112',
        price: '3,540,000R'
    } ,
    {
        images : './Imgs/Product/Product7.jpg' , 
        hotOffer: '',
        offerPer: '5%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
        price: '25,000,000R'
    } ,
    {
        images : './Imgs/Product/Product8.jpg' , 
        hotOffer: '',
        offerPer: '',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title: 'پلیور یقه اسکی مردانه ایزی دو',
        price: '4,850,000R'
    } ,
    {
        images : './Imgs/Product/Product9.jpg' ,
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '45%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'کیف چرم بند دار',
        price : '8,000,000R'
     } ,
     {
         images : './Imgs/Product/Product10.jpg' ,
         hotOffer : '' ,
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'لپ تاپ ایسوس 16 اینچ',
         price : '230,000,000R'
     } ,
     {
         images : './Imgs/Product/Product11.jpg' ,
         hotOffer: '',
         offerPer: '',
         stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'ژاکت مردانه ایزی دو',
         price : '4,500,000R'
     } ,
     {
         images : './Imgs/Product/Product12.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '25%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'مجموعه 19 عددی دریل ساتا',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product13.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '15%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'نیم بوت مردانه مدل چرم مصنوعی',
         price: '4,290,000R'
     } ,
     {
         images : './Imgs/Product/Product14.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'هدست مخصوص بازی جدل مدل GH-112',
         price: '3,540,000R'
     } ,
     {
         images : './Imgs/Product/Product15.jpg' , 
         hotOffer: '',
         offerPer: '5%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product8.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'پلیور یقه اسکی مردانه ایزی دو',
         price: '4,850,000R'
     },
     {
        images : './Imgs/Product/Product1.jpg' ,
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '45%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'کیف چرم بند دار',
        price : '8,000,000R'
     } ,
     {
         images : './Imgs/Product/Product2.jpg' ,
         hotOffer : '' ,
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'لپ تاپ ایسوس 16 اینچ',
         price : '230,000,000R'
     } ,
     {
         images : './Imgs/Product/Product3.jpg' ,
         hotOffer: '',
         offerPer: '',
         stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'ژاکت مردانه ایزی دو',
         price : '4,500,000R'
     } ,
     {
         images : './Imgs/Product/Product4.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '25%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'مجموعه 19 عددی دریل ساتا',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product5.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '15%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'نیم بوت مردانه مدل چرم مصنوعی',
         price: '4,290,000R'
     } ,
     {
         images : './Imgs/Product/Product6.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'هدست مخصوص بازی جدل مدل GH-112',
         price: '3,540,000R'
     } ,
     {
         images : './Imgs/Product/Product7.jpg' , 
         hotOffer: '',
         offerPer: '5%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product8.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'پلیور یقه اسکی مردانه ایزی دو',
         price: '4,850,000R'
     } ,
     {
         images : './Imgs/Product/Product9.jpg' ,
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '45%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'کیف چرم بند دار',
         price : '8,000,000R'
      } ,
      {
          images : './Imgs/Product/Product10.jpg' ,
          hotOffer : '' ,
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title : 'لپ تاپ ایسوس 16 اینچ',
          price : '230,000,000R'
      } ,
      {
          images : './Imgs/Product/Product11.jpg' ,
          hotOffer: '',
          offerPer: '',
          stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'ژاکت مردانه ایزی دو',
          price : '4,500,000R'
      } ,
      {
          images : './Imgs/Product/Product12.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '25%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'مجموعه 19 عددی دریل ساتا',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product13.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '15%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'نیم بوت مردانه مدل چرم مصنوعی',
          price: '4,290,000R'
      } ,
      {
          images : './Imgs/Product/Product14.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'هدست مخصوص بازی جدل مدل GH-112',
          price: '3,540,000R'
      } ,
      {
          images : './Imgs/Product/Product15.jpg' , 
          hotOffer: '',
          offerPer: '5%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product8.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'پلیور یقه اسکی مردانه ایزی دو',
          price: '4,850,000R'
      },{
        images : './Imgs/Product/Product1.jpg' ,
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '45%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'کیف چرم بند دار',
        price : '8,000,000R'
     } ,
     {
         images : './Imgs/Product/Product2.jpg' ,
         hotOffer : '' ,
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'لپ تاپ ایسوس 16 اینچ',
         price : '230,000,000R'
     } ,
     {
         images : './Imgs/Product/Product3.jpg' ,
         hotOffer: '',
         offerPer: '',
         stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'ژاکت مردانه ایزی دو',
         price : '4,500,000R'
     } ,
     {
         images : './Imgs/Product/Product4.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '25%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'مجموعه 19 عددی دریل ساتا',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product5.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '15%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'نیم بوت مردانه مدل چرم مصنوعی',
         price: '4,290,000R'
     } ,
     {
         images : './Imgs/Product/Product6.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'هدست مخصوص بازی جدل مدل GH-112',
         price: '3,540,000R'
     } ,
     {
         images : './Imgs/Product/Product7.jpg' , 
         hotOffer: '',
         offerPer: '5%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product8.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'پلیور یقه اسکی مردانه ایزی دو',
         price: '4,850,000R'
     } ,
     {
         images : './Imgs/Product/Product9.jpg' ,
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '45%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'کیف چرم بند دار',
         price : '8,000,000R'
      } ,
      {
          images : './Imgs/Product/Product10.jpg' ,
          hotOffer : '' ,
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title : 'لپ تاپ ایسوس 16 اینچ',
          price : '230,000,000R'
      } ,
      {
          images : './Imgs/Product/Product11.jpg' ,
          hotOffer: '',
          offerPer: '',
          stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'ژاکت مردانه ایزی دو',
          price : '4,500,000R'
      } ,
      {
          images : './Imgs/Product/Product12.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '25%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'مجموعه 19 عددی دریل ساتا',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product13.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '15%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'نیم بوت مردانه مدل چرم مصنوعی',
          price: '4,290,000R'
      } ,
      {
          images : './Imgs/Product/Product14.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'هدست مخصوص بازی جدل مدل GH-112',
          price: '3,540,000R'
      } ,
      {
          images : './Imgs/Product/Product15.jpg' , 
          hotOffer: '',
          offerPer: '5%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product8.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'پلیور یقه اسکی مردانه ایزی دو',
          price: '4,850,000R'
      },{
        images : './Imgs/Product/Product1.jpg' ,
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '45%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'کیف چرم بند دار',
        price : '8,000,000R'
     } ,
     {
         images : './Imgs/Product/Product2.jpg' ,
         hotOffer : '' ,
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'لپ تاپ ایسوس 16 اینچ',
         price : '230,000,000R'
     } ,
     {
         images : './Imgs/Product/Product3.jpg' ,
         hotOffer: '',
         offerPer: '',
         stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'ژاکت مردانه ایزی دو',
         price : '4,500,000R'
     } ,
     {
         images : './Imgs/Product/Product4.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '25%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'مجموعه 19 عددی دریل ساتا',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product5.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '15%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'نیم بوت مردانه مدل چرم مصنوعی',
         price: '4,290,000R'
     } ,
     {
         images : './Imgs/Product/Product6.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'هدست مخصوص بازی جدل مدل GH-112',
         price: '3,540,000R'
     } ,
     {
         images : './Imgs/Product/Product7.jpg' , 
         hotOffer: '',
         offerPer: '5%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product8.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'پلیور یقه اسکی مردانه ایزی دو',
         price: '4,850,000R'
     } ,
     {
         images : './Imgs/Product/Product9.jpg' ,
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '45%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'کیف چرم بند دار',
         price : '8,000,000R'
      } ,
      {
          images : './Imgs/Product/Product10.jpg' ,
          hotOffer : '' ,
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title : 'لپ تاپ ایسوس 16 اینچ',
          price : '230,000,000R'
      } ,
      {
          images : './Imgs/Product/Product11.jpg' ,
          hotOffer: '',
          offerPer: '',
          stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'ژاکت مردانه ایزی دو',
          price : '4,500,000R'
      } ,
      {
          images : './Imgs/Product/Product12.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '25%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'مجموعه 19 عددی دریل ساتا',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product13.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '15%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'نیم بوت مردانه مدل چرم مصنوعی',
          price: '4,290,000R'
      } ,
      {
          images : './Imgs/Product/Product14.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'هدست مخصوص بازی جدل مدل GH-112',
          price: '3,540,000R'
      } ,
      {
          images : './Imgs/Product/Product15.jpg' , 
          hotOffer: '',
          offerPer: '5%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product8.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'پلیور یقه اسکی مردانه ایزی دو',
          price: '4,850,000R'
      },{
        images : './Imgs/Product/Product1.jpg' ,
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '45%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'کیف چرم بند دار',
        price : '8,000,000R'
     } ,
     {
         images : './Imgs/Product/Product2.jpg' ,
         hotOffer : '' ,
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'لپ تاپ ایسوس 16 اینچ',
         price : '230,000,000R'
     } ,
     {
         images : './Imgs/Product/Product3.jpg' ,
         hotOffer: '',
         offerPer: '',
         stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'ژاکت مردانه ایزی دو',
         price : '4,500,000R'
     } ,
     {
         images : './Imgs/Product/Product4.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '25%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'مجموعه 19 عددی دریل ساتا',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product5.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '15%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'نیم بوت مردانه مدل چرم مصنوعی',
         price: '4,290,000R'
     } ,
     {
         images : './Imgs/Product/Product6.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'هدست مخصوص بازی جدل مدل GH-112',
         price: '3,540,000R'
     } ,
     {
         images : './Imgs/Product/Product7.jpg' , 
         hotOffer: '',
         offerPer: '5%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product8.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'پلیور یقه اسکی مردانه ایزی دو',
         price: '4,850,000R'
     } ,
     {
         images : './Imgs/Product/Product9.jpg' ,
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '45%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'کیف چرم بند دار',
         price : '8,000,000R'
      } ,
      {
          images : './Imgs/Product/Product10.jpg' ,
          hotOffer : '' ,
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title : 'لپ تاپ ایسوس 16 اینچ',
          price : '230,000,000R'
      } ,
      {
          images : './Imgs/Product/Product11.jpg' ,
          hotOffer: '',
          offerPer: '',
          stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'ژاکت مردانه ایزی دو',
          price : '4,500,000R'
      } ,
      {
          images : './Imgs/Product/Product12.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '25%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'مجموعه 19 عددی دریل ساتا',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product13.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '15%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'نیم بوت مردانه مدل چرم مصنوعی',
          price: '4,290,000R'
      } ,
      {
          images : './Imgs/Product/Product14.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'هدست مخصوص بازی جدل مدل GH-112',
          price: '3,540,000R'
      } ,
      {
          images : './Imgs/Product/Product15.jpg' , 
          hotOffer: '',
          offerPer: '5%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product8.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'پلیور یقه اسکی مردانه ایزی دو',
          price: '4,850,000R'
      },{
        images : './Imgs/Product/Product1.jpg' ,
        hotOffer: 'پیشنهاد ویژه',
        offerPer: '45%',
        stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
        title : 'کیف چرم بند دار',
        price : '8,000,000R'
     } ,
     {
         images : './Imgs/Product/Product2.jpg' ,
         hotOffer : '' ,
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'لپ تاپ ایسوس 16 اینچ',
         price : '230,000,000R'
     } ,
     {
         images : './Imgs/Product/Product3.jpg' ,
         hotOffer: '',
         offerPer: '',
         stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'ژاکت مردانه ایزی دو',
         price : '4,500,000R'
     } ,
     {
         images : './Imgs/Product/Product4.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '25%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'مجموعه 19 عددی دریل ساتا',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product5.jpg' , 
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '15%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'نیم بوت مردانه مدل چرم مصنوعی',
         price: '4,290,000R'
     } ,
     {
         images : './Imgs/Product/Product6.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'هدست مخصوص بازی جدل مدل GH-112',
         price: '3,540,000R'
     } ,
     {
         images : './Imgs/Product/Product7.jpg' , 
         hotOffer: '',
         offerPer: '5%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
         price: '25,000,000R'
     } ,
     {
         images : './Imgs/Product/Product8.jpg' , 
         hotOffer: '',
         offerPer: '',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title: 'پلیور یقه اسکی مردانه ایزی دو',
         price: '4,850,000R'
     } ,
     {
         images : './Imgs/Product/Product9.jpg' ,
         hotOffer: 'پیشنهاد ویژه',
         offerPer: '45%',
         stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
         title : 'کیف چرم بند دار',
         price : '8,000,000R'
      } ,
      {
          images : './Imgs/Product/Product10.jpg' ,
          hotOffer : '' ,
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title : 'لپ تاپ ایسوس 16 اینچ',
          price : '230,000,000R'
      } ,
      {
          images : './Imgs/Product/Product11.jpg' ,
          hotOffer: '',
          offerPer: '',
          stars : [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'ژاکت مردانه ایزی دو',
          price : '4,500,000R'
      } ,
      {
          images : './Imgs/Product/Product12.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '25%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'مجموعه 19 عددی دریل ساتا',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product13.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '15%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'نیم بوت مردانه مدل چرم مصنوعی',
          price: '4,290,000R'
      } ,
      {
          images : './Imgs/Product/Product14.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'هدست مخصوص بازی جدل مدل GH-112',
          price: '3,540,000R'
      } ,
      {
          images : './Imgs/Product/Product15.jpg' , 
          hotOffer: '',
          offerPer: '5%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product8.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'پلیور یقه اسکی مردانه ایزی دو',
          price: '4,850,000R'
      } ,
      {
          images : './Imgs/Product/Product12.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '25%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'مجموعه 19 عددی دریل ساتا',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product13.jpg' , 
          hotOffer: 'پیشنهاد ویژه',
          offerPer: '15%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'نیم بوت مردانه مدل چرم مصنوعی',
          price: '4,290,000R'
      } ,
      {
          images : './Imgs/Product/Product14.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'هدست مخصوص بازی جدل مدل GH-112',
          price: '3,540,000R'
      } ,
      {
          images : './Imgs/Product/Product15.jpg' , 
          hotOffer: '',
          offerPer: '5%',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'گوشی موبایل نوکیا مدل C21 TA-1352',
          price: '25,000,000R'
      } ,
      {
          images : './Imgs/Product/Product8.jpg' , 
          hotOffer: '',
          offerPer: '',
          stars: [<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>,<i class="fa-solid fa-star"></i>],
          title: 'پلیور یقه اسکی مردانه ایزی دو',
          price: '4,850,000R'
      }
    
];

export default dataProducts ;