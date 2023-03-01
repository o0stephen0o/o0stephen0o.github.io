//variable

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');


const cartTotal = document.querySelector('.cart-total');

const cartFlightItems = document.querySelector('.cart-flight-items');
const cartFlightTotal = document.querySelector('.cart-flight-total');

const cartTripItems = document.querySelector('.cart-trip-items');
const cartTripTotal = document.querySelector('.cart-trip-total');

const cartFlightContent = document.querySelector('.cart-flight-content');
const cartTripContent = document.querySelector('.cart-trip-content');

const flightsDOM = document.querySelector('.flights-center');
const tripsDOM = document.querySelector('.trip-center');

const checkOutFlightDOM = document.querySelector('.checkout-flight-center');
const checkOutTripDOM = document.querySelector('.checkout-trip-center');

const checkOutFlightTotal = document.querySelector('.checkout-flight-total');
const checkOutFlightItems = document.querySelector('.checkout-flight-items');

const checkOutTripTotal = document.querySelector('.checkout-trip-total');
const checkOutTripItems = document.querySelector('.checkout-trip-items');

const checkOutTotal = document.querySelector('.checkout-lumpSum-total');
const checkOutItems = document.querySelector('.checkout-lumpSum-items');

// flightCart , TripCart &  button Array
let flightCart = [];
let tripCart = [];
let buttonsDOM = [];
let tripButtonsDOM = [];


//----------------------------------getting the products
class Products {
    async getFlights() {
        try{

            let result = await fetch('cart.json');
            let data = await result.json();
            
            let flights = data.flights;
            flights = flights.map(item => {
                const {
                    destination,
                    date, 
                    month, 
                    price
                } = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {
                    destination,
                    date, 
                    month, 
                    id, 
                    price, 
                    image}
            })
        return flights;

        } catch(error) {
            console.log(error);
        }
        
    }
    async getTrips() {
        try {

            let result = await fetch('cart.json');
            let data = await result.json();
            
            let trips = data.journeys;
            trips = trips.map(item => {
                const {
                    tripTitle,
                    date,
                    distance,
                    difficulty,
                    overView,
                    itinerary1,
                    itinerary2,
                    itinerary3,
                    originalPrice,
                    price,
                    soldOut,
                    inventory
                } = item.fields;
                const {id} = item.sys;
                const image1 = item.fields.image.fields.file1.url;
                const image2 = item.fields.image.fields.file2.url;
                const image3 = item.fields.image.fields.file3.url;
                return {
                    tripTitle,
                    date,
                    distance,
                    difficulty,
                    overView,
                    itinerary1,
                    itinerary2,
                    itinerary3,
                    originalPrice,
                    price,
                    soldOut,
                    inventory,
                    id,
                    image1,
                    image2,
                    image3
                }
            })
            return trips;

        } catch (error) {
            console.log(error);
        }
    }
    
    
}

//----------------------------------End of the products 

//----------------------------------display UI
class UI {
    displayFlights(flights) {
        // console.log(products);
        let result = '';
        flights.forEach(flight => {

            result += `  
                <!-- single flight info -->
                
                <div class="col mb-4 ">
                    <div class="card mx-auto" >
                        <div class="card-img-top text-center">
                            <p class="card-place mb-1">${flight.destination}</p>
                            <p class="card-mth mb-1">${flight.month}</p>
                        </div>
                            
                        <div class="card-body text-center">
                            
                                <h3 class="card-day mb-3">${flight.date}</h3>
                                <p class="card-price mb-1">USD ${flight.price}</p> <!-- btn btn-secondary btn-sm -->
                            
                            </div>
                        <div class="card-footer">
                        
                            <button href="#" class="bag-btn" data-id=${flight.id}>GO</button>
                        </div> 
                    </div>
                </div>    
                <!-- end single flight info -->     
                        
            `;

        });
        flightsDOM.innerHTML = result;
    }

