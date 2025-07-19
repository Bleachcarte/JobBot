export default async function handler(req, res) {
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  try {
    if (!OPENROUTER_API_KEY) {
      throw new Error("OpenRouter API key not configured");
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        // OpenRouter requires this header for statistics
        "HTTP-Referer": req.headers.referer || "https://jobbot-flax.vercel.app",
        "X-Title": "JobBot" // Optional but recommended
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in chat API:", error);
    res.status(500).json({ error: error.message });
  }
}