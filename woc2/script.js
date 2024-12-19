const canvas = document.getElementById('gameCanvas');
const c = canvas.getContext('2d');


canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const gravity = 0.1;



class fruit {
    constructor() {
        this.position = {
            x: Math.random() * canvas.width,
            y: canvas.height,
        }
        this.velocity = {
            x: Math.random() * 2,
            y: Math.random() * 2 + 9,
        }
        this.width = 50
        this.height = 50
        this.gravity= gravity
    }
    draw() {
        c.fillStyle = "yellow"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        
        this.position.y -= this.velocity.y
        this.position.x -= this.velocity.x
        this.velocity.y -= this.gravity

        if (this.position.x<=0) {
            this.velocity.x = -4
        }

        if (this.position.x>= canvas.width) {
            this.velocity.x= 6
            
        }

        this.draw()

    }

}



function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    fruits.forEach((fruit)=> fruit.update());

}



const fruits= [];
for (let i = 0; i < 6; i++) {
    fruits.push(new fruit());
}

animate()










// SidebarSetup:)

const sidebar = document.getElementById("sidebar");
const togglebtn = document.getElementById("togglebtn");

sidebar.style.left = "-15vw"
togglebtn.style.left = "0px"
navbar.style.left = "-15vw"



togglebtn.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-15vw"
    } else {
        sidebar.style.left = "0px"
    }
});

togglebtn.addEventListener("click", () => {
    if (togglebtn.style.left === "0px") {
        togglebtn.style.left = "12vw"
    } else {
        togglebtn.style.left = "0px"
    }
});

togglebtn.addEventListener("click", () => {
    if (navbar.style.left === "0px") {
        navbar.style.left = "-15vw"
    } else {
        navbar.style.left = "0px"
    }
});      