    displayTrips(trips) {
        // console.log(products);
        let result = '';
        trips.forEach(trip => {
            
            

            result += `
                        <!-- single trip info -->
                        
                <div class="container border">
        
                    <div class="row">
                        <!--left photo Slider-->
                        <div class="col-md-4 mb-3">
                            <div id="myCarousel_${trip.id}" class="carousel slide" data-ride="carousel" style="height: 500px; width: 100%; max-width: 500px; margin: 0 auto;">
                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel_${trip.id}" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel_${trip.id}" data-slide-to="1"></li>
                                        <li data-target="#myCarousel_${trip.id}" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner" style="height: 100%; width: 100%;">
                                        <div class="carousel-item active" style="height: 100%; width: 100%;">
                                            <img src=${trip.image1} style="height: 100%; width: 100%; object-fit:cover;">
                                        </div>
                                        <div class="carousel-item" style="height: 100%; width: 100%;">
                                            <img src=${trip.image2} alt="Slide 2" style="height: 100%; width: 100%; object-fit:cover;">
                                        </div>
                                        <div class="carousel-item" style="height: 100%; width: 100%;">
                                            <img src=${trip.image3} alt="Slide 3" style="height: 100%; width: 100%; object-fit:cover;">
                                        </div>
                                    </div>
                                            <!-- <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                            </a>-->
                                    
                                
                            </div>
                        </div>                    
                        <!--Middle Information-->            
                        <div class="col-md-5 mb-3">
                            <h1>${trip.tripTitle}</h1>
                            <p><i class="fa-sharp fa-solid fa-calendar-days"></i>Date:${trip.date}</p>
                            <p><i class="fas fa-map-marker-alt"></i>Distance: ${trip.distance} KM</p>
                            <p><i class="fa-solid fa-rocket"></i>Difficulty:
                            <div class="difficulty" data-no=${trip.difficulty}>                         
                                <i class="fas fa-circle"></i> 
                                <i class="fas fa-circle"></i> 
                                <i class="far fa-circle"></i> 
                                <i class="far fa-circle"></i>  
                                <i class="far fa-circle"></i>                          
                            </div>   
                            </p>
                            <p>${trip.overView}</p>
                            <hr>
                            <h4>Itinerary:</h4>
                            <ul>
                            
                            <li>${trip.itinerary1}</li>
                            <li>${trip.itinerary2}</li>
                            <li>${trip.itinerary3}</li>
                            
                            </ul>  
                        </div>          
                        <!--Right Price and button-->
                        <div class="col-md-3 mb-3 align-self-end">               
                            <div class="card-body">
                                <p class="card-text text-muted">Original:</p>
                                <p class="card-text">USD ${trip.originalPrice}</p>
                                <p class="card-text text-muted">Current:</p>
                                <p class="card-text h3 text-danger">USD ${trip.price}</p>
                                <button type="button" class="bag-trip-btn" data-id=${trip.id}>JOIN</button> <!-- btn btn-secondary btn-sm -->
                            </div>    
                        </div>  
                    </div>
                    
                    
                    <div class="row terms" ID="term1">
                            <div class="col-md-12">
                                <p>TERMS AND CONDITIONS OF SERVICE. We have discussed with you the risks, rewards and benefits of the Project, the Scope of Services, and our fees for such services and the Agreement represents the entire understanding between Client and Olsson with respect to the Project.</p>
                
                            </div>
                    </div>                     
                </div>                        
            `;


        });

        tripsDOM.innerHTML = result;

    }

    renderDifficulties(trips) {


        trips.forEach(trip => {

            let difficulties = document.querySelectorAll('.difficulty')
            
            difficulties.forEach(difficulty => {
                let difficultyNo = difficulty.getAttribute('data-no');
                console.log(difficultyNo);
                let difficultyChilds = difficulty.children;
                console.log(difficultyChilds);
                for (let i = 0; i < difficultyNo; i++) {
                    difficultyChilds[i].classList.add('fas');
                    difficultyChilds[i].classList.remove('far');
                }
            });
            
        
        });
    }
    
    displayFlightCheckOut(flightCartItems) {
        
        let result = '';
        flightCartItems.forEach(flight => {
            result += `
            
            <tr class="flight-table-item">
                <td>
                    <img src=${flight.image} alt="flightCheckOut" height="1rem" width="1.5rem"/>
                </td>
                <td >${flight.destination} </td>                  
                <td>${flight.date} - ${flight.month}</td>                
                <td >${flight.price}  </td>
                <td>${flight.amount} </td>              
                
            </tr>      
            `;
        });
        
        checkOutFlightDOM.innerHTML = result;
        
    }

