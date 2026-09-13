import '@testing-library/jest-dom';

// JSDOM mocks for scrolling
window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
