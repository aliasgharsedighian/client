

const dataSlider =[
    {
        id:'slide1',
        className : 'item active',
        title : "متن آزمایشی 1",
        images : './Imgs/Sliders/HomeSliderTop/img1.jpg',
        circle: [<i onclick="setSlide('slide1', 1)" class="fa-solid fa-circle"></i>],
    } ,
    {
        id:'slide2',
        className : 'item',
        title : "متن آزمایشی 2",
        images : './Imgs/Sliders/HomeSliderTop/img2.jpg',
        circle: [<i onclick="setSlide('slide2', 2)" class="fa-solid fa-circle"></i>],
    } ,
    {
        id:'slide3',
        className : 'item',
        title : "متن آزمایشی 3",
        images : './Imgs/Sliders/HomeSliderTop/img3.jpg',
        circle: [<i onclick="setSlide('slide3', 3)" class="fa-solid fa-circle"></i>],
    } ,
    {
        id:'slide4',
        className : 'item',
        title : "متن آزمایشی 4",
        images : './Imgs/Sliders/HomeSliderTop/img4.jpg',
        circle: [<i onclick="setSlide('slide4', 4)" class="fa-solid fa-circle"></i>],
    } ,
    {
        id:'slide5',
        className : 'item',
        title : "متن آزمایشی 5",
        images : './Imgs/Sliders/HomeSliderTop/img5.jpg',
        circle: [<i onclick="setSlide('slide5', 5)" class="fa-solid fa-circle"></i>],
    },
];

export default dataSlider ;