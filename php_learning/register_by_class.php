<?php 
	require ("page.php");

	$page1 = new page1();

	$page1-> Display();
?>

<!DOCTYPE HTML>
<html>
	<head>
		<title> Welcomed Registration </title> 

		<style type ="text/css">

			fieldset {
				width: 20%;
				border: 2px solid #ccccc;
			}

			label{
				width: 100px;
				float: left;
				text-align: left;
				font-weight: bold;
			 }

			 input {
				 border: 1px solid #000;
				 padding: 3px;
			 }

		 </style>

	</head>

	<body>
		<h1>Welcome Register! </h1> 

		<form action ="register_after_by_class(insert).php" method="post">

		<fieldset>
			<p><label for = "Name">Name </label>
			<input type="text" id="Name" name="Name" maxlength="25" size="25"/></p>

			<p><label for = "Password">Password </label>
			<input type="text" id="Password" name="Password" maxlength="25" size="25"/></p>

			<p><label for = "Email">Email </label>
			<input type="text" id="Email" name="Email" maxlength="25" size="25"/></p>

		 </fieldset>
		 
		 <p >
		  <input type="submit" value="Register" style="text-align: center;" /> 
		 </p>

		 </form>

		 <footer>
				<p>&copy; Stephen Store Ltd.<br/>
				Please see our 
				<a href ="home_by_class.php">legal information page</a>.</p>
	      </footer>
	</body>

</html>