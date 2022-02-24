<?php
class Page 
{
  // class Page's Attributes'
  public $content;
  public $title =" Stephen Store";
  public $keywords = "Store";
  public $buttons = array("Home" => "home_by_class.php",
						   "Shopping Cart" => "orderform_by_class.php",
						   "Search Engine" => "search_by_class.php",
						   "Register" => "register_by_class.php"
						   );
						   //"Services" => "services.php",
						   //"Site map" => "map.php"
						   //);

  // class Page's operations
  public function _set($name, $value)
  {
    $this->$name =$value;
  }

  public function Display()
  {
	echo "<html>\n<head>\n";
	$this ->DisplayTitle();
	$this ->DisplayKeywords();
	$this ->DisplayStyles();
	echo "</head>\n<body>\n";
	$this ->DisplayHeader();	
	echo $this->content;
	$this -> DisplayFooter();
	echo "</body>\n</html>\n";
  }

  public function DisplayTitle()
  {
		echo "<title>".$this->title."</title>";
  }

  public function DisplayKeywords()
  {
		echo "<meta name='keywords' content='".$this -> keywords."'/>";
  }

  public function DisplayStyles()
  {
	?>
	<style>
	* {box-sizing: border-box;}
	body {
	margin: 0;
	font-family: Arial;
	}
	.header {
	overflow: hidden;
	background-color: lightslategray;
	padding: 10px 10px;
	}
	.header a {
	float: left;
	color: black;
	text-align: bottom;
	padding: 12px;
	text-decoration: none;
	font-size: 25px;
	line-height: 25px;
	border-radius: 10px;
	}
	.headera.logo {
	font-size: 25px;
	font-weight: bold;
	}
	.header a:hover {
	background-color: grey;
	color: black;
	}
	.headera.active {
	background-color: green;
	color: white;
	}
	.header-right {
	float: right;
	}
	@media screen and (max-width: 500px) {
	.header a {
	float: none;
	display: block;
	text-align: left;
	}
	.header-right {
	float: none;
	}
	}
	</style>
	<?php

  }

  public function DisplayHeader()
  {
		?>
		<!-- page header -->
		<header>
			<div class="header">
				<a href="home_by_class.php" class="logo">

							<div class ="imgbox">

								<img class= center-fit src= 'page_frame_style\logo\deer.png'; width="100px"; height: "100px" >
	
							</div>
							DEER DETECT 

				</a>
				<div class="header-right">
					<a class="active" href="#home">Critical Info</a>
					<a href="#contact">Analysis</a>
					<a href="#about">About Us</a>
					<a href="services.php">Login</a>
					<a href="orderform_by_class.php">Cart</a>
					<?php $this ->DisplayMenu($this->buttons); ?>
				</div>

			</div>
		</header>
		<?php
  }

  public function DisplayMenu ($buttons)
  {
		echo "<!-- menu -->
			  <nav>";
			  foreach ($buttons as $k => $v) {
					$kv = [$k, $v];

					if (list($name, $url) = $kv){
			               $this-> DisplayButton($name, $url,
									            true);// !$this -> IsURLCurrentPage($url)
					}
		      }
			  
		echo "</nav>\n";
  }

  public function IsURLCurrentPage($url)
  {
		if(strops($_SERVER['php_learning'],$url)===false) //$_SERVER['php_learning']
			{
				return false;
			}
			else
			{
				return true;
			}
  }

  public function DisplayButton($name, $url, $active = true)
  {
		if ($active) { ?>
			<div class = "menuitem">
				<a href = "<?=$url?>">
				<img src = "page_frame_style\logo\deer.png" alt="" height = "20" width="20"/>
				<span class = "menutext"><?=$name?></span>
				</a>
			</div>
			<?php
		} else { ?>
			<div class ="menuitem">
			<img src ="page_frame_style\logo\deer.png"  alt="" height = "20" width="20"/>
			<span class ="menutext"><?=$name?></span>
			</div>
			<?php
		}

  }

  public function DisplayFooter()
  {
	?>
	<!-- page footer -->
	<footer>
		<p>&copy; Stephen Store Ltd.<br/>
		Please see our 
		<a href ="home_by_class.php">legal information page</a>.</p>
	</footer>
	<?php
  }

}

class page1 extends page {

	public function DisplayFooter()
    {
		?>
		<!-- page footer -->
		<footer>
			<p> </p>
		</footer>
		<?php
     }

}


?>

