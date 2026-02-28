export const openContactModal = () => {
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
};

export const openPrivacyModal = () => {
    window.dispatchEvent(new CustomEvent("open-privacy-modal"));
};