    displayTripCheckOut(tripCartItems) {

        let result = '';
        tripCartItems.forEach(trip => {
            result += `
            <tr class="trip-table-item">
                <td id="#trip-td1">
                    <img src=${trip.image} alt="flightCheckOut" height="1rem" width="1.5rem"/>
                </td>
                <td id="#trip-td2">${trip.tripTitle}</td>                  
                <td id="#trip-td3">${trip.date}</td>                
                <td id="#trip-td4">${trip.price}</td>
                <td id="#trip-td5">${trip.amount}</td>              
                
            </tr>
            `;
        });
        
        checkOutTripDOM.innerHTML = result;

    }
    getFlightsButtons() {
        const flightsButtons = [...document.querySelectorAll(".bag-btn")];               
        buttonsDOM = flightsButtons;            
        
            flightsButtons.forEach(button => {
                let id = button.dataset.id;
                let inCart = flightCart.find(item => item.id === id);
                if (inCart) {
                    button.innerText = "In Cart";
                    button.disabled = true;
                }

                button.addEventListener('click', (event) => {
                    event.target.innerText = "In Cart";
                    event.target.disabled = true;
                    //get product from products
                    let cartItem = {...Storage.getFlights(id), amount: 1};
                    //add product to the flightCart
                    flightCart = [...flightCart, cartItem];

                    //save flightCart in local storage
                    Storage.saveFlightCart(flightCart);
                    
                    //set Cart values
                    this.setFlightCartValues(flightCart);
                    
                    
                    
                    
                    //display Flights flightCart item
                    this.addFlightsCartItem(cartItem);
                                
                    //show the flightCart
                    this.showCart();
                });
            });     
                
    }

    getTripsButtons() {
        
        const tripsButtons = [...document.querySelectorAll(".bag-trip-btn")];

        tripButtonsDOM = tripsButtons;
        
            tripsButtons.forEach(button => {
                let id = button.dataset.id;
                let inCart = tripCart.find(item => item.id === id);
                if (inCart) {
                
                    button.innerText = "In Cart";
                    button.disabled = true;
                    
                } 

                    button.addEventListener('click', (event) => {

                        event.target.innerText = "In Cart";
                        event.target.disabled = true;

                        

                            //get product from products
                            let cartItem = {...Storage.getTrips(id), amount: 1};
                            //add product to the TripCart
                            tripCart = [...tripCart, cartItem];

                            //save TripCart in local storage
                            Storage.saveTripCart(tripCart);

                            //set Cart values
                            this.setTripCartValues(tripCart);
                            
                            //display trip TripCart item
                            this.addTripCartItem(cartItem);
                            //show the TripCart
                            this.showCart();
                            
                        

                    });
                
        });
    }
    

    setFlightCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        let tripCartTotal = 0;
        let tripItems = 0;
        const checkoutPage = /.*page-checkout.*/;
        
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        
        cartFlightTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartFlightItems.innerText = itemsTotal;
        //cartItems.innerText = parseInt(itemsTotal.innerText) + parseInt(cartTripItems.innerText);


        if(tripCart) {
            for(let i = 0; i < tripCart.length; i++) {
                tripCartTotal += tripCart[i].price * tripCart[i].amount;
                tripItems += tripCart[i].amount;
            }
        }

        if(tripCart) {
            cartTotal.innerText = parseInt(tempTotal) + parseInt(tripCartTotal);
            cartItems.innerText = itemsTotal + parseInt(tripItems);
            cartTripTotal.innerText = parseInt(tripCartTotal);
            cartTripItems.innerText = parseInt(tripItems);
        } else {
            cartTotal.innerText = parseInt(tempTotal.toFixed(2))
            cartItems.innerText = itemsTotal;
        }
        
