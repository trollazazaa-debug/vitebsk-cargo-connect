import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderRequest {
  name: string;
  phone: string;
  cargoType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, cargoType, message }: OrderRequest = await req.json();

    console.log("Received order:", { name, phone, cargoType, message });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
          Новая заявка на грузоперевозку
        </h1>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Имя клиента:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Телефон:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="tel:${phone}" style="color: #f97316;">${phone}</a>
            </td>
          </tr>
          ${cargoType ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Тип груза:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${cargoType}</td>
          </tr>
          ` : ''}
          ${message ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Сообщение:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
          </tr>
          ` : ''}
        </table>
        
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          Заявка получена: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}
        </p>
        
        <div style="background: #f97316; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
          Свяжитесь с клиентом как можно скорее!
        </div>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ВитЭкспресс <onboarding@resend.dev>",
        to: ["vitexpress.00@mail.ru"],
        subject: `Новая заявка от ${name}`,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const result = await emailResponse.json();
    console.log("Email sent successfully:", result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-order-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
