describe('Can navigate around pages', () => {
  it('can visit and load all page content', () => {
    cy.visit('http://localhost:3000');

    // Create new user
    cy.get('[data-cy="header-sign-up-link"]').click();

    const userFirstName = `ded`;
    const userLastName = `moroz`;
    const userEmail = `ded_moroz@example.com`;
    const userUsername = `aaa`;
    const userPassword = `bbb`;

    cy.get('[data-cy="signup-page-first-name"]')
      .should('be.visible')
      .type(userFirstName);
    cy.get('[data-cy="signup-page-last-name"]').type(userLastName);
    cy.get('[data-cy="signup-page-email"]').type(userEmail);
    cy.get('[data-cy="signup-page-username"]').type(userUsername);
    cy.get('[data-cy="signup-page-password"]').type(userPassword + '{enter}');

    // Check if there is first name
    cy.get('[data-cy="user-page-first-name"]').should('contain', userFirstName);

    // Edit user first name and check if the name changed
    cy.get('[data-cy="user-edit-details-button"]').click();
    cy.get('[data-cy="user-edit-first-name"]').type('_moroz');
    cy.get('[data-cy="user-edit-details-button"]').click();
    cy.get('[data-cy="user-edit-first-name"]').should(
      'have.value',
      'ded_moroz',
    );

    // Create a new review
    cy.get('[data-cy="user-posts-button"]').click();
    cy.get('[data-cy="write-new-review-button"]').should('be.visible');
    cy.get('[data-cy="write-new-review-button"]').click();

    // What to write in the input fields (for the review)
    const streetName = `Herrengasse`;
    const houseNumber = `11`;
    const safetyComment = `Very safe. So happy to live here.`;
    const parksComment = `Lots of parks. So happy to live here.`;
    const shoppingComment = `Shops everywhere.`;
    const kidsComment = `Good for kids, lots of parks and playgrounds. Plenty of things to do.`;
    const transportComment = `Connections to all possible public transport. Can get anywhere in the city from here.`;
    const diningComment = `Restaurants on evey corner. Probably the best area for dining.`;
    const entertainmentComment = `Any kind of entertainment can be found here. Cinemas, theaters, opera, etc.`;
    const noiseComment = `It is the center of the city, with lots of clubs and bars. Can get a bit noisy at nights.`;

    // Enter street name, house number and select district
    cy.get('[data-cy="review-type-street-name"]').type(streetName);
    cy.get('[data-cy="review-type-house-number"]').type(houseNumber);
    cy.get('[data-cy="review-select-district-from-dropdown"]').select('1010');
    /* cy.get('[data-cy="review-safety-slider"]')
      .trigger('mousedown', { which: 1 }, { force: true })
      .trigger('mousemove', 8, { force: true })
      .trigger('mouseup');
      */

    // Write the comments using the values from the variables defined above
    cy.get('[data-cy="review-safety-comment"]').type(safetyComment);
    cy.get('[data-cy="review-parks-comment"]').type(parksComment);
    cy.get('[data-cy="review-shopping-comment"]').type(shoppingComment);
    cy.get('[data-cy="review-kids-comment"]').type(kidsComment);
    cy.get('[data-cy="review-transport-comment"]').type(transportComment);
    cy.get('[data-cy="review-dining-comment"]').type(diningComment);
    cy.get('[data-cy="review-entertainment-comment"]').type(
      entertainmentComment,
    );
    cy.get('[data-cy="review-noise-comment"]').type(noiseComment);
    // Press on the submit button to create the new review
    cy.get('[data-cy="review-submit-new-review-button"]').click();

    // cy.get('[data-cy="user-review-rating"]').should('eq', '5');
    cy.get('[data-cy="user-review-district"]').should('contain', '1010');
  });
});