        if(checkoutPage.test(window.location)){
            if (tripCart){
                
                checkOutFlightTotal.innerText = parseInt(tempTotal.toFixed(2));
                checkOutFlightItems.innerText = itemsTotal;
                checkOutTotal.innerText = parseInt(tempTotal.toFixed(2)) + parseInt(tripCartTotal);
                checkOutItems.innerText = itemsTotal + parseInt(tripItems);}
            
            else{
                checkOutFlightTotal.innerText = parseInt(tempTotal.toFixed(2));
                checkOutFlightItems.innerText = itemsTotal;
                checkOutTotal.innerText = parseInt(tempTotal.toFixed(2));
                checkOutItems.innerText = itemsTotal;
            }
        }
        
        
        
    }

    setTripCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        let flightCartTotal = 0;
        let flightItems = 0;
        const checkoutPage = /.*page-checkout.*/;
        
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        
        
        cartTripTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartTripItems.innerText = itemsTotal;
        
        if(flightCart) {
            for(let i = 0; i < flightCart.length; i++) {
                flightCartTotal += flightCart[i].price * flightCart[i].amount;
                flightItems += flightCart[i].amount;
            }
        }
        
        if(flightCart) {
            cartTotal.innerText = parseInt(tempTotal) + parseInt(flightCartTotal);
            cartItems.innerText = itemsTotal + parseInt(flightItems);
            cartFlightTotal.innerText = parseInt(flightCartTotal);
            cartFlightItems.innerText = parseInt(flightItems);
        } else {
            cartTotal.innerText = parseInt(tempTotal.toFixed(2))
            cartItems.innerText = itemsTotal;
        }

        if(checkoutPage.test(window.location)){
            if (flightCart){
                
                checkOutTripTotal.innerText = parseInt(tempTotal.toFixed(2));
                checkOutTripItems.innerText = itemsTotal;
                checkOutTotal.innerText = parseInt(tempTotal.toFixed(2)) + parseInt(flightCartTotal);
                checkOutItems.innerText = itemsTotal + parseInt(flightItems);}
            
            else{
                
                checkOutTripTotal.innerText = parseInt(tempTotal.toFixed(2));
                checkOutTripItems.innerText = itemsTotal;
                checkOutTotal.innerText = parseInt(tempTotal.toFixed(2));
                checkOutItems.innerText = itemsTotal;
                
            }
        }
    }

    
    addFlightsCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart-flight-item');
        div.innerHTML = `
        <!-- start 1 of flightCart items -->           
        
        <img src=${item.image} alt="flights" height="1rem" width="1.5rem">
        <div>
            <p style="line-height: 5px;">Destination: ${item.destination}</p>
            <p style="line-height: 5px;">Journey Date: ${item.date}  ${item.month}</p>
            <p style="line-height: 5px;">Price: USD ${item.price}</p>
            <span class="remove-item" data-id=${item.id} style="line-height: 12px;">remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount" >${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div>
        <!-- end 1 of flightCart items -->
        `;
        cartFlightContent.appendChild(div);
        // console.log(cartFlightContent);
    }
    
    addTripCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart-trip-item');
        div.innerHTML = `
        <!-- start 1 of TripCart items -->
        <img src=${item.image1} alt="trips" height="1rem" width="1.5rem">
        <div>
            <p style="line-height: 5px;">Title: ${item.tripTitle}</p>
            <p style="line-height: 5px;">Journey Date: ${item.date} </p>
            <p style="line-height: 5px;">Discount Price: USD ${item.price}</p>
            <span class="remove-item" data-id=${item.id} style="line-height: 12px;">remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" data-id=${item.id}></i>
            <p class="item-amount" >${item.amount}</p>
            <i class="fas fa-chevron-down" data-id=${item.id}></i>
        </div>
        <!-- end 1 of TripCart items -->
        
        `;
        cartTripContent.appendChild(div);
    
    }
        

    showCart() {
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
    }

    setupAPP() {
        flightCart = Storage.getFlightCart();
        tripCart = Storage.getTripCart();
        
        this.setFlightCartValues(flightCart);
        this.setTripCartValues(tripCart);
        //this.setTotalCartValues();

           
        this.populateFlightCart(flightCart);
        this.populateTripCart(tripCart);
                
        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);
    }

    setupFlightAPP() {
        flightCart = Storage.getFlightCart();
        tripCart = Storage.getTripCart();

        this.setFlightCartValues(flightCart);     
        //this.setTotalCartValues();


        this.populateFlightCart(flightCart);
        this.populateTripCart(tripCart);

        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);
    }

    setupTripAPP() {
        flightCart = Storage.getFlightCart();
        tripCart = Storage.getTripCart();

        
        this.setTripCartValues(tripCart);
        //this.setTotalCartValues();

        this.populateTripCart(tripCart);
        this.populateFlightCart(flightCart);
        

        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);
    }

    setupGeneralAPP() {
        flightCart = Storage.getFlightCart();
        tripCart = Storage.getTripCart();

        this.setFlightCartValues(flightCart);
        this.setTripCartValues(tripCart);
        //this.setTotalCartValues();

        this.populateFlightCart(flightCart);
        this.populateTripCart(tripCart);

        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);

    }

    populateFlightCart(cart) {
        cart.forEach(item => this.addFlightsCartItem(item));
        
    }
    
    populateTripCart(cart) {
        cart.forEach(item => this.addTripCartItem(item));
    }

    hideCart() {
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
    }

    cartLogic() {
        //clear flightCart button
        clearCartBtn.addEventListener('click', () => {
            this.clearFlightCart();
            this.clearTripCart();
            this.clearCheckoutList()
            
        });
        //Flight Cart functionality
        cartFlightContent.addEventListener('click', event => {
            if(event.target.classList.contains('remove-item')) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartFlightContent.removeChild(removeItem.parentElement.parentElement);
                this.removeFlightItem(id);
                
            } else if(event.target.classList.contains('fa-chevron-up')) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = flightCart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveFlightCart(flightCart);
                this.setFlightCartValues(flightCart); 
                
                addAmount.nextElementSibling.innerText = tempItem.amount;
                
            } else if(event.target.classList.contains('fa-chevron-down')) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = flightCart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0) {
                    Storage.saveFlightCart(flightCart);
                    this.setFlightCartValues(flightCart);                   
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    cartFlightContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeFlightItem(id);
                    this.setFlightCartValues(flightCart);
                }
            }
        });

        //Trip Cart functionality
        cartTripContent.addEventListener('click', event => {
            if(event.target.classList.contains('remove-item')) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartTripContent.removeChild(removeItem.parentElement.parentElement);
                this.removeTripItem(id);

            } else if(event.target.classList.contains('fa-chevron-up')) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = tripCart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveTripCart(tripCart);
                this.setTripCartValues(tripCart);
                
                
                addAmount.nextElementSibling.innerText = tempItem.amount;

            } else if(event.target.classList.contains('fa-chevron-down')) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = tripCart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0) {
                    Storage.saveTripCart(tripCart);
                    this.setTripCartValues(tripCart);
                    
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    cartTripContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeTripItem(id);
                    this.setTripCartValues()
                }
            }
        });
    }

    clearFlightCart() {
        let flightCartItem = flightCart.map(item => item.id);
        
        flightCartItem.forEach(id => this.removeFlightItem(id));
        while(cartFlightContent.children.length > 0 ) {
            cartFlightContent.removeChild(cartFlightContent.children[0]) ;           
        }
        this.hideCart();
        //this.setTotalCartValues()
    }
    
    clearTripCart(){
        
        let tripCartItem = tripCart.map(item => item.id);

        tripCartItem.forEach(id => this.removeTripItem(id));
        
        while(cartTripContent.children.length > 0 ) {
            cartTripContent.removeChild(cartTripContent.children[0]) ;
        }
        this.hideCart();
        //this.setTotalCartValues()
    }
    
    clearCheckoutList(){
        
        while(checkOutFlightDOM.children.length > 0 ) {
            checkOutFlightDOM.removeChild(checkOutFlightDOM.children[0]) ;
        }
        
        while(checkOutTripDOM.children.length > 0 ) {
            checkOutTripDOM.removeChild(checkOutTripDOM.children[0]) ;
        }
        
    }

    removeFlightItem(id) {
        flightCart = flightCart.filter(item => item.id !== id);
        
        
        this.setFlightCartValues(flightCart);
        Storage.saveFlightCart(flightCart);         
        
        // let button = this.getSingleFlightButton(id);       
        //
        // if(button.length > 0) {
        // button.disabled = false;
        // button.innerHTML = `GO`;
        // }
    }

    removeTripItem(id) {
        
        tripCart = tripCart.filter(item => item.id !== id);

        this.setTripCartValues(tripCart);
        Storage.saveTripCart(tripCart);

        // let tripButton = this.getSingleTripButton(id);
        //
        // if(tripButton.length > 0) {
        //     tripButton.disabled = false;
        //     tripButton.innerHTML = `join`;
        // }      
    }
    getSingleFlightButton(id) {
        return buttonsDOM.find(button => button.dataset.id === id) ;
        
    }    
    getSingleTripButton(id) {
        return tripButtonsDOM.find(tripButton => tripButton.dataset.id === id) ;
        
    }
    
    
}

