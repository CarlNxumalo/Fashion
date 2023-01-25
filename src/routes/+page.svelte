<script>
	
    import { page } from '$app/stores';
    import supabase from "./supa";
    import { goto } from "$app/navigation";
   
    //I will have to get the user location

    //get the the weather from that location

    //Categorize it then 

    //get the weather matching product from Supabase
    //Jacket, Gloves, Umbrella, Heater, Cap, Sunglasses, Water-Bottle
    //beanie, T-Shirt, Flip-Flops.
    //Select the item randomly in their category


    function order(){
        alert("You have succefully bought something");
    }
    
    
    
    //user corrodinates 
    var lat, long;

    // Weather data
    var temperature=0.0, locationName='';

    //funtion call count
    let count = true;
    //Api Http 
    var api_url = "https://api.openweathermap.org/data/2.5/weather?lat=-25.9695&lon=28&appid=d9173a614e15736fbff402e0db6ceee8&units=metric"
    async function getWeather(){
        // Making an API call (request)
        // and getting the response back
        const response = await fetch(api_url);

        // Parsing it to JSON format
        const data = await response.json();
        console.log("SHowing the Json data");
        console.log(data);

        // Retrieving data from JSON
        temperature = data.main.temp;
        locationName = data.name;
    
    }
    

    //getting the user location using the browswer
     
     function getLocation() {
        //check if the data has been called before
        if(count)
        { 
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
            count=false;
            } 
            else {
                //errro message
            alert("The Browser Does not Support Geolocation");
            }
            
        }
      }

      
      //funtion is called if location is found
      function showPosition(position) {
        console.log(position)

        //getting the data into the weather variables
        lat = position.coords.latitude;
        long = position.coords.longitude;

        //calling the weather function
        getWeather();
      }

      //Is called if error occurs when getting location
      function showError(error) {
        if(error.PERMISSION_DENIED){
            alert("The User have denied the request for Geolocation.");
        }
      }

     
            
    
      var vote="";

</script>


<body on:mousemove={getLocation}>
    <div class="Banner" >
        <h1>
            Fashion Hypothesis
        </h1>
    </div>
    
    <div class="content">
        <h1>Can people buy clothes accroding to the weather? (Instead of the season)</h1>
        <div class="Item">
            <p>
                For example it is {temperature} degrees celcius in {locationName} <br>
                Since it is hot I will show you a cool short sleave shirt.
            </p>
            <div class="card" style="padding-top: 10px;">
                <img src="vshirt.jpg" alt="Denim Jeans" style="width:80%">
                <h2>Versace Shirt</h2>
                <p class="desc" style="font-size: small;">Price: R4,500 <br> 5 star Review <br> 2 Day shipping</p>
                <button style="padding: 4px;">cart</button>
            </div>
        </div>
        <br>
        <p>We all know that big brands like Zara and H&M sell clothes accroding to the seasons.
           For example if it is winter they will have stock of winter wear like coats, jackets and gloves
           but we all know sometimes during winter it can be hot or humid on certain days. So on those days we can display 
           something like flip-flops or a sundress on the website temporarily and maybe it could lead to an off season
           purchase.
        </p>

        <h2>Potential Benefits</h2>
        <p>- When the weather contradicts the current season it can be an oppotunity to clear last seasons 
            stock.
        </p>
        <h2>Rate the idea:</h2>
        <form>
        
            <label for="Bad">Great idea, try it out!</label>
            <input type="radio" required>
            <br>
            <label for="Good">Dumbest idea i have heard.</label>
            <input type="radio" required>
        
            <br><br>
            <button type="submit">Vote</button>
        </form>
    </div>
    <footer>

    </footer>
</body>

<style>
    body{
        background-color: aliceblue;
        display: flex;
		flex-direction: column;
		align-items: center;
        margin: auto, auto;
        
        
    }
    div.Banner{
        
        display: flex;
		flex-direction: column;
		align-items: center;
        margin: 0, auto;
        max-width: 900px;
        width: 100%;
        color:aliceblue;
        background-color:cadetblue;
       
    }
    div.content{
        max-width: 900px;
        
    }
    div.card {
    box-shadow: 0 4px 8px 0 rgba(123, 0, 0, 0.2);
    max-width: 300px;
    
    width: 80%;
    border-radius: 2.5%;
    margin: auto;
    text-align: center;
    font-family: arial;
    }


    .card button {
    border: none;
    outline: 0;
    padding: 6px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 80%;
    font-size: 18px;
    
    }

    .card button:hover {
    opacity: 0.7;
    }
    p{
        font-size: larger;
    }
    h1{
        font-family: 'Times New Roman', Times, serif;
    }
    div.Item{
        display: flex;
		flex-direction: column;
		align-items: center;
    }

    label{
        font-size: larger;
    }
   
   footer{
    height: 100px;
   }
</style>