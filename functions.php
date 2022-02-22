<?php

/**
 * Block Patterns
 */

function pattern_replace_urls( $pattern_content ) {
	$content_urls = array(
		'https://wp.test/wp-content',
	);

	foreach( $content_urls AS $content_url )
	{
		$pattern_content = str_replace( $content_url, content_url(), $pattern_content );
	}

	return $pattern_content;
}

function jackie_load_patterns() {	
	require( dirname( __FILE__ ) . '/patterns/content/testimonials.php' );

	register_block_pattern_category( 'content', [
		'label' => _x( 'Testimonials', 'textdomain' ),
	]);
}
add_action('init', 'jackie_load_patterns');

/**
 * Block Styles
 */
function jackie_block_styles() {
	register_block_style(
		'core/button',
		array(
			'name'         => 'button-white',
			'label'        => __( 'Weiss', 'textdomain' )
		)
	);
}
add_action( 'init', 'jackie_block_styles' );

/**
 * Frontend Scripts
 */
function jackie_frontend_scripts() {	
	wp_enqueue_style( 'jackie-css', get_template_directory_uri() . '/assets/css/frontend.min.css' );
	wp_enqueue_script( 'jackie-js', get_template_directory_uri() . '/assets/js/frontend.min.js' );
}
add_action( 'wp_enqueue_scripts', 'jackie_frontend_scripts' );


/**
 * Editor Scripts
 */
function jackie_editor_scripts() {
	add_editor_style( 'assets/css/editor.min.css' );
}
add_action( 'after_setup_theme', 'jackie_editor_scripts' );

/**
 * WordPress Settings
 */
function allow_svg_upload( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

/**
 * Block editor settings
 */
function jackie_setup_theme() {
	remove_theme_support( 'core-block-patterns' );
}
add_action( 'after_setup_theme', 'jackie_setup_theme' );

function filter_metadata_registration( $metadata ) {
	if ( $metadata['name'] !== 'core/group' ) {
		return $metadata;
	}

    $metadata['supports']['spacing']['margin'] = [ "top", "bottom" ];

    return $metadata;
};
add_filter( 'block_type_metadata', 'filter_metadata_registration' );
