<?php
 require ("page.php");
 $homepage = new page();

$homepage ->content = "<!-- page content -->
					<section>               
 
                       <h1>Product List</h1>

						

						<form action ='processorder_by_class.php' method='post'>
						<table style = 'border: 0px;'>
						<tr style ='background:#ccccc;'>
							<td style='width: 500px; text-align; center;font-size:20pt'>Item</td>
							<td style='width: 100px; text-align: LEFT;font-size:20pt'>Quantity</td>
						</tr>

						<tr>
							<td style='font-size:20pt;'>Tires</td>
							<td><input type = 'text' name='tireqty' size='20' style='width:300px; height:35px;font-size:20pt;' /></td>
						</tr>

						<tr>
							<td style='font-size:20pt;'>Oil</td>
							<td><input type = 'text' name='oilqty' size='20' style='width:300px; height:35px;font-size:20pt;' /></td>
						</tr>

						<tr>
							<td style='font-size:20pt;'>Spark Plugs</td>
							<td><input type = 'text' name='sparkqty' size='20' style='width:300px; height:35px;font-size:20pt;' /></td>
						</tr>

						<tr>
							<td style='font-size:20pt;'>Address</td>
							<td><input type = 'text' name='address' size='20' style='width:300px; height:35px;font-size:20pt;'/></td>
						</tr>

						<tr>
							<td style='font-size:20pt;'>How did you find our shop?</td>
							<td style='font-size:20pt;'> <select name ='find'; size='3'; width='300'>
							<option value = 'a'; style='font-size:20pt;'>I'm a regular customer</option>
							<option value = 'b'; style='font-size:20pt;'>TV advertising</option>
							<option value = 'c'; style='font-size:20pt;'>Phone Directory</option>
							<option value = 'd'; style='font-size:20pt;'>Word Of Mouth</option>
							</select>
							</td>
						</tr>

						<tr>
						<td colspan ='2' style='text-align: center;'><input type='submit' values='Submit Order'></td>
						</tr>
						</table>
						</form>
					</session>";

$homepage-> Display();

?>

<div align= 'LEFT'>
<table style ='width: 100%; border: 0'>
	<tr>

	<div class ='imgbox'>
			 
		<?php

		$picture = array('product photo\1.jpg','product photo\2.jpg','product photo\3.jpg','product photo\4.jpg','product photo\5.jpg','product photo\6.jpg','product photo\7.jpg','product photo\8.jpg','product photo\9.jpg','product photo\10.jpg');
		shuffle($picture);


		for($i = 0; $i < 3 ;$i++) {

			echo "<td style =\'width:33%; text-align:center\'>";
			echo "<img class= center-fit src= '$picture[$i]'>";
									
					
		}

		?>
	</div>
	</tr>
</table>
</div>
