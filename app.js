$(function() {
    $('.thumbnail').on('click', function() {
      // Get the full-size image src
      const src = $(this).find('img').attr('src');
  
      // Create an overlay element to display the full-size image
      const overlay = $('<div>').addClass('overlay');
      const image = $('<img>').attr('src', src);
  
      // Append the image to the overlay and append the overlay to the body
      overlay.append(image);
      $('body').append(overlay);
  
      // Add a click event to close the overlay
      overlay.on('click', function() {
        $(this).remove();
      });
    });
  });
  