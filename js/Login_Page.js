function login()
	{
        if(document.getElementById("username-field").value == "vikrant" && document.getElementById("password-field").value == "mandake")
		{
            window.open("./About.html")
        
        }
		else if(username-field =='')
		{
			alert("Please enter the correct username");
		}
		else if(password-field =='')
		{
			alert("Please enter the correct password");
		}
		else
		{
			alert("Please enter the correct username or password");	
		}
	}