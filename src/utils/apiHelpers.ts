export async function sendContactForm(data: { name: string; email: string; message: string }) {
  try {
    let URL = 'https://discord.com/api/webhooks/1404868724950962257/wBilFg-nAh-DlPRo7vfDvvPQLRjKPxuaWWjvFPsnuxxdINzWQkoSmzP0YrDxqvVMxJCR'; // Adjust the URL based on your API route
   // URL = "test"
    
    const bodyMessage = {
      content: `Received contact form submission on Nimnle.kiwi \n\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    };
    

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyMessage),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
}