//----------------------------------End of Display UI 

//----------------------------------local storage
class Storage {
    static saveFlights(flights) {
        localStorage.setItem("flights", JSON.stringify(flights));
    }

    static saveTrips(trips) {
        localStorage.setItem("trips", JSON.stringify(trips));
    }

    static getFlights(id) {
        let flights = JSON.parse(localStorage.getItem("flights"));
        return flights.find(flight => flight.id === id);
    }
    
    static getTrips(id) {
        let trips = JSON.parse(localStorage.getItem("trips"));
        return trips.find(trip => trip.id === id);
    }

    static saveFlightCart(flightCart) {
        localStorage.setItem("flightCart", JSON.stringify(flightCart));
    }
    static saveTripCart(tripCart) {
        localStorage.setItem("tripCart", JSON.stringify(tripCart));
    }

    static getFlightCart() {
        return localStorage.getItem("flightCart") ?
            JSON.parse(localStorage.getItem("flightCart"))
            : [];
    }
    
    static getTripCart() {
        return localStorage.getItem("tripCart") ?
            JSON.parse(localStorage.getItem("tripCart"))
            : [];
    }
    
    static getFlightButtons() {
        let flightButtons = JSON.parse(localStorage.getItem("flightButtons"));
        return flightButtons;
    }
    
