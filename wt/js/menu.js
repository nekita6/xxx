$( function() {

	"use strict";

	$( '.menu_icon' ).click( function() {
		$( '.menu' ).toggleClass( 'open' );
		$( '.menu_icon' ).toggleClass( 'open_icon' );
	} );

} );

 