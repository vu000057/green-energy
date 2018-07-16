const object = {
   fan: {
           title: "SOLAR FAN",
           url: "./img/fan1.png",
           bodyTxt: "Price: $10.99 - A solar fan is a mechanical fan powered by solar panels. The solar panels are either mounted on the device or are installed independently. Solar fans mostly do not require secondary power sources other than solar power, as most of them are used for cooling purposes during day time. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend nunc. Phasellus vitae augue dui. Fusce faucibus turpis quis condimentum posuere. In elit mauris, gravida eu nisl et, faucibus ornare metus. Integer rhoncus porta semper. Donec finibus condimentum mi vel mollis. Aenean turpis magna, convallis cursus odio nec, blandit scelerisque urna. Donec sit amet pharetra libero. Vestibulum tristique venenatis lectus in consequat. Vivamus in sollicitudin neque. Donec iaculis libero vitae libero interdum, eget semper nulla viverra. Donec sagittis et arcu et auctor. Ut risus dolor, aliquam ut enim ac, euismod elementum dolor. Maecenas eget enim eget dolor vestibulum gravida eget at nulla."
   },
    
   bulb: {
        title: "SOLAR BULB",
        url: "./img/energy-efficiency-bulb.png",
        bodyTxt: "Price: $3:29. A solar bulb  also known as solar light or solar lantern, is a lighting system composed of an LED lamp, solar panels, battery, charge controller and there may also be an inverter. The lamp operates on electricity from batteries, charged through the use of solar photovoltaic panel.Solar-powered household lighting can replace other light sources like candles or kerosene lamps. Solar lights have a lower operating cost than kerosene lamps because renewable energy from the sun is free, unlike fuel. In addition, solar bulbs produce no indoor air pollution unlike kerosene lamps. <br>Donec luctus erat nulla. Morbi sit amet porta felis. Fusce ultricies gravida lobortis. Phasellus consequat ligula eu tincidunt tempor. Pellentesque quis tempor velit, vitae pulvinar quam. Nullam eget consequat elit. Vivamus tincidunt turpis velit, vel ornare tortor tempor sed. Nullam convallis varius nibh eget efficitur. Ut risus dolor, aliquam ut enim ac, euismod elementum dolor. Maecenas eget enim eget dolor vestibulum gravida eget at nulla." 
    
   },

    mower: {
        title: "SOLAR MOWER",
        url: "./img/solarmower.png",
        bodyTxt: "Price: $32.59. An electric lawnmower that utilizes solar power as an energy source will address a number of issues that standard internal combustion engine mowers do not. An electric lawnmower with a solar charger will be easier to use. There is no messy dangerous gasoline to deal with. It will eliminate those pesky trips to the gas station for fill-ups. Just plug the mower into the charging station when not in use and it will be charged and ready for your next mow! Most importantly it eliminates the emissions of an internal combustion mower. <br>Donec luctus erat nulla. Morbi sit amet porta felis. Fusce ultricies gravida lobortis. Phasellus consequat ligula eu tincidunt tempor. Pellentesque quis tempor velit, vitae pulvinar quam. Nullam eget consequat elit. Vivamus tincidunt turpis velit, vel ornare tortor tempor sed. Nullam convallis varius nibh eget efficitur. Ut risus dolor, aliquam ut enim ac, euismod elementum dolor. Maecenas eget enim eget dolor vestibulum gravida eget at nulla. Quisque molestie, nunc non euismod aliquam, purus risus fermentum augue, in mollis purus mi in metus."
    }
};



//Finding our event-target objects

const btns = document.querySelectorAll(".buttons button");
const container = document.querySelector(".content");
//console.log(btns);

//define event-handler for the event - target object (buttons)

//function handlerClick() {
//    alert("One of the buttions is clicked!");
//}
btns[0].setAttribute("id", "active-button");

container.innerHTML = `<h3>${object.fan.title}</h3>
                        <div class="row">
                            <div class="col-xs-12 col-md-3"><div class="pic"><img src="${object.fan.url}" alt=""></div></div>
                            <div class="col-xs-12 col-md-9"><p>${object.fan.bodyTxt}</p></div>
                        </div>`;

function handleClick(ev) {
  // get the content between the HTML tags of <button>  
    let btnLabel = ev.target.textContent;
    
     for(var i=0; i < btns.length; i++){
        if(btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
        }
    }
    
    this.setAttribute("id", "active-button");
    
     //console.log(btnlabel);
    
    if (btnLabel === "FANS") {
        container.innerHTML = `<h3>${object.fan.title}</h3>
                                <div class="row">
                                    <div class="col-xs-12 col-md-3"><div class="pic"><img src="${object.fan.url}" alt=""></div></div>
                                    <div class="col-xs-12 col-md-9"><p>${object.fan.bodyTxt}</p></div>
                                </div>`;
            
    } else if (btnLabel === "BULBS") {
        container.innerHTML = `<h3>${object.bulb.title}</h3>
                                 <div class="row">
                                    <div class="col-xs-12 col-md-3"><div class="pic"><img src="${object.bulb.url}" alt=""></div></div>
                                    <div class="col-xs-12 col-md-9"><p>${object.mower.bodyTxt}</p></div>
                                </div>`;
    } else {
        container.innerHTML = `<h3>${object.mower.title}</h3>
                                <div class="row">
                                    <div class="col-xs-12 col-md-3"><div class="pic"><img src="${object.mower.url}" alt=""></div></div>
                                    <div class="col-xs-12 col-md-9"><p>${object.mower.bodyTxt}</p></div>
                                </div>`;
    } 
}


/*function handleClick(e) {
    let eventTargetOject = e.target;
    eventTargetOject.classlist.tongle("new-bg-color");
}*/


//    let eventTargetObject = e.target;
    /*eventTargetObject.setAttribute("specific-style", "new-bg");
    
   if (eventTargetObject.hasAttribute("class")) {
        eventTargetObject.removeAttribute("class")
} else {
    eventTargetObject.setAttribute("class", "new-bg");
}*/
    
    
   

    

//Use "For of" loop

//registering all buttons for Click Event

for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
}






