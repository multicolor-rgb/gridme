<?php

 
# get correct id for plugin
$thisfile=basename(__FILE__, ".php");
 
# register plugin
register_plugin(
	$thisfile, //Plugin id
	'Gridme', 	//Plugin name
	'1.4', 		//Plugin version
	'Mateusz Skrzypczak',  //Plugin author
	'https://multicolor.stargard.pl', //author website
	'add new grid options on ckeditor', //Plugin description
	'plugins', //page type - on which admin tab to display
	'gridme'  //main function (administration)
);
 

register_script('gridme_script', $SITEURL.'plugins/gridme/js/script.js', '0.1', TRUE);
register_style('gridme_style', $SITEURL.'plugins/gridme/css/style.css', '0.1', FALSE);
register_style('gridme_bs_style', $SITEURL.'plugins/gridme/css/gridmestyle.css', '0.1', FALSE);

queue_script ( 'gridme_script' , GSBACK ) ; 
queue_style( 'gridme_style' , GSBACK ) ;
 queue_style( 'gridme_bs_style' , GSFRONT ) ;



?>