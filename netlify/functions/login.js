exports.handler = async (event) => {
  console.log("=".repeat(60));
  console.log("[LOGIN FUNCTION] Nova tentativa de login");
  console.log("HTTP Method:", event.httpMethod);
  console.log("Path:", event.path);
  console.log("Headers:", JSON.stringify(event.headers, null, 2));
  console.log("Body recebido:", event.body);
  console.log("=".repeat(60));

  // Apenas aceitar POST
  if (event.httpMethod !== "POST") {
    console.log("[ERROR] Method not allowed. Expected POST, got:", event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    console.log("[PARSE] A fazer parse do body...");
    const { email, password, redirect } = JSON.parse(event.body);

    console.log("[PARSE] ✓ Body parseado com sucesso");
    console.log("[LOGIN] Email recebido:", email);
    console.log("[LOGIN] Password recebida:", password ? "***" : "VAZIA");
    console.log("[LOGIN] Redirect:", redirect);

    // Credenciais válidas
    const CREDENTIALS = {
      "edgar-m-quintero@alticelabs.com": "meoEnergia2024!",
      "diogo-a-rocha@alticelabs.com": "mamahuevo",
      "cesar.p.carvalho@alticelabs.com": "meoEnergia2025",
      "ricardo-a-filipe@alticelabs.com": "meoEnergia2025",
      "jorge-m-sousa@alticelabs.com": "meoEnergia2025"
    };

    console.log("[VALIDATE] Credenciais válidas no sistema:", Object.keys(CREDENTIALS));
    console.log("[VALIDATE] A verificar se o email existe...");

    if (!CREDENTIALS[email]) {
      console.log("[ERROR] Email NÃO encontrado:", email);
      console.log("[ERROR] Emails disponíveis:", Object.keys(CREDENTIALS));
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Email não encontrado" }),
      };
    }

    console.log("[VALIDATE] ✓ Email encontrado");
    console.log("[VALIDATE] A verificar password...");
    console.log("[VALIDATE] Password esperada:", CREDENTIALS[email]);
    console.log("[VALIDATE] Password recebida:", password);
    console.log("[VALIDATE] Match:", CREDENTIALS[email] === password);

    if (CREDENTIALS[email] !== password) {
      console.log("[ERROR] Password INCORRETA para:", email);
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Password inválida" }),
      };
    }

    console.log("[SUCCESS] ✓ Credenciais válidas!");
    console.log("[COOKIE] A criar cookie de sessão...");

    // Credenciais válidas - retornar token
    return {
      statusCode: 200,
      headers: {
        "Set-Cookie":
          "meo_auth_session=authenticated; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800",
      },
      body: JSON.stringify({
        success: true,
        redirect: redirect || "/",
      }),
    };
  } catch (error) {
    console.error("[FATAL ERROR]", error);
    console.error("Stack:", error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error: " + error.message }),
    };
  }
};
