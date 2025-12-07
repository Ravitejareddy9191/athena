const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyTxv6IspCXHZdpYj8ZsiFRb8bNY3gJwyankUhdk1diGR9wyVeRhJR2ak0D_kuD3epR/exec';
export const submitToGoogleSheets = async (formData, formType) => {
  try {
    // Append formType to URL parameters for the script to route correctly
    const url = `${SCRIPT_URL}?formType=${formType}`;
    
    const response = await fetch(url, {
      method: "POST",
      // specific mode 'no-cors' is often needed for Google Apps Script 
      // but 'text/plain' body avoids preflight CORS checks in many browsers
      body: JSON.stringify(formData),
    });

    // Note: Google Apps Script with 'no-cors' returns an opaque response.
    // We assume success if no network error is thrown.
    return { success: true };
  } catch (error) {
    console.error("Error submitting form", error);
    return { success: false, error };
  }
};