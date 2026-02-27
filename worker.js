export default {
    async fetch(request, env) {

        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: corsHeaders(),
            });
        }

        if (request.method !== "POST") {
            return jsonResponse({ error: "Method not allowed" }, 405);
        }

        try {
            const data = await request.json();

            const wechat = (data.wechat || "").trim();
            const utm = data.utm || {};
            const honeypot = data.company || "";

            // Honeypot check
            if (honeypot) {
                return jsonResponse({ error: "Spam detected" }, 400);
            }

            // Basic validation
            if (!wechat || wechat.length < 3 || wechat.length > 50) {
                return jsonResponse({ error: "Invalid WeChat ID" }, 400);
            }

            const message = `
💄 New Consultation Request

WeChat ID: ${wechat}

UTM:
source: ${utm.source || "-"}
medium: ${utm.medium || "-"}
campaign: ${utm.campaign || "-"}
content: ${utm.content || "-"}
term: ${utm.term || "-"}

IP: ${request.headers.get("CF-Connecting-IP")}
      `.trim();

            const telegramResponse = await fetch(
                `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: env.CHAT_ID,
                        text: message,
                    }),
                }
            );

            if (!telegramResponse.ok) {
                return jsonResponse({ error: "Telegram send failed" }, 500);
            }

            return jsonResponse({ success: true }, 200);

        } catch (err) {
            return jsonResponse({ error: "Server error" }, 500);
        }
    },
};

function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    };
}

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
            ...corsHeaders(),
        },
    });
}