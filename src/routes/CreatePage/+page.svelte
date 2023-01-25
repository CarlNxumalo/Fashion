<script>
    var emailIn, passwordIn;
    function Inputs(){
        //input validation
        if(emailIn!=null)
        {
            if(passwordIn!=null)
            {
                //success
                //upload the user details to supabase
                location.assign("\UserInfo")
            }
            else{
                //error
                alert("please enter password")
            }
        }
        else{
            //error
            alert("Please enter email address")
        }
        
    }
</script>
<body style="background-color: darkolivegreen;">
    <div >
        <h1>Create Account</h1>
        <form>
            <label for="email">Enter your email</label><br>
            <input type="email" placeholder="carl@gmail.com" style="width: 80%" bind:value={emailIn}> <br><br>
            <label for="password">Enter your password</label> <br>
            <input type="password" name="userPassword" id="Password" style="width: 80%" bind:value={passwordIn}> <br> <br>
            <input type="button" value="Submit" style="font-size: larger;" on:click={Inputs} >
        </form>
        <br>
        <a href="/">Home</a>
        <br>
        <a href="/SignInPage">Sign into account</a>
    </div>
</body>

<style>
    
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto auto;
        background-color: aliceblue;
        padding-bottom: 10%;
        margin-top: 30px;
        max-width: 350px;
        min-height: 200px;
        max-height: fit-content;
        
        font-family: Georgia, 'Times New Roman', Times, serif;
	}
    form {
        min-width: 90%;
        align-items: center;
        text-align: center;
        
        font-size: larger;
    
    }
    input{
        min-height: 20px;
        border-color: black;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    a{
    color: darkolivegreen;
    }
   
</style>