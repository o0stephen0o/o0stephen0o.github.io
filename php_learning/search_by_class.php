<?php
	require ("page.php");
	$search = new page();
	$search ->content = " <!-- page content -->
	                        
							<section>
							
							<h1> Search Engine </h1> 
							
							<form action= 'result_by_class.php' method='post'>
								<p><strong>Choose Search Type:</strong><br /> 
									<select name = 'searchtype'>
									<option value = 'Company'>Company</option>
									<option value = 'Price'>Price</option>
									<option value = 'Volume'>Volume</option>
								</select>
								</p>

								<p><strong>Enter Search Term:</strong><br /> 
									<input name = 'searchterm' type='text' size='40'></p>
								<p><input type='submit' name='submit' value='Search'></p>
																				
							</section>";
							
	$search -> Display();

?>


