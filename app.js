let perviousButton = document.querySelector('.perviousButton');
let nextButton = document.querySelector('.nextButton');
let SurpriseMe = document.querySelector('.SurpriseMe');
let image1 = document.querySelector('.image1');
let name = document.querySelector('.name');
let jobDescrip = document.querySelector('.jobDescrip');
let mainPara = document.querySelector('.mainPara')



let information= [
    {
        name :"Anna Johnson",
        job:"WEB DESIGNER",
        img: "images/person-2_np9x5l.jpg",
        text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
  
    {
        name :"Peter Jones",
        job:"INTERN",
        img: "./images/person-3_ipa0mj.jpg",
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },

    {
        name :"Bill Anderson",
        job:"THE BOSS",
        img: "./images/person-4_t9nxjt.jpg",
        text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
];


let currentitem = 0;

function reviews(item){
    image1.src = information[item].img;
    name.textContent = information[item].name;
    jobDescrip.textContent = information[item].job;
    mainPara.textContent = information[item].text;
}

nextButton.addEventListener('click',()=>{
    currentitem++;
    if(currentitem > information.length - 1){
        currentitem = 0;
    }
    reviews(currentitem)
});



perviousButton.addEventListener('click',()=>{
    currentitem--;
    if(currentitem < 0){
        currentitem = information.length - 1;
    }
    reviews(currentitem)
});


SurpriseMe.addEventListener('click',()=>{
    currentitem++;
    if(currentitem > information.length - 1){
        currentitem = 0;
    }
    reviews(currentitem)
});




