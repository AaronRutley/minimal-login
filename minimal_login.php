<?php

/*
Plugin Name: Minimal Login
Plugin URI: http://www.aaronrutley.com/
Description: Feature plugin for a minimal WP login screen
Version: 0.0.1
Author: Aaron Rutley
Author URI: http://www.aaronrutley.com/
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

// enqueue minimal login JS
function minimal_login_js() {
	wp_enqueue_script( 'minimal_login_js', plugins_url( '/assets/minimal_login.js' , __FILE__ ), array( 'jquery' ), true );
}
add_action( 'login_enqueue_scripts', 'minimal_login_js', 10 );

// enqueue minimal login JS
function minimal_login_css(){
	wp_register_style('minimal_login_styles', plugins_url( '/assets/minimal_login.css' , __FILE__ ));
	wp_enqueue_style('minimal_login_styles');
}

add_action( 'login_enqueue_scripts', 'minimal_login_css', 10 );

?>