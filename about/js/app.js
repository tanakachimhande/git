
let description = document.querySelector('.description');
let names = document.querySelector('.name');
let roles = document.querySelector('.role')
let profiles = document.querySelector('.profile-pic')
let testimonialContainer = document.querySelector('.testimonial-container')

let testimonials = 
[
    {
        text:"The First testimonial dolor sit amet, consectetur adipisicing elit. Voluptate accusamus in delectus amet porro error soluta culpa. Modi ab iure blanditiis ipsa incidunt labore quas rerum  ",
        name: "Edison Magwere",
        role:"ALL Fancy Hair Cuts Specialist",
        profile:"../about/images/me2.PNG"

    },
    {
        text:"The Second testimonial dolor sit amet, consectetur adipisicing elit. Voluptate accusamus in delectus amet porro error soluta culpa. Modi ab iure blanditiis ipsa incidunt labore quas rerum  ",
        name: "Blessing Madungwe",
        role:"Zuda Specialists",
        profile:"../about/images/me2.PNG"

    },
    {
        text:"The Third testimonial dolor sit amet, consectetur adipisicing elit. Voluptate accusamus in delectus amet porro error soluta culpa. Modi ab iure blanditiis ipsa incidunt labore quas rerum  ",
        name: "Osward Heresy",
        role:"Beard Sepecialist",
        profile:"../about/images/me2.PNG"

    }
]

let index = 1;

function getData () {

     const {text,name,role,profile} = testimonials[index];
     description.textContent = text;
     names.textContent = name;
     roles.textContent = role;
     profiles.src = profile;

     index ++;

     if(index > testimonials.length -1)
     {
         index = 0;
     }
 
}

setInterval(getData, 10000)


 