    static getTripButtons() {
        let tripButtons = JSON.parse(localStorage.getItem("tripButtons"));
        return tripButtons;
    }
    
    static saveFlightButtons(flightButtons) {
        localStorage.setItem("flightButtons", JSON.stringify(flightButtons));
    }
    
    static saveTripButtons(tripButtons) {
        localStorage.setItem("tripButtons", JSON.stringify(tripButtons));
    }



    
}

//----------------------------------End of local storage

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    let flightCartItems = [];
    let tripCartItems = [];
    flightCartItems = JSON.parse(localStorage.getItem('flightCart'));
    tripCartItems = JSON.parse(localStorage.getItem('tripCart'));

    const flightsPage = /.*page-flights.*/;
    const tripPage = /.*page-trip.*/;
    const checkoutPage = /.*page-checkout.*/;
    const IndexPage = /.*index.*/;
    const secondTimeIndexPage = /.*#fp.*/;
    const aboutPage = /.*page-about.*/;
    const contactPage = /.*page-contact.*/;

    //setup app
    
    if(flightsPage.test(window.location)){
        ui.setupFlightAPP()
        //get all products
        products.getFlights().then(flights => {
            ui.displayFlights(flights);     
            Storage.saveFlights(flights);
            
        }).then(() => {
            ui.getFlightsButtons();
            ui.cartLogic();
        });
    } else if(tripPage.test(window.location)){
        
        ui.setupTripAPP()
        
        //get all journeys
        products.getTrips().then(trips => {
            ui.displayTrips(trips);            
            Storage.saveTrips(trips);
            ui.renderDifficulties(trips)

        }).then(() => {
            
            ui.getTripsButtons();
            ui.cartLogic();
        });
    } else if (checkoutPage.test(window.location)){
        
        //setUpGeneralApp
        
        ui.setupGeneralAPP()
        // console.log(flightCartItems);
        // console.log(tripCartItems);
        ui.displayFlightCheckOut(flightCartItems);
        ui.displayTripCheckOut(tripCartItems);

        ui.cartLogic();
     
    }else if(IndexPage.test(window.location)){
        
        ui.setupGeneralAPP()       
        ui.cartLogic();
    }else if(secondTimeIndexPage.test(window.location)){

        ui.setupGeneralAPP()
        ui.cartLogic();
        
    }else if(aboutPage.test(window.location)){
        
        ui.setupGeneralAPP()       
        ui.cartLogic();
    }else if(contactPage.test(window.location)){
        
        ui.setupGeneralAPP()       
        ui.cartLogic();
    